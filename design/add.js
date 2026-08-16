const addButton = document.getElementById('add_btn');
const modal = document.getElementById('modal');
const close = document.getElementById('close_modal_btn');



const btnSubmit = document.getElementById('btn_submit');


const classes = ['school', 'personal', 'tasks', 'couple'];



addButton.addEventListener('click', () => {
    modal.classList.add('modalOn');
    modal.classList.remove('modalOff');

});

close.addEventListener('click', () => {
    modal.classList.add('modalOff');
    modal.classList.remove('modalOn');
});



function createTask(title, notes, category, dayWeek, startHour, startHourValue, endHourValue, color){
    let task = new Task(title, notes, category, dayWeek, startHour, startHourValue, endHourValue, color);

    const taskCell = document.getElementById(`${task.dayWeek}-${task.startHour}`);
    console.log(taskCell);

    taskCell.classList.add('created_cell');
    taskCell.style.gridRow = `${startHourValue} / ${endHourValue}`;
    taskCell.style.backgroundColor = task.color+'2c';
    taskCell.style.border = `2px solid ${task.color+'7c'}`;
    
    

    
}


btnSubmit.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const notes = document.getElementById('notes').value;
    const category = document.getElementById('category_opts').value;
    const categorySelect = document.getElementById('category_opts');
    const color = categorySelect.options[categorySelect.selectedIndex].dataset.color;
    const dayWeek = document.getElementById('days').value;


    const startHourSelect = document.getElementById('hours_data_start');
    const startHour = (startHourSelect.options[startHourSelect.selectedIndex].text).toLowerCase().replaceAll(':', '');
    const startHourValue = document.getElementById('hours_data_start').value;
    const endHourValue = document.getElementById('hours_data_end').value;

    
    

    console.log("The results captured are: ", title, notes, category, dayWeek, startHour, startHourValue, endHourValue, color);
    
    createTask(title, notes, category, dayWeek, startHour, startHourValue, endHourValue, color);

    
    
    
   
    
    
    

});




