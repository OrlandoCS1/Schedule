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



function createTask(title, notes, category, dayWeek, startHour, endHour,startHourValue, endHourValue, color){
    let task = new Task(title, notes, category, dayWeek, startHour, endHour, startHourValue, endHourValue, color);

    const titleLabel = document.createElement('h1');
    const notesLabel = document.createElement('p');
    const hourDetail = document.createElement('p');

   
    titleLabel.textContent = task.title;
    notesLabel.textContent = task.notes;
    hourDetail.textContent  =  `from ${task.startHour} to ${task.endHour}`;



    const taskCell = document.getElementById(`${task.dayWeek}-${task.startHour.replaceAll(':', '').toLowerCase()}`);
    console.log(taskCell);

    /* .toLowerCase().replaceAll(':', '')*/


    

    const endHourNumber = parseInt(endHourValue, 10);

    taskCell.classList.add('created_cell');
    taskCell.style.gridRow = `${startHourValue}/ ${endHourNumber + 1}`;
    taskCell.style.backgroundColor = task.color+'2c';
    taskCell.style.border = `2px solid ${task.color+'7c'}`;

   
    titleLabel.style.color = task.color;
    notesLabel.style.color = '#ffffff54';

   
    
    taskCell.appendChild(titleLabel);
    taskCell.appendChild(notesLabel);
    taskCell.appendChild(hourDetail);


    
}


btnSubmit.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const notes = document.getElementById('notes').value;
    const category = document.getElementById('category_opts').value;
    const categorySelect = document.getElementById('category_opts');
    const color = categorySelect.options[categorySelect.selectedIndex].dataset.color;
    const dayWeek = document.getElementById('days').value;


    const startHourSelect = document.getElementById('hours_data_start');
    const endHourSelect = document.getElementById('hours_data_end');
    const startHour = startHourSelect.options[startHourSelect.selectedIndex].text;
    const endHour = endHourSelect.options[endHourSelect.selectedIndex].text;
    const startHourValue = document.getElementById('hours_data_start').value;
    const endHourValue = document.getElementById('hours_data_end').value;

    
    

    console.log("The results captured are: ", title, notes, category, dayWeek, startHour, endHour, startHourValue, endHourValue, color);
    
    createTask(title, notes, category, dayWeek, startHour, endHour, startHourValue, endHourValue, color);

    
    
    
   
    
    
    

});




