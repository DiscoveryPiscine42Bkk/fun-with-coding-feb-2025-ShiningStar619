function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [key, value] = cookie.trim().split('=');
        if (key === name) return JSON.parse(decodeURIComponent(value));
    }
    return [];
}

function setCookie(name, value) {
    const expires = new Date(Date.now() + 86400e3).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))}; expires=${expires}; path=/`;
}

let todos = getCookie('todos') || [];
const list = document.getElementById('ft_list');

function loadTodos() {
    list.innerHTML = '';
    todos.slice().reverse().forEach(todo => addTodoItem(todo)); // แก้ไขบรรทัดนี้
}

function addTodoItem(text) {
    const div = document.createElement('div');
    div.className = 'todo-item';
    div.textContent = text;
    div.onclick = () => {
        if (confirm('ลบรายการนี้ใช่ไหม?')) {
            div.remove();
            todos = todos.filter(t => t !== text);
            setCookie('todos', todos);
        }
    };
    list.prepend(div);
}

document.getElementById('newBtn').onclick = () => {
    const todo = prompt('เพิ่มรายการใหม่:');
    if (todo && todo.trim()) {
        todos.unshift(todo.trim());
        setCookie('todos', todos);
        addTodoItem(todo.trim());
    }
};

loadTodos();

