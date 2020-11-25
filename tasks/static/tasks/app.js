const addForm=document.querySelector('.add1');
const list=document.querySelector('.todos1');
const search=document.querySelector('.search1 input');
const sortedList = document.querySelector('.todos2');

const generateTemplate = function(todo){
    const html = 
        `<li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="col-sm-9 text-left">${todo}</span>
            <i class="fas fa-exclamation-triangle urgent col-sm-1"></i>
            <i class="fas fa-star important col-sm-1"></i>
            <i class="far fa-trash-alt delete col-sm-1"></i>
        </li>`
    list.innerHTML+= html;
};

addForm.addEventListener('submit',e=>{
    e.preventDefault();
    const todo=addForm.add.value.trim();
    //trim removes any whitespace before or after the string
    if(todo.length>0){
        generateTemplate(todo);
        addForm.reset();
    }
});

list.addEventListener('click',e=>{
    if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    }
    else if(e.target.classList.contains('important')){
        e.target.style.color='orange';
    }
    else{
        if (e.target.classList.contains('urgent')){
            e.target.style.color = 'orange';
        }
    }
});

const filterTodos=function(term){
    Array.from(list.children)
    .filter((todo)=>{
        return !todo.textContent.includes(term)
    }).forEach((todo)=>{
        todo.classList.add('filtered')
    });

    Array.from(list.children)
    .filter((todo) => {
        return todo.textContent.includes(term)
    }).forEach((todo) => {
        todo.classList.remove('filtered');
    });
};

search.addEventListener('keyup',()=>{
    const term=search.value.trim();
    filterTodos(term);
});

const arr = [
    {
        user: 1,
        urgent: true,
        important: false,
        task_todo: "Hello World"
    },
    {
        user: 1,
        urgent: true,
        important: true,
        task_todo: "Hello World 2"
    },
    {
        user: 1,
        urgent: false,
        important: false,
        task_todo: "Hello World 3"
    },
    {
        user: 1,
        urgent: false,
        important: true,
        task_todo: "Hello World 4"
    }
];

arr.sort((a,b)=>{
    if(a.urgent ===true && a.important===true){
        if(b.urgent===true && b.important===true){
            return 0;
        }
        else{
            return -1;
        }
    }
    else if(a.urgent===true && a.important===false){
        if(b.urgent===true && b.important===true){
            return 1;
        }
        else if(b.urgent===true && b.important===false){
            return 0;
        }
        else{
            return -1;
        }
    }
    else if(a.urgent===false && a.important===true){
        if(b.urgent===true){
            return 1;
        }
        else if(b.urgent ===false && b.important===true){
            return 0;
        }
        else{
            return -1;
        }
    }
    else{
        if(b.urgent===false && b.important===false){
            return 0;
        }
        else{
            return 1;
        }
    }
});

arr.forEach((item)=>{
    const html =
        `<li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="col-sm-9 text-left">${item.task_todo}</span>
            <i class="fas fa-exclamation-triangle urgent col-sm-1"></i>
            <i class="fas fa-star important col-sm-1"></i>
            <i class="far fa-trash-alt delete col-sm-1"></i>
        </li>`
    sortedList.innerHTML += html;
});




