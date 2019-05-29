var NPVNexus = NPVNexus || {};
NPVNexus.Delay = 1000;
NPVNexus.Nav = (function () {
    Init = function () {
        $(document).ready(function () {
            $('.navbar-nav .dropdown').hover(function () {
                $(this).addClass("open");
            }, function () {
                $(this).removeClass("open");
            });
        });
    }

    return {
        init: Init
    }
}());

//Status Messages
NPVNexus.Status = (function () {
    var tmr = null;
    var timeOut = 1500;
    var Error = function (msg) {
        var $elm = $("#StatusAlert");
        var output = (msg != null) ? msg : "* An error Occured";
        $elm.html(output).removeClass("loading").addClass("error");
        tmr = window.setTimeout(function () { $elm.removeClass("error") }, timeOut);
        console.log(output);
    };
    var Success = function (msg) {
        var $elm = $("#StatusAlert");
        var output = (msg != null) ? msg : "* Saved";
        $elm.html(output).removeClass("loading").addClass("success");
        tmr = window.setTimeout(function () { $elm.removeClass("success") }, timeOut);

        //   console.log(output);
    };
    var Loading = function (msg, expire, call) {
        var $elm = $("#StatusAlert");
        var output = (msg != null) ? msg : "* Processing...";
        $elm.html(output).addClass("loading");
        if (expire) {
            tmr = window.setTimeout(function () { $elm.removeClass("loading") }, expire);
        }
        return true;
    };
    var RemoveLoading = function (msg, expire) {
        var $elm = $("#StatusAlert");
        $elm.removeClass("loading");

    };
    return {
        error: Error,
        loading: Loading,
        success: Success,
        removeLoading: RemoveLoading
    };
}());
NPVNexus.Formatters = (function () {
    var currency = function (val) {
        ret = "";
        if (val) {
            ret = "$" + val.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
        }
        return ret;
    }
    var phone = function (val) {
        return val.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');;
    }
    var friendlyName = function (val) {
        return (FriendlyDictionary[val] != null) ? FriendlyDictionary[val] : val;
    }

    return {
        currency: currency,
        friendlyName: friendlyName
    };
}());

//View Apprasal Page
NPVNexus.View_Appraisal = (function () {
    //Variables
    var footable;
    var tmeOut = [];

    //Public
    var Init = function () {
        $(document).ready(function () {
            //Set visibility of Appraisal Info based on Status DD
            setStatus();
            //Set Up page Event Handlers
            eventHandlers();
            //Instantiate FooTables
            footable = $('table').footable({});
        });

    };
    var SetUpMap = function (elm, coords) {
        if (coords.length > 0) {
            var theSpot = new google.maps.LatLng(coords[0][0], coords[0][1]);
            var mapOptions = { center: theSpot, zoom: 13 };
            var map = new google.maps.Map(elm, mapOptions);

            _.each(coords, function (element, index) {
                var coord = new google.maps.Marker({
                    position: new google.maps.LatLng(coords[index][0], coords[index][1]), map: map
                });
            });
        }
    }

    //Private
    var eventHandlers = function () {

        // Footer Table Btn Toggle
        $("#BtnActive,#BtnHistorical,#BtnSimilar").click(function () {

            setTable($(this).attr("id"));

        });

        //Ajax Actions
        $('#Update').on('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            saveInvoiceSent($(this));

        });
        $('#InvoiceSent').on('change', function (e) {
            //Make Ajax Call
            saveAppraisalInfo($(this));
        });
        $('#Status').on('change', function (e) {
            if ($(this).val() != "COMPLETED" && $(this).val() != "DRAFT_SENT") {
                $(".showhideoptions").hide();
                saveAppraisalStatus($(this), function () { saveAppraisalInfo($('#InvoiceSent')); });
                $("#InvoiceSent").removeAttr("checked").attr("disabled", "true");
            } else {
                $("#InvoiceSent").removeAttr("disabled");
                $(".showhideoptions").show();
                if ($(this).val() == "COMPLETED") {
                    $("#InvoiceSent").attr("disabled", "true");
                    disableAppraisalSpecs(true);
                    saveAppraisalStatus($(this));

                } else {
                    disableAppraisalSpecs(false);
                }
            }
            //Make Ajax Call
        });
        $('#Expenses').on('keyup', function (e) {
            if (tmeOut[0]) {
                window.clearTimeout(tmeOut[0]);
            }
            var $elm = $('#Expenses');
            var regex = /^\s*(\+|-)?((\d+(\.\d\d)?)|(\.\d\d))\s*$/;
            tmeOut[0] = window.setTimeout(function () {
                var val = $elm.val()
                if (val.match(regex)) {
                    if (val.indexOf(".") == -1) {
                        $elm.val((val + ".00"));
                    }
                    $elm.removeClass("error")
                    saveAppraisalFee($elm)
                } else {
                    $elm.addClass("error")
                }
            }, NPVNexus.Delay);
        });
        $('#ExpensesHeld').on('keyup', function (e) {
            if (tmeOut[1]) {
                window.clearTimeout(tmeOut[1]);
            }
            var $elm = $('#ExpensesHeld');
            var regex = /^\s*(\+|-)?((\d+(\.\d\d)?)|(\.\d\d))\s*$/;
            tmeOut[1] = window.setTimeout(function () {
                var val = $elm.val()
                if (val.match(regex)) {
                    if (val.indexOf(".") == -1) {
                        $elm.val((val + ".00"));
                    }
                    $elm.removeClass("error")
                    saveAppraisalFee($elm)
                } else {
                    $elm.addClass("error")
                }
            }, NPVNexus.Delay);
        });
    };
    var setTable = function (active) {
        $(".tablebtn.active").removeClass("active");
        $("#" + active).addClass("active");
        switch (active) {
            case "BtnActive":
                $("#Active").show().trigger('footable_resize');
                $("#Historical,#Similar").hide();
                break;
            case "BtnHistorical":
                $("#Historical").show().trigger('footable_resize');
                $("#Active,#Similar").hide();
                break;
            case "BtnSimilar":
                $("#Similar").show().trigger('footable_resize');
                $("#Active,#Historical").hide();
                break;
        }
        $('table.footable').trigger('footable_redraw');
    };
    var saveAppraisalStatus = function ($this,callback) {
        NPVNexus.Status.loading();
        $.ajax({
            type: 'PATCH',
            dataType: 'JSON',
            url: $('#Update').attr('href'),
            data: JSON.stringify({
                'status': $("#Status").val()
            }),
            contentType: 'application/json',
            success: function (data) {
                if (callback) {
                    callback();
                }
                NPVNexus.Status.success();
            },
            error: function (data) {
                NPVNexus.Status.error();
            }
        });
    }
    var saveAppraisalInfo = function ($this) {
        NPVNexus.Status.loading();
        $.ajax({
            type: 'PATCH',
            dataType: 'JSON',
            url: $('#Update').attr('href'),
            data: JSON.stringify({
                'invoice_sent': $this.prop('checked')
            }),
            contentType: 'application/json',
            success: function (data) {
                NPVNexus.Status.success();
            },
            error: function (data) {
                NPVNexus.Status.error();
            }
        });
    }
    var saveAppraisalFee = function ($this) {
        NPVNexus.Status.loading();
        $.ajax({
            type: 'PATCH',
            dataType: 'JSON',
            url: $('#Update').attr('href'),
            data: JSON.stringify({
                'expenses': $('#Expenses').val().toString(),
                'expenses_held': $('#ExpensesHeld').val().toString()
            }),
            contentType: 'application/json',
            success: function (data) {
                NPVNexus.Status.success();
            },
            error: function (data) {
                NPVNexus.Status.error();
            }
        });
    }
    var saveInvoiceSent = function ($this) {
        NPVNexus.Status.loading();
        $.ajax({
            type: 'PATCH',
            dataType: 'JSON',
            url: $this.attr('href'),
            data: JSON.stringify({
                'hours_spent': $("#HoursSpent").val(),
                'final_value': $("#FinalValue").val(),
                'status': $("#Status").val()
            }),
            contentType: 'application/json',
            success: function (data) {
                NPVNexus.Status.success();
            },
            error: function (data) {
                NPVNexus.Status.error();
            }
        });
    }
    var setStatus = function () {
        var statusVal = $("#Status").val();
        if (statusVal != "COMPLETED" && statusVal != "DRAFT_SENT") {
            $(".showhideoptions").hide();
        } else {
            $(".showhideoptions").show();
            if (statusVal == "COMPLETED") {
                $("#InvoiceSent").attr("disabled", "true");
                disableAppraisalSpecs(true);
            }
        }
    }
    var disableAppraisalSpecs = function (disable) {
        if (disable) {
            $("#HoursSpent").attr('disabled', true);
            $("#FinalValue").attr('disabled', true);
            $("#Update").hide();
        }
        else {
            $("#HoursSpent").removeAttr('disabled');
            $("#FinalValue").removeAttr('disabled');
            $("#Update").show();
        }
    }
    return {
        init: Init,
        setUpMap: SetUpMap
    };
}());

