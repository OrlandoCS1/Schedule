const weekGrid = document.getElementById("week_container");
const hour_data = document.getElementById("hours_data");


const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const colors = ['#a89cff', '#ff9e9e', '#4ee8b8', '#ffd45e', '#ff9a62', '#c084fc', '#6ee7a5'];
const lightColors = ['#a89cff38', '#ff9e9e52', '#4ee8b748', '#ffd45e3f', '#ff99623a', '#c084fc3f', '#6ee7a42d'];
const hours = [
    '7AM', '7:30AM',
    '8AM', '8:30AM',
    '9AM', '9:30AM',
    '10AM', '10:30AM',
    '11AM', '11:30AM',
    '12PM', '12:30PM',
    '1PM', '1:30PM',
    '2PM', '2:30PM',
    '3PM', '3:30PM',
    '4PM', '4:30PM',
    '5PM', '5:30PM',
    '6PM', '6:30PM',
    '7PM', '7:30PM',
    '8PM', '8:30PM',
    '9PM', '9:30PM',
    '10PM', '10:30PM',
    '11PM', '11:30PM'
];

const dayCell = document.createElement('span');
days.forEach((day, index) => {
    const dayCell = document.createElement('span');
    dayCell.classList.add('day_cell');

    const label = document.createElement('p');
    label.textContent = day;
    label.style.color = colors[index];

    
    dayCell.style.gridArea =`day-${day.toLowerCase()}`;
    //dayCell.style.backgroundColor = lightColors[index]

    dayCell.appendChild(label);
    weekGrid.appendChild(dayCell);

    hours.forEach((hour)=> {
        const cell = document.createElement('div');
        cell.classList.add('cell');

        cell.id = `${day.toLowerCase()}-${hour.toLowerCase().replaceAll(":", '')}`;
        cell.style.gridArea = `${day.toLowerCase()}-${hour.toLowerCase().replaceAll(":", '')}`;

        weekGrid.appendChild(cell);
        
    });
    
});

hours.forEach(hour => {
    const hourCell = document.createElement('div');
    
    hourCell.style.gridArea = `hour-${hour.toLowerCase().replaceAll(':', '')}`;
    hourCell.classList.add("hour_cell");

    const hourOpt = document.createElement('option');
    hourOpt.value = hour.toLowerCase();
    hourOpt.textContent = hour;

    hour_data.appendChild(hourOpt);
    
    const labelHour = document.createElement('p');
    labelHour.classList.add('label_hour');
    labelHour.textContent = hour;

    hourCell.appendChild(labelHour);

    weekGrid.appendChild(hourCell);
});


 






