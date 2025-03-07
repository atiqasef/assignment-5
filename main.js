document.querySelectorAll(".dynamic-card").forEach(card => {
    card.addEventListener('click', function (event) { 
        alert('board updated succesfully');
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
    });
});
