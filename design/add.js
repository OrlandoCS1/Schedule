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





btnSubmit.addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const notes = document.getElementById('notes').value;
    const category = document.getElementById('category').value;
    const dayWeek = document.getElementById('day').value;
    const start = (document.getElementById('start').value).replaceAll('am','').replaceAll('pm','');
    const duration = document.getElementById('duration').value;

    console.log(duration);
    
    let startId = `${dayWeek.replaceAll(':', '')}-${start.replaceAll(':', '')}`;

    const startCell = document.getElementById(startId);
    console.log(startId);
});




