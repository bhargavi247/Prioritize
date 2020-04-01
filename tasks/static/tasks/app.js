const addForm=document.querySelector('.add1');
const list=document.querySelector('.todos1');
const search=document.querySelector('.search1 input');

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



