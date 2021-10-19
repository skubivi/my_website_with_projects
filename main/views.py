from django.shortcuts import render


# Create your views here.

def main(request):
    return render(request, 'html/index.html')


def general(request):
    return render(request, 'html/general.html')


def about(request):
    return render(request, 'html/about.html')


def charges(request):
    return render(request, 'html/charges.html')


def path_finding(request):
    return render(request, 'html/path-finding.html')
