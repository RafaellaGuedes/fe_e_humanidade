const score = document.getElementById('score_canvas');

new Chart(score, {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Pontos',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true

            }
        }
    }
});

const religion = document.getElementById('religion_canvas');

new Chart(religion, {
    type: 'pie',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Religiões',
            data: [12, 19, 3, 5, 2, 3],
            borderWidth: 1
        }]
    }
});