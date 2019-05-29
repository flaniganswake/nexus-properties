from datetime import date as dt_date, timedelta


def date_quarter(date=None):
    if date is None:
        date = dt_date.today()
    if date.month < 4:
        return 1
    if date.month < 7:
        return 2
    if date.month < 10:
        return 3
    return 4


def date_range_for_quarter(date=None):
    if date is None:
        date = dt_date.today()
    quarter = date_quarter(date)
    year = date.year
    return (dt_date(year, quarter * 3 - 2, 1),
            dt_date(year, quarter * 3 + 1, 1) - timedelta(days=1),
            quarter)

get_current_year_quarter = date_range_for_quarter
