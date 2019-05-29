from .models import Title


def title(request):
    """Add the Title enum to the context primarily for permissions checks"""
    return {'Title': Title}
