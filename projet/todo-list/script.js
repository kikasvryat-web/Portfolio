let tasks = [];

const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const filterAll = document.getElementById('filterAll');
const filterActive = document.getElementById('filterActive');
const filterCompleted = document.getElementById('filterCompleted');
const activeCount = document.getElementById('activeCount');
const totalCount = document.getElementById('totalCount');
const clearAllButton = document.getElementById('clearAll');

let currentFilter = 'all';

function addTask() {
    const taskText = taskInput.value.trim()
    if (taskText===''){
        return
    }
    const task = {
        id:Date.now(),
        text:taskText,
        completed:false
    }
    tasks.push(task);
    taskInput.value = '';
    displayTasks();
    saveToLocalStorage();
}

addButton.addEventListener('click', addTask);
 taskInput.addEventListener('keypress', (e) => {
    if(e.key ==='Enter'){
        addTask();
    }
 });