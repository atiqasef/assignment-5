// document.getElementById('bg-color-change').addEventListener('click', function () { 
//     const colorChange = document.getElementById('bg-color').style.backgroundColor = 'yellow'
//     const colorChangeAgain = document.getElementById('bg-color').style.backgroundColor = 'green'
// })

const colors = ['yellow', 'green', 'blue', 'red', 'purple'];
let colorIndex = 0; 

document.getElementById('bg-color-change').addEventListener('click', function () {
    document.getElementById('bg-color').style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
    
});
