var todoList = document.querySelector('#todo');
var add = document.querySelector('#add');
var inputt = document.querySelector('#input');
function addingtodo() {
    if (inputt.value) {
        var div_1 = document.createElement('div');
        var btn = document.createElement('button');
        var dlt = document.createElement('button');
        var buttons_1 = document.createElement('div');
        btn.textContent = 'edit';
        dlt.textContent = 'delete';
        buttons_1.append(btn);
        buttons_1.append(dlt);
        buttons_1.setAttribute('class', 'space');
        div_1.textContent = inputt.value;
        div_1.setAttribute('class', 'pad');
        div_1.append(buttons_1);
        todoList.append(div_1);
        inputt.value = '';
        dlt.addEventListener('click', function () {
            todoList.removeChild(div_1);
        });
        btn.onclick = function () {
            var edited = prompt('edit text :');
            if (edited) {
                div_1.textContent = edited;
            }
            div_1.append(buttons_1);
        };
    }
    else {
        alert('please add a task');
    }
}
add.onclick = function () {
    addingtodo();
};