//View Client List Page
NPVNexus.View_Client_List = (function () {
    //Public
    var Init = function () {
        $(document).ready(function () {
            $('table').footable({});
            $('.tooltipicon').tooltip({});
        });
    };
    return {
        init: Init
    };
}());

//View Licensing Page
NPVNexus.View_State_Licensing = (function () {
    //Variables
    var stateSelectedColor = "#ccc";
    var stateOverColor = "#ffffff";
    var initialStateColor = "#003e7e"
    var strokeColor = "#6b9dd3";
    var activeStrokeColor = "#d2252c";
    var mapWidth = "730";
    var mapHeight = "480";
    var mobileMapWidth = "330";
    var mobileMapHeight = "200";
    var textAreaWidth;
    var textAreaPadding;
    var mouseX = 0;
    var mouseY = 0;
    var current = null;
    var initialState = "IL";

    // Set up for mouse capture
    if (document.captureEvents && Event.MOUSEMOVE) {
        document.captureEvents(Event.MOUSEMOVE);
    }
    // Main function to retrieve mouse x-y pos.s
    var getMouseXY = function (e) {
        var scrollTop = $(window).scrollTop();
        if (e && e.pageX) {
            mouseX = e.pageX;
            mouseY = e.pageY - scrollTop;
        } else {
            mouseX = event.clientX + document.body.scrollLeft;
            mouseY = event.clientY + document.body.scrollTop;
        }
        // catch possible negative values
        if (mouseX < 0) {
            mouseX = 0;
        }
        if (mouseY < 0) {
            mouseY = 0;
        }
        $('#Map').next('.point').css({
            left: mouseX - 50,
            top: mouseY - 70
        })
    }
    // Set-up to use getMouseXY function onMouseMove

    var resizeMap = function (paper) {
        var height = 0,
            width = 0;
        if ($(window).width() <= 750) {
            height = mobileMapHeight;
            width = mobileMapWidth;
        } else {
            height = mapHeight;
            width = mapWidth;
        }
        paper.changeSize(width, height, true, false);

        $(".mapWrapper").css({
            'width': width + 'px',
            'height': height + 'px'
        });

    }
    //Public
    var Init = function () {
        $(document).ready(function () {
            document.body.onmousemove = getMouseXY;
            $('table').footable({});
            createMap();
        });
    };
    var createMap = function () {
        //start map
        var r = new ScaleRaphael('Map', 930, 580),
        attributes = {
            fill: initialStateColor,
            cursor: 'pointer',
            stroke: strokeColor,
            'stroke-width': 1,
            'stroke-linejoin': 'round'
        },
        abv = new Array();
        names = new Array();
        $stateSelect = $("#StateNames");
        for (var state in usamappaths) {
            //Create obj
            var obj = r.path(usamappaths[state].path);
            obj.attr(attributes);
            abv[obj.id] = usamappaths[state].abv;
            names[obj.id] = usamappaths[state].name;
            var option = $('<option/>', { value: abv[obj.id] }).text(usamappaths[state].name);
            $stateSelect.append(option);
            obj.attr({
                fill: initialStateColor
            });
            obj.mouseover(function (e) {
                //Animate if not already the current state
                if (this != current) {
                    this.animate({
                        fill: stateSelectedColor,
                        stroke: activeStrokeColor,
                        'stroke-width': 2
                    }, 500);
                    this.toFront();
                }
            });
            obj.mouseout(function (e) {
                if (this != current) {
                    this.animate({
                        fill: initialStateColor,
                        fill: initialStateColor,
                        stroke: strokeColor
                    }, 500);
                }
                $('#map').next('.point').remove();
            });
            obj.mouseup(function (e) {

                var stateAbv = abv[this.id];
                window.location = "/license-info/" + stateAbv;
            });
        }
        //Use to PreSet a state
        //var id = jQuery.inArray(initialState, abv);
        //if (id > -1){
        //    r.getById(id).events[2].f.call(r.getById(id));
        //}
        $("body").on("change", "#StateNames", function () {
            window.location = "/license-info/" + $(this).val();
        });
        $(window).resize(function () {
            resizeMap(r);
        });
        resizeMap(r);

    }
    return {
        init: Init
    };
}());

