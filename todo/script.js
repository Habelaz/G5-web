let todo = document.getElementById('todo');
let add = document.getElementById('add');
let input = document.getElementById('input');

function adding_todo (){
    if (input.value){
        let div = document.createElement('div');
        let btn = document.createElement('button');
        let dlt = document.createElement('button');
        let buttons = document.createElement('div');

        btn.textContent = 'edit';
        dlt.textContent = 'delete';
        buttons.append(btn);
        buttons.append(dlt);
        buttons.setAttribute('class','space');

        div.textContent = input.value;
        div.setAttribute('class','pad');
        div.append(buttons);
        todo.append(div);
        input.value = null;

        dlt.addEventListener('click',function(){
            todo.removeChild(div);
        })
        btn.onclick = function(){
            let edited = prompt('edit text :');
            if (edited){
                div.textContent = edited;
            }
            div.append(buttons);
        }
    }else{
        alert('please add a task');
    }
}

add.onclick = function (){
    // console.log('btn clicked')
    adding_todo();
}


