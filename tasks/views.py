from django.shortcuts import render, get_list_or_404 , redirect
from django.urls import reverse
from django.contrib.auth import authenticate,login
from django.contrib.auth.decorators import login_required
from django.contrib.auth.forms import UserCreationForm
from django.http import HttpResponse

from .models import Todo
# Create your views here.
'''
post format should be
[
    {
        todo object 1
    },
    {
        todo object 2
    },
]
'''

@login_required
def index(request):
    if (request.method == "GET"):
        todo_list = Todo.objects.filter(user = request.user)
        return render(request,'tasks/index.html')
        #this should be render html from next time in templates
    elif(request.method == "POST"):
        for todo in request.POST:
            todo_obj = Todo(user=request.user,urgent=todo['urgent'],important=important['important'],todo_task = todo["todo_task"])
            todo_obj.save()
        return redirect('index')
        #this is fine. this should remain the same and exit

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect(reverse('index'))
        else:
            return render(request = request,
                  template_name = "registration/signup.html",
                  context={"form":form})
    else:
        form = UserCreationForm()
        return render(request = request,
                  template_name = "registration/signup.html",
                  context={"form":form})