//View State License info
NPVNexus.View_State_Licensing_Info = (function () {
    Init = function () {
        $(document).ready(function () {
            $('.footable').footable({});
        });
    }
    return {
        init: Init
    };
}());

//View Licensing Page
NPVNexus.View_AMF = (function () {
    //Variables

    //Private
    var eventHandlers = function () {
        $("#BtnActive").click(function () {
            $("#Active").show();
            $("#Historical").hide();
            $(".active").removeClass("active");
            $("#BtnActive").addClass("active");
        });

        $("#BtnHistorical").click(function () {
            $("#Active").hide();
            $("#Historical").show();
            $(".active").removeClass("active");
            $("#BtnHistorical").addClass("active");
        });
    };

    //Public
    var Init = function () {
        $(document).ready(function () {
            $('table').footable({});
            eventHandlers();
        });
    };

    return {
        init: Init
    };
}());

//View Appraiser Home Page
NPVNexus.View_Appraiser_Home = (function () {
    //Variables
    var employee, footable;
    var fee = 0;
    var today = new Date();
    var cMonth = today.getMonth() + 1;
    var current_year = today.getFullYear();
    //Public
    var Init = function (emp) {
        employee = emp;
        $(document).ready(function () {
            footable = $('table.footable').footable({});
            eventHandlers();
            setUp();
        });
    };

    //Private
    var eventHandlers = function () {
        $("#DateBtn").click(function () {
            NPVNexus.Status.loading();
            var start_date = convertDate($("#StDate").val());
            var end_date = convertDate($("#EndDate").val());
            //console.log(start_date);
            //console.log(end_date);
            var url = "/api/v1/assignment/?employee=" + employee + "&role__in=APPRAISER,ASSOCIATE,RESEARCHER&appraisal__due_date__gte=" + start_date + "&appraisal__due_date__lte=" + end_date;
            url += "&fields=appraisal__job_number,appraisal__due_date,appraisal__engagement_property__property__name,appraisal__engagement_property__property__id,appraisal__id";
            url += ",appraisal__engagement_property__engagement__client__name,appraisal__engagement_property__engagement__client__id,appraisal__engagement_property__property__property_type,appraisal__engagement_property__property__property_subtype,fee,role,appraisal__status,appraisal__hours_spent";
            loadData($('#Assignments tbody'), url);
        });
        $("#Filter").change(function () {
            if ($(this).val() == "Date Range") {
                $(".quarters").toggle();
                $(".dates").toggle();
            } else if ($(this).val() == "Quarters") {
                $(".quarters").toggle();
                $(".dates").toggle();
            }
        });
        $("#QuarterBtn").click(function () {
            NPVNexus.Status.loading();
            var url = getQuarterDatesRequestURL($("#QuartersQt").val(), $("#QuartersYrs").val());
            loadData($('#Assignments tbody'), url);
        });
    };
    var getCurrentQuarter = function () {
        var cQuarter = 0;
        if (cMonth > 0 && cMonth < 4) {
            cQuarter = 1;
        } else if (cMonth > 3 && cMonth < 7) {
            cQuarter = 2;
        } else if (cMonth > 6 && cMonth < 10) {
            cQuarter = 3;
        } else if (cMonth > 9 && cMonth < 13) {
            cQuarter = 4;
        }
        return cQuarter;
    }
    var setUp = function () {
        //Hide Dates
        $(".dates").hide();
        //Set Filters DD to current year
        NPVNexus.GetYearRange(2010, $("#QuartersYrs"));

        $("#QuartersQt > option[value=" + getCurrentQuarter() + "]").each(function () {
            $(this).prop('selected', 'true');
        });
        $("#Filter option:first-child").attr("selected", "selected");
        //  $('#completed-assignments tbody').html(tableData(assign)[2]);
        $("#QuarterBtn").trigger("click");

    }
    var loadData = function ($elm, url) {
        var loadData = { rs: null };
        $.ajax({
            async: false,
            dataType: "json",
            data: "GET",
            url: url,
            contentType: "application/json",
            success: function (response) {
                //var table = tableData(response.objects);
                //$('#assignment-table tbody').html(table[0]);
                //$('#completed-assignments tbody').html(table[2]);
                //$('#totalFee').html(table[1]);
                if (response != null && response.objects.length > 0)
                    loadData = { rs: response.objects }
                renderTable($elm, loadData);
                //$('table.footable').removeClass("tablet,mobile,breakpoint,footable-loaded");
                //     $('table.footable').unbind("footable");
                $('table.footable').trigger('footable_initialized');
                window.setTimeout(function () { $("#StatusAlert").removeClass("loading"); }, 300);
            },
            error: function (response) {
                NPVNexus.Status.error();
                console.log(response);
            }
        });
    };
    /**
        * Convert the date to a usable format 
        * from the date picker to python datetime-ish
        **/
    var convertDate = function (date) {
        var date_array = date.split('/');
        var month = date_array[0];
        var day = date_array[1];
        var year = date_array[2];
        var conv_date = year + "-" + month + "-" + day;
        return conv_date;

    };

    var renderTable = function ($elm, data) {
        var template = _.template($(".tableRow").html());
        // console.log(data);
        $elm.html(template(data));
        footable.trigger('footable_redraw');
        $('.tooltipicon').tooltip({});
        $("#TotalFee").html(NPVNexus.Formatters.currency(NPVNexus.View_Appraiser_Home.fee.toFixed(2)));
    }
    var getQuarterDatesRequestURL = function (quarter, year) {
        var start_date = "";
        var end_date = "";
        var URL = "";
        var emp = employee;
        if (quarter == 1) {
            start_date = year + "-01-01";
            end_date = year + "-03-31";
        } else if (quarter == 2) {
            start_date = year + "-04-01";
            end_date = year + "-06-30";
        } else if (quarter == 3) {
            start_date = year + "-07-01";
            end_date = year + "-09-30";
        } else if (quarter == 4) {
            start_date = year + "-10-01";
            end_date = year + "-12-31";
        }
        URL = "/api/v1/assignment/?employee=" + emp + "&role__in=APPRAISER,ASSOCIATE,RESEARCHER&appraisal__due_date__gte=" + start_date + "&appraisal__due_date__lte=" + end_date;
        URL += "&fields=appraisal__job_number,appraisal__due_date,appraisal__engagement_property__property__name,appraisal__engagement_property__property__id,appraisal__id";
        URL += ",appraisal__engagement_property__engagement__client__name,appraisal__engagement_property__engagement__client__id,appraisal__engagement_property__property__property_subtype,appraisal__engagement_property__property__property_type,fee,role,appraisal__status,appraisal__hours_spent";
        return URL;
    }
    return {
        init: Init,
        fee: fee
    };
}());

