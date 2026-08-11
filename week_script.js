const weekGrid = document.getElementById("week_container");

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const colors = ['#a89cff', '#ff9e9e', '#4ee8b8', '#ffd45e', '#ff9a62', '#c084fc', '#6ee7a5'];
const hours = ['7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM'];

const dayCell = document.createElement('span');
days.forEach((day, index) => {
    const dayCell = document.createElement('span');
    dayCell.classList.add(day);
    
    dayCell.style.gridArea =`day-${day.toLowerCase()}`;
    dayCell.style.backgroundColor = colors[index];

    console.log(dayCell);
    weekGrid.appendChild(dayCell);

    hours.forEach((hour)=> {
        const cell = document.createElement('div');

        cell.style.gridArea = `${day.toLowerCase()}-${hour.toLowerCase()}`;

        weekGrid.appendChild(cell);
        
    });
    
});

hours.forEach(hour => {
    const hourCell = document.createElement('div');
    hourCell.style.gridArea = `hour-${hour.toLowerCase()}`;
    hourCell.classList.add("hourCell");
    hourCell.style.backgroundColor = "#6ee7a5";
    weekGrid.appendChild(hourCell);
});


 






