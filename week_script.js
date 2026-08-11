const weekGrid = document.getElementById("week_container");

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const colors = ['#a89cff', '#ff9e9e', '#4ee8b8', '#ffd45e', '#ff9a62', '#c084fc', '#6ee7a5'];
const lightColors = ['#a89cff38', '#ff9e9e52', '#4ee8b748', '#ffd45e3f', '#ff99623a', '#c084fc3f', '#6ee7a42d'];
const hours = ['7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'];

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

        cell.style.gridArea = `${day.toLowerCase()}-${hour.toLowerCase()}`;

        weekGrid.appendChild(cell);
        
    });
    
});

hours.forEach(hour => {
    const hourCell = document.createElement('div');
    hourCell.style.gridArea = `hour-${hour.toLowerCase()}`;
    hourCell.classList.add("hour_cell");
    
    const labelHour = document.createElement('p');
    labelHour.classList.add('label_hour');
    labelHour.textContent = hour;

    hourCell.appendChild(labelHour);

    weekGrid.appendChild(hourCell);
});


 






