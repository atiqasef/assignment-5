document.querySelectorAll(".dynamic-card").forEach(card => {
    card.addEventListener('click', function (event) {
        alert('board updated succesfully');
       
        // console.log(event.target.parentNode.parentNode.parentNode.children[1].innerText);
        const dmCard = event.target.parentNode.parentNode.parentNode.children[1].innerText;
        const substract = parseInt(document.getElementById('taskCount').innerText);
        const sum = parseInt(document.getElementById('check-number').innerText);
        const number = 1;
        const remainSum = substract - number;
        const totalSum = sum + number;
        document.getElementById('taskCount').textContent = remainSum;
        document.getElementById('check-number').textContent = totalSum;

        if (event.target.classList.contains("completed-btn")) {
            event.target.setAttribute("disabled", "true");
            event.target.classList.add("opacity-50", "cursor-not-allowed");
        }

        const p = document.createElement('p');
        p.innerText = `You have completed the task ${dmCard}  at ${new Date().toLocaleTimeString()}`;

        const activityContainer = document.getElementById('activity-container');

        activityContainer.appendChild(p);
    });
});



document.getElementById('dsnt').addEventListener('click', function () {
    window.location.href = './dsnt.html';
})



// Clear History
document.getElementById('clear-history').addEventListener('click', function () { 
    const clear = document.getElementById('activity-container');
    clear.innerText = '';
    console.log('hello')
})


// dynamic date 
const currentDate = new Date();


const formattedDate = new Intl.DateTimeFormat('en-GB', {
  weekday: 'long', 
  day: '2-digit',  
  month: 'long',   
  year: 'numeric', 
}).format(currentDate);


document.getElementById('dynamic-date').textContent = formattedDate;

// challenge part alert
        const clickedButtons = new Set(); 

        document.querySelectorAll(".completed-btn").forEach(button => {
            button.addEventListener("click", function () {
                clickedButtons.add(this.id); 

                if (clickedButtons.size === 6) { 
                    setTimeout(() => { 
                        alert("congrats!!! you have completed all the current task"); 
                        clickedButtons.clear(); 
                    }, 300); 
                }
            });
        });