//View All Appraisals Page
NPVNexus.View_Appraisals = (function () {
    //Variables
    var apprsls, clients, assign, employee, footable;
    var fee = 0;
    var today = new Date();
    var current_year = today.getFullYear();
    var cMonth = today.getMonth() + 1;
    var loaded = [false, false];
    var dataLoad = [null, null];
    var winTmr = null;
    var headTmr = null;
    var activeCollection = [];
    var table = null;
    var tableElm = null;
    var showFee = false;

    //Public
    var Init = function (cli, emp, showfee) {
        clients = cli;
        employee = emp;
        showFee = showfee;
        $(document).ready(function () {
            footable = $('table.footable').footable({});
            eventHandlers();
            setUp();
        });
    };
    var setUp = function () {
        //Hide Dates
        $(".dates,.range-div").hide();
        var today = new Date();
        NPVNexus.GetYearRange(2010, $("#QuartersYrs"));
        $("#Filter option:first-child").attr("selected", "selected");
        //  renderTable($('#Appraisals tbody'), { rs: apprsls });
        $("#QuarterBtn").trigger("click");

    }
    //Private
    var eventHandlers = function () {
        $(window).resize(function () {
            table.fnDraw(false);
            $('table.footable').trigger('footable_initialized');
        });
        $("#TimeFilter").change(function () {
            if ($(this).val() == "Date Range") {
                $(".quarters-div").toggle();
                $(".range-div").toggle();
            } else if ($(this).val() == "Quarters") {
                $(".quarters-div").toggle();
                $(".range-div").toggle();
            }
        });
        $("#QuarterBtn, #DateBtn").click(function () {
            loadData($('#Appraisals'), generateUrls());
        });

        $("#QuartersYrs > option").each(function () {
            if ($(this).val() == current_year) {
                $(this).prop("selected", "true");
            }
        });

        $("#QuartersQt > option").each(function () {
            if ($(this).val() == getCurrentQuarter()) {
                $(this).prop("selected", "true");
            }
        });


        $("#Filter").change(function () {
            if ($(this).val() == "Date Range") {
                $(".quarters").toggle();
                $(".dates").toggle();
            } else if ($(this).val() == "Quarters") {
                $(".quarters").toggle();
                $(".dates").toggle();
            }
        });
    };

    var getCurrentQuarter = function () {
        var today = new Date();
        var cMonth = today.getMonth() + 1;
        var cQuarter = 0;
        if (cMonth > 0 && cMonth < 4) {
            cQuarter = 1;
        } else if (cMonth > 3 && cMonth < 7) {
            cQuarter = 2;
        } else if (cMonth > 6 && cMonth < 10) {
            cQuarter = 3;
        } else if (cMonth > 9 && cMonth < 13) {
            cQuarter = 4;
        }
        return cQuarter;
    }

    var generateUrls = function () {
        var appraisalUrl, scheduledAppraisalUrl;
        var appraisalUrlBase = "/api/v1/appraisal/?fields=engagement_property__property__id,engagement_property__property__name,due_date,invoice_sent,engagement_property__engagement__client__name,engagement_property__engagement__client__id,status,id,job_number,engagement_property__property__property_type,engagement_property__property__property_subtype";
        var scheduledAppraisalUrlBase = "/api/v1/scheduled-appraisal/?fields=engagement_property__property__id,engagement_property__property__name,due_date,engagement_property__engagement__client__name,engagement_property__engagement__client__id,id,job_number,engagement_property__property__property_type,engagement_property__property__property_subtype";
        if (showFee) {
            appraisalUrlBase += ",fee";
            scheduledAppraisalUrlBase += ",fee";
        }
        var filter = $("#Filter").val();
        var officeId = $("#OfficeList").val();
        if (officeId != "") {
            appraisalUrlBase += "&office=" + officeId;
            scheduledAppraisalUrlBase += "&office=" + officeId;
        }

        var $statusOpt = $('#StatusFilter option:selected');

        if (filter == "Date Range") {
            appraisalUrlBase += "&due_date__gte=" + $("#StDate").val() + "&due_date__lte=" + $("#EndDate").val();
            scheduledAppraisalUrl = scheduledAppraisalUrlBase + "&due_date__gte=" + $("#StDate").val() + "&due_date__lte=" + $("#EndDate").val();
        } else if (filter == "Quarters") {
            appraisalUrlBase += "&" + getQuarterDatesRequestURL($("#QuartersQt").val(), $("#QuartersYrs").val());
            scheduledAppraisalUrl = scheduledAppraisalUrlBase + "&" + getQuarterDatesRequestURL($("#QuartersQt").val(), $("#QuartersYrs").val());
        }
        if ($('#StatusFilter option:selected').attr('data-statuses') != "ALL") {
            appraisalUrlBase += "&status__in=" + $statusOpt.data('statuses');
            scheduledAppraisalUrl += "&status__in=" + $statusOpt.data('statuses');
        }
        if ($statusOpt.attr('data-statuses') != "ALL" && $statusOpt.attr('data-statuses') != "IN_PROGRESS,INFO_NEEDED,DRAFT_SENT,COMPLETED,SCHEDULED," && $statusOpt.attr('data-statuses') != "SCHEDULED") {
            //Set date early enough to guarentee no results
            scheduledAppraisalUrl = scheduledAppraisalUrlBase + "&due_date__lte=2000-01-01";
        }
        return [appraisalUrlBase, scheduledAppraisalUrl];
    }

    var loadData = function ($elm, urls) {
        _.each(urls, function (url, idx) {
            loaded[idx] = false;
            NPVNexus.Status.loading();
            $.ajax({
                async: true,
                dataType: "json",
                data: "GET",
                url: url,
                contentType: "application/json",
                success: function (response) {
                    loaded[idx] = true;
                    dataLoad[idx] = response.objects
                    if (loaded[0] && loaded[1]) {
                        NPVNexus.Status.loading("* Rendering...");
                        activeCollection = dataLoad[0].concat(dataLoad[1]);
                        // Using timer to allow browser time to repaint before rendering the template - RF
                        //if(winTmr != null){
                        //    window.clearTimeout(winTmr);
                        //}
                        //winTmr = window.setTimeout(function(){
                        //    renderTable($elm, { rs: dataLoad });
                        //    $('table.footable').trigger('footable_initialized');
                        //    NPVNexus.Status.removeLoading();
                        //}, 20);
                        renderTable($elm, { rs: activeCollection });
                        //$('table.footable').trigger('footable_initialized');
                        $('table.footable').trigger('footable_redraw');

                        NPVNexus.Status.removeLoading();
                    }
                },
                error: function (xhr, text_status, error_thrown) {
                    if (xhr.status == 500) {
                        NPVNexus.Status.error();
                        console.log(text_status);
                    }

                }
            });
        });
    };

    /** Convert the date to a usable format 
     * from the date picker to python datetime-ish
     **/
    var convertDate = function (date) {
        var date_array = date.split('/');
        var month = date_array[0];
        var day = date_array[1];
        var year = date_array[2];
        var conv_date = year + "-" + month + "-" + day;
        return conv_date;

    };

    var renderTable = function ($elm, data) {
        //if (tableElm == null){
        //    tableElm = $elm.clone();
        //}
        var false_class_name = NPVNexus.Formatters.friendlyName(false);

        var columns = [
             { "sTitle": "Due Date", "mData": "due_date" },
             { "sTitle": "Job #", "mData": "job_number" },
             { "sTitle": "Appraiser", "mData": "lead_appraiser" },
             { "sTitle": "Client", "mData": "engagement_property__engagement__client__name" },
             { "sTitle": "Type", "mData": "engagement_property__property__property_type" },
             { "sTitle": "Property", "mData": "engagement_property__property__name" },
             { "sTitle": "Address", "mData": "base_address" },
             { "sTitle": "City", "mData": "base_address" },
             { "sTitle": "State", "mData": "base_address" },
             { "sTitle": "Status", "mData": "status" },
             { "sTitle": "Invoiced", "mData": "invoice_sent" }
        ];
        if (showFee) {
            columns.push({ "sTitle": "Fee", "mData": "fee" });
        }
        if (table != null) {
            table.fnDestroy();
        }
        table = $('#Appraisals').dataTable({
            "aaData": data.rs,
            "sDom": "frtpiS",
            "iDisplayLength": 20,
            "bAutoWidth": false,
            "bDeferRender": true,
            "aaSorting": [[0, "desc"]],
            "aoColumns": columns,
            "aoColumnDefs": [{
                "aTargets": [0],
                "mData": "due_date",
                "mRender": function (data, type, full) {
                    var ret = "";
                    //   console.log(data);
                    if (data != null) {
                        ret = data;
                    }
                    return ret;
                }
            }, {
                "aTargets": [1],
                "mData": "job_number",
                "mRender": function (data, type, full) {
                    var ret = "";
                    if (data != null) {
                        if (full.status == "SCHEDULED") {
                            ret = "<a href='" + full.absolute_url + "/'>" + data + "</a>";
                        } else {
                            ret = "<a href='/appraisal/" + full.id + "'>" + data + "</a>";
                        }
                    }
                    return ret;
                }
            }, {
                "aTargets": [2],
                "mData": "lead_appraiser",
                "mRender": function (data, type, full) {
                    var ret = "";
                    if (data != null) {
                        ret = data;
                    }
                    return ret;
                }
            }, {
                "aTargets": [3],
                "mData": "engagement_property__engagement__client__name",
                "mRender": function (data, type, full) {
                    var ret = "";
                    if (data != null) {
                        ret = "<a href='/client/" + full.engagement_property__engagement__client__id + "'>" + data + "</a>";
                    }
                    return ret;
                }
            }, {
                "aTargets": [4],
                "mData": "engagement_property__property__property_type",
                "mRender": function (data, type, full) {
                    var ret = "";
                    if (data != null) {
                        ret = data;
                        ret += (full.engagement_property__property__property_subtype) ? '<i class="expand glyphicon glyphicon-question-sign tooltipicon" data-toggle="tooltip" data-placement="top" title="' + full.engagement_property__property__property_subtype + '"> </i>' : "";
                    }
                    return ret;
                }
            }, {
                "aTargets": [5],
                "mData": "engagement_property__property__name",
                "mRender": function (data, type, full) {
                    var ret = "";
                    if (data != null) {
                        if (full.portfolio)
                            ret = "<a href='" + full.portfolio + "'><strong>Portfolio</strong></a>: ";
                        ret += "<a href='/property/" + full.engagement_property__property__id + "'>" + data + "</a>";
                    }
                    return ret;
                }
            }, {
                "aTargets": [6],
                "mRender": function (data, type, full) {
                    var ret = "";
                    if (data != null && data != 'None') {
                        var addy = JSON.parse(data).address1;
                        // console.log(city);
                        ret = addy;
                    }
                    return ret;
                }
            }, {
                "aTargets": [7],
                "mRender": function (data, type, full) {
                    var ret = "";
                    if (data != null && data != 'None') {
                        var city = JSON.parse(data).city;
                        // console.log(city);
                        ret = city;
                    }
                    return ret;
                }
            }, {
                "aTargets": [8],
                "mRender": function (data, type, full) {
                    var ret = "";
                    if (data != null && data != 'None') {
                        var state = JSON.parse(data).state;
                        ret = state;
                    }
                    return ret;
                }
            }, {
                "aTargets": [9],
                "mRender": function (data, type, full) {
                    var ret = "";
                    if (data != null && data != 'None') {
                        if (full.status_display) {
                            ret = full.status_display;
                        } else {
                            ret = NPVNexus.Formatters.friendlyName(data);
                        }
                    }
                    return ret;
                }
            }, {
                "aTargets": [10],
                "mData": "invoice_sent",
                "mRender": function (data, type, full) {
                    var ret = "<span class='" + false_class_name + "'></span>";
                    if (data != null) {
                        var class_name = NPVNexus.Formatters.friendlyName(data);
                        // ret = "<span class='"+class_name+"'></span>";
                        ret = class_name;
                    }
                    return ret;
                }
            }
            ], "fnDrawCallback": function (oSettings) {
                if (!tableElm) {
                    tableElm = $elm.footable({
                    });
                }
                $('.tooltipicon').tooltip({});
                tableElm.trigger('footable_redraw');
            }, 'fnInitComplete': function () {
                $("#TableHead #Appraisals_filter").remove();
                $("#TableHead").prepend($("#Appraisals_filter"));
                $("#Appraisals_filter input").before(' <i class="glyphicon glyphicon-info-sign tooltipicon" data-toggle="tooltip" data-placement="top" title="Filter result set with search terms"></i> ');
                $('.tooltipicon').tooltip({});
            }, "fnHeaderCallback": function (nHead, aData, iStart, iEnd, aiDisplay) {
                if (headTmr) {
                    window.clearTimeout(headTmr);
                }
                headTmr = window.setTimeout(function () {
                    $("#Appraisals thead th").each(function (idx, elm) {
                        var visible = "none";
                        if ($(elm).is(":visible")) {
                            visible = "table-cell";
                        }
                        $(nHead).find("th:eq(" + idx + ")").css("display", visible);
                        if ($(elm).html() == "City") {
                            $(elm).addClass("city");
                        }
                        if ($(elm).html() == "State") {
                            $(elm).addClass("state");
                        }
                        if ($(elm).html() == "Status") {
                            $(elm).addClass("status");
                        }
                        if ($(elm).html() == "Type") {
                            $(elm).addClass("type");
                        }
                        if ($(elm).html() == "Address") {
                            $(elm).addClass("address");
                        }
                        if ($(elm).html() == "Appraiser") {
                            $(elm).addClass("appraiser");
                        }
                        if ($(elm).html() == "Invoiced") {
                            $(elm).addClass("invoiced");
                        }
                        if ($(elm).hasClass("sorting") && $(elm).find(".footable-sort-indicator").length <= 0) {
                            $(elm).append("<span class='footable-sort-indicator'></span>");
                        }
                    });
                    // table.fnAdjustColumnSizing(false);
                }, 300);
            }
        });
        var tot = data.rs.length;
        $(".totals b").html(tot);
    }
    var getQuarterDatesRequestURL = function (quarter, year) {
        var start_date = "";
        var end_date = "";
        var URL = "";
        if (quarter == 1) {
            start_date = year + "-01-01";
            end_date = year + "-03-31";
        } else if (quarter == 2) {
            start_date = year + "-04-01";
            end_date = year + "-06-30";
        } else if (quarter == 3) {
            start_date = year + "-07-01";
            end_date = year + "-09-30";
        } else if (quarter == 4) {
            start_date = year + "-10-01";
            end_date = year + "-12-31";
        }
        // TODO: unhardcode URL
        URL = "due_date__gte=" + start_date + "&due_date__lte=" + end_date;
        return URL;
    }
    return {
        init: Init,
        fee: fee
    };
}());

