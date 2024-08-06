const todoList = document.querySelector('#todo') as HTMLDivElement;
const add = document.querySelector('#add') as HTMLButtonElement;
const inputt = document.querySelector('#input') as HTMLInputElement;

function addingtodo ():void{
    if (inputt.value){
        const div = document.createElement('div');
        const btn = document.createElement('button');
        const dlt = document.createElement('button');
        const buttons = document.createElement('div');

        btn.textContent = 'edit';
        dlt.textContent = 'delete';
        buttons.append(btn);
        buttons.append(dlt);
        buttons.setAttribute('class','space');

        div.textContent = inputt.value;
        div.setAttribute('class','pad');
        div.append(buttons);
        todoList.append(div);
        inputt.value = '';

        dlt.addEventListener('click',function():void{
            todoList.removeChild(div);
        })
        btn.onclick = function():void{
            const edited = prompt('edit text :');
            if (edited){
                div.textContent = edited;
            }
            div.append(buttons);
        }
    }else{
        alert('please add a task');
    }
}

add.onclick = function ():void{
    addingtodo();
}