let todo = document.getElementById('todo');
let add = document.getElementById('add');
let input = document.getElementById('input');

function adding_todo (){
    if (input.value){
        let div = document.createElement('div');
        let btn = document.createElement('button')
        btn.textContent = 'edit';
        div.textContent = input.value;
        div.setAttribute('class','pad');
        div.append(btn);
        todo.append(div);
        input.value = null;

        div.addEventListener('dblclick',function(){
            todo.removeChild(div);
        })
        btn.onclick = function(){
            let edited = prompt('edit text :');
            div.textContent = edited;
            div.append(btn);
        }
    }else{
        alert('please add a task');
    }
}

add.onclick = function (){
    // console.log('btn clicked')
    adding_todo();
}