//View Property Page
NPVNexus.View_Property = (function () {
    //Variables
    var fee = 0;
    //Public
    var Init = function () {

        $(document).ready(function () {
            footable = $('table.footable').footable({});
        });
    };

    return {
        init: Init,
        fee: fee
    };
}());

//View Property Page
NPVNexus.View_Portfolio = (function () {
    //Variables
    //Variables
    var footable;
    var tmeOut = null;

    //Public
    var Init = function () {
        $(document).ready(function () {
            //Set Up page Event Handlers
            eventHandlers();
            //Instantiate FooTables
            footable = $('table').footable({});
        });

    };
    var SetUpMap = function (elm, coords) {
        if (coords.length > 0) {
            var theSpot = new google.maps.LatLng(coords[0][0], coords[0][1]);
            var mapOptions = { center: theSpot, zoom: 13 };
            var map = new google.maps.Map(elm, mapOptions);

            _.each(coords, function (element, index) {
                var coord = new google.maps.Marker({
                    position: new google.maps.LatLng(coords[index][0], coords[index][1]), map: map
                });
            });
        }
    }

    //Private
    var eventHandlers = function () {

        // Footer Table Btn Toggle
        $("#BtnActive,#BtnHistorical").click(function () {

            setTable($(this).attr("id"));

        });


    };
    var setTable = function (active) {
        $(".tablebtn.active").removeClass("active");
        $("#" + active).addClass("active");
        switch (active) {
            case "BtnActive":
                $("#Active").show().trigger('footable_resize');
                $("#Historical,#Similar").hide();
                break;
            case "BtnHistorical":
                $("#Historical").show().trigger('footable_resize');
                $("#Active,#Similar").hide();
                break;
        }
        $('table.footable').trigger('footable_redraw');
    };
    return {
        init: Init,
        setUpMap: SetUpMap
    };
}());

