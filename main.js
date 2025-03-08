document.querySelectorAll(".dynamic-card").forEach(card => {
    card.addEventListener('click', function (event) {
        alert('board updated succesfully');
        // const dmCard = document.getElementsByClassName('dynamic-card');
        const dmCard = document.querySelector('.actvt').innerText;
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
    window.location.href= './dsnt.html';
})
document.getElementById('desk').addEventListener('click', function () { 
    window.location.href= './index.html';
})

