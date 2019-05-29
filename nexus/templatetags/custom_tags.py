from django import template
import locale
locale.setlocale(locale.LC_ALL, 'en_US.UTF-8')
register = template.Library()


@register.simple_tag
def phonenumber(value):
    if value is None or '-' in value:
        return value
    else:
        phone = '%s-%s-%s' % (value[0:3], value[3:6], value[6:10])
    return phone


@register.filter()
def currency(value):
    if value is not None:
        return locale.currency(value, grouping=True)