//View Client Page
NPVNexus.View_Client = (function () {
    //Public
    var Init = function () {
        $(document).ready(function () {
            footable = $('table.footable').footable({});
            eventHandlers();
        });
    };
    var eventHandlers = function () {
        $("#BtnActive").click(function () {
            $("#Active").show();
            $("#Historical").hide();
            $("#BtnActive").addClass("active");
            $("#BtnHistorical").removeClass("active");
        });

        $("#BtnHistorical").click(function () {
            $("#Active").hide();
            $("#Historical").show();
            $(".btn-default.active").removeClass("active");
            $("#BtnHistorical").addClass("active");
        });
        $('#Update').on('click', function (e) {
            NPVNexus.Status.loading();
            $.ajax({
                type: 'PATCH',
                dataType: 'JSON',
                url: $('#Update').attr('action'),
                data: JSON.stringify({
                    'appraiser_must_sign': $("#AppraiserSign").prop('checked'),
                    'appraiser_must_inspect': $("#AppraiserInspect").prop('checked'),
                    'invoice_delivery': $("#InvoiceDelivery").html(),
                    'report_delivery': $("#ReportDelivery").val(),
                    'invoice_timing': $("#InvoiceTiming").val(),
                    'requirements_url': $("#ClientRequirements").val(),
                    'notes': $("#ClientNotes").html(),
                }),
                contentType: 'application/json',
                success: function (data) {
                    var test = $("#ClientRequirements").val()
                    NPVNexus.Status.success();
                    if (test != '') {
                        $('#ViewReq').attr('href', test).show();
                    } else {
                        $('#ViewReq').attr('href', test).hide();

                    }
                },
                error: function (data) {
                    NPVNexus.Status.error();
                    if ($("#ClientRequirements").val() != 'None') {
                        $("#ClientRequirements").val('None');
                        alert('Please enter a valid URL for Client Requirements.');
                        $('#ViewReq').hide();
                    }

                },
            });
        });
    };

    return {
        init: Init
    };
}());

//View Employee App Page
NPVNexus.View_Employee_Appraisals = (function () {
    //Variables
    var clients, assign, employee, footable, today, current_year, office, date_min, date_max;
    var fee = 0;
    //Public
    var Init = function (cli, emp) {
        // apprsls = app;
        clients = cli;
        employee = emp;
        today = new Date();
        cMonth = today.getMonth() + 1;
        office = "ALL";
        current_year = today.getFullYear();
        $(document).ready(function () {
            eventHandlers();
            setUp();
        });
    };
    var setUp = function () {
        $("#Filter option:eq(0)").attr('selected', 'selected');
        NPVNexus.GetYearRange(2010, $("#QuarterYrs"));
        //Load Initial Employees
        loadEmployees($("#EmployeesDiv"), employee, null);

    };
    //Private
    var eventHandlers = function () {
        $("#QuarterBtn,#DateBtn").click(function () {
            var $office = $("#OfficeList").val();
            url = "/api/v1/employee/?split__gt=0";
            if ($office != office) {
                office = $("#OfficeList").val();
                url = "/api/v1/employee/?office__name=" + office + "&split__gt=0";
                if (office == "ALL") {
                    url = "/api/v1/employee/?split__gt=0.0";
                }
                loadEmployees($("#EmployeesDiv"), null, url);
            } else {
                //Redraw open panels
                $(".emp-link.opened").each(function () {
                    var $this = $(this);
                    var this_elm = $this.parents(".panel-heading").siblings(".panel-collapse").find("tbody");
                    var this_id = $this.parents(".panel-heading").siblings(".panel-collapse").attr("id");
                    var url = gernerateAppraisalUrl(this_id, false);
                    loadEmpAssigns(this_elm, null, url);
                    // console.log();
                });
            }
        });
        $('#Filter').change(function () {
            var $value = $("#Filter").val();
            if ($value == "Date Range") {
                $('.quarters').toggle();
                $('.dates').show();
            } else {
                $('.quarters').toggle();
                $('.dates').toggle();
            }
        });

        $("#QuarterYrs > option").each(function () {
            if ($(this).val() == current_year) {
                $(this).prop('selected', 'true');
            }
        });

        $("#QuartersQt > option").each(function () {
            if ($(this).val() == getCurrentQuarter()) {
                $(this).prop('selected', 'true');
            }
        });


        $('#EmployeesDiv').delegate('.emp-link', 'click', function (e) {
            e.preventDefault();
            if (!$(this).hasClass("opened")) {
                $(this).closest(".panel-heading").siblings('.panel-collapse').slideDown();
                $(this).addClass("opened");
                $(window).scrollTop($(this).closest(".panel-heading").offset().top);
                var $output = $(this).closest(".panel-heading").siblings('.panel-collapse').find("tbody");
                var emp_id = $(this).closest(".panel-heading").siblings('.panel-collapse').attr('id');
                url = gernerateAppraisalUrl(emp_id, false);
                loadEmpAssigns($output, null, url);
            } else {
                $(this).removeClass("opened");
                $(this).closest(".panel-heading").siblings('.panel-collapse').slideUp();

            }
        });
    };

    var getCurrentQuarter = function () {
        var today = new Date();
        var cMonth = today.getMonth() + 1;
        var cQuarter = 0;
        if (cMonth > 0 && cMonth < 4) {
            cQuarter = 1;
        } else if (cMonth > 3 && cMonth < 7) {
            cQuarter = 2;
        } else if (cMonth > 6 && cMonth < 10) {
            cQuarter = 3;
        } else if (cMonth > 9 && cMonth < 13) {
            cQuarter = 4;
        }
        return cQuarter;
    }

    var loadEmployees = function ($elm, data, url) {
        var passData = {};
        var tmp = $("#AppraiserTemplate").html();
        if (!data && url) {
            NPVNexus.Status.loading();
            $.ajax({
                url: url,
                type: "GET",
                dataType: "json",
                contentType: "application/json",
                success: function (response) {
                    NPVNexus.Status.success("Updated");
                    if (response.objects) {
                        passData = { rs: response.objects };
                        render($elm, tmp, passData);
                    }
                },
                error: function (response) {
                    console.log(response.responseText);
                    App.status.error();
                }
            });
        } else {
            passData = { rs: data };
            render($elm, tmp, passData);
        }
    };
    var loadEmpAssigns = function ($elm, data, url) {
        var passData = { rs: null };
        $elm.html('<h3 class="loading">Loading...</h3>');
        var tmp = $("#AppraisalTemplate").html();
        if (!data && url) {
            NPVNexus.Status.loading();
            $.ajax({
                type: 'GET',
                async: false,
                dataType: 'json',
                contentType: 'application/json',
                url: url,
                success: function (response) {
                    NPVNexus.Status.removeLoading();
                    if (response.meta.total_count != 0) {
                        passData = { rs: response.objects, ttl: response.meta.total_count };
                        passTest = [];
                        _.each(passData.rs, function (app) {
                            var url = app.appraisal + "?fields=engagement_property__property__id,engagement_property__property__name,due_date,invoice_sent,hours_spent,engagement_property__property__client__name,engagement_property__property__client__id,fee,status,id,job_number";
                            $.ajax({
                                url: url,
                                type: "GET",
                                dataType: "json",
                                contentType: "application/json",
                                async: false,
                                success: function (appr) {
                                    // console.log(app.appraisal);
                                    app.extra = appr;
                                },
                                error: function (appr) {
                                    console.log(appr.responseText);
                                }
                            });
                        });
                        // console.log(passData.rs);
                    }
                    $elm.closest("table").siblings(".total-records").find("span").html(response.meta.total_count);
                    render($elm, tmp, passData);
                },
                error: function (response) {
                    console.log(response);
                }
            });

        }
        else {
            passData.rs = data;
            render($elm, tmp, passData);
        }
    };
    var render = function ($elm, tmp, data) {
        $elm.html(_.template(tmp, data));
        $elm.closest(".footable").footable();
        $elm.closest(".footable").trigger('footable_redraw');
        //if (footable == null){
        //    footable = $(".footable").footable();

        //} else {
        //    footable.trigger('footable_redraw');
        //}
        var tot = NPVNexus.View_Employee_Appraisals.fee;
        $elm.closest("table").siblings(".totals").find("span").html(tot);

    };

    function getEmpQuarterDatesRequestURL(quarter, year) {
        var start_date = "";
        var end_date = "";
        var URL = "";
        if (quarter == 1) {
            start_date = year + "-01-01";
            end_date = year + "-03-31";
        } else if (quarter == 2) {
            start_date = year + "-04-01";
            end_date = year + "-06-30";
        } else if (quarter == 3) {
            start_date = year + "-07-01";
            end_date = year + "-09-30";
        } else if (quarter == 4) {
            start_date = year + "-10-01";
            end_date = year + "-12-31";
        }
        URL = "&appraisal__due_date__gte=" + start_date + "&appraisal__due_date__lte=" + end_date;
        return URL;
    }

    var gernerateAppraisalUrl = function (emp_id, init) {
        var baseUrl = "/api/v1/assignment/?employee=" + emp_id + "&role__in=APPRAISER,INSPECTOR,PROCURER,REVIEWER";
        // var office = $("#office-list").val();
        // if (office != "ALL"){
        //     baseUrl += "&ofice__name=" + office;
        // }
        if (init) {
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            var quarter = 0;
            var end = "";
            if (month > 1 && month < 4) {
                quarter = 1;
            } else if (month > 3 && month < 7) {
                quarter = 2;
            } else if (month > 6 && month < 10) {
                quarter = 3;
            } else if (month > 9 && month < 13) {
                quarter = 4;
            }
            baseUrl += getEmpQuarterDatesRequestURL(quarter, year);
        }
        else if ($('#Filter').val() == "Date Range") {
            baseUrl += "&appraisal__due_date__gte=" + $("#StDate").val() + "&appraisal__due_date__lte=" + $("#EndDate").val();
        }
        else {
            baseUrl += getEmpQuarterDatesRequestURL($("#QuartersQt").val(), $("#QuarterYrs").val())
        }
        var stat = $("#StatusFilter").val();
        if (stat != "ALL" && stat != "ALL w/o Cancelled") {
            baseUrl += "&appraisal__status=" + stat;
        } else if (stat == "ALL w/o Cancelled") {
            baseUrl += "&appraisal__status__in=COMPLETED&appraisal__status__in=IN_PROGRESS&appraisal__status__in=INFO_NEEDED&appraisal__status__in=DRAFT_SENT";
        }
        return baseUrl;
    };

    return {
        init: Init,
        fee: fee
    };
}());

//View Work In Progress Page
NPVNexus.View_Work_In_Progress = (function () {

    //Public
    var Init = function () {
        $(document).ready(function () {
            // eventHandlers();
            setUp();
        });
    };
    var setUp = function () {
        var chiLastName = "";
        var chiFee = 0;
        $(".chicago .line-item").each(function () {
            $this = $(this);
            if (chiLastName == $this.find(".name").html() || chiLastName == "") {
                chiLastName = $this.find(".name").html();
                chiFee += parseFloat($this.find(".fee").attr("data-val"));
            } else {
                chiLastName = $this.find(".name").html();
                $this.before('<tr class="summary"><td colspan="11"><div class="totals"><b>Total:' + NPVNexus.Formatters.currency(chiFee) + '</b></div></td></tr>');
                chiFee = parseFloat($this.find(".fee").attr("data-val"));
            }

            if ($this.is(':last-child')) {
                //console.log("last");
                //chiFee += parseFloat($this.find(".fee").attr("data-val"));
                $this.after('<tr class="summary"><td colspan="11"><div class="totals"><b>Total:' + NPVNexus.Formatters.currency(chiFee) + '</b></div></td></tr>');
            }
            chiLastName = $this.find(".name").html();
        });
        var atlLastName = "";
        var atlFee = 0;
        $(".atlanta .line-item").each(function () {
            $this = $(this);
            if (atlLastName == $this.find(".name").html() || atlLastName == "") {
                atlFee += parseFloat($this.find(".fee").attr("data-val"));
            } else {
                atlLastName = $this.find(".name").html();
                $this.before('<tr class="summary"><td colspan="11"><div class="totals"><b>Total:' + NPVNexus.Formatters.currency(atlFee) + '</b></div></td></tr>');
                atlFee = parseFloat($this.find(".fee").attr("data-val"));
            }
            if ($this.is(':last-child')) {
                $this.after('<tr class="summary"><td colspan="11"><div class="totals"><b>Total:' + NPVNexus.Formatters.currency(atlFee) + '</b></div></td></tr>');
            }
            atlLastName = $this.find(".name").html();

        });
        var newpLastName = "";
        var newpFee = 0;
        $(".newport .line-item").each(function () {
            $this = $(this);
            if (newpLastName == $this.find(".name").html() || newpLastName == "") {
                newpFee += parseFloat($this.find(".fee").attr("data-val"));
            } else {
                newpLastName = $this.find(".name").html()
                $this.before('<tr class="summary"><td colspan="11"><div class="totals"><b>Total:' + NPVNexus.Formatters.currency(newpFee) + '</b></div></td></tr>');
                newpFee = parseFloat($this.find(".fee").attr("data-val"));
            }
            if ($this.is(':last-child')) {
                $this.after('<tr class="summary"><td colspan="11"><div class="totals"><b>Total:' + NPVNexus.Formatters.currency(newpFee) + '</b></div></td></tr>');
            }
            newpLastName = $this.find(".name").html();

        });
    };


    return {
        init: Init
    };
}());

NPVNexus.GetYearRange = function (startY, $elm) {
    var years = [], curYear = new Date().getFullYear();
    var minYear = startY || 2010;

    while (minYear <= curYear + 5) {
        years.push(minYear++);
    }
    _.each(years, function (yr) {
        var selected = (yr == curYear) ? "selected='selected'" : "";
        $elm.append("<option value='" + yr + "' " + selected + ">" + yr + "</option>");
    });
}
