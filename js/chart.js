// Define quadrant plugin
const quadrantPlugin = {
    id: 'quadrantPlugin',
    beforeDraw: (chart) => {
        const {ctx, chartArea: {top, bottom, left, right, width, height}} = chart;

        // Calculate thresholds (20% and 80% on satiety scale)
        const lowSatiety = left + (width * 0.2);  // 2.0 on satiety scale
        const highSatiety = left + (width * 0.8); // 8.0 on satiety scale
        const midY = top + (height * (1 - 200/900)); // 200 calories threshold

        ctx.save();

        // Above 200 calories
        // Red (low satiety <20%)
        ctx.fillStyle = 'rgba(255, 0, 0, 0.1)';
        ctx.fillRect(left, top, lowSatiety - left, midY - top);

        // Orange (medium satiety 20-80%)
        ctx.fillStyle = 'rgba(255, 165, 0, 0.1)';
        ctx.fillRect(lowSatiety, top, highSatiety - lowSatiety, midY - top);

        // Red (high satiety >80%)
        ctx.fillStyle = 'rgba(255, 0, 0, 0.1)';
        ctx.fillRect(highSatiety, top, right - highSatiety, midY - top);

        // Below 200 calories
        // Yellow (low satiety <20%)
        ctx.fillStyle = 'rgba(255, 255, 0, 0.1)';
        ctx.fillRect(left, midY, lowSatiety - left, bottom - midY);

        // Green (medium satiety 20-80%)
        ctx.fillStyle = 'rgba(0, 128, 0, 0.1)';
        ctx.fillRect(lowSatiety, midY, highSatiety - lowSatiety, bottom - midY);

        // Yellow (high satiety >80%)
        ctx.fillStyle = 'rgba(255, 255, 0, 0.1)';
        ctx.fillRect(highSatiety, midY, right - highSatiety, bottom - midY);

        ctx.restore();
    }
};

// Setup Chart.js
const ctx = document.getElementById('foodPlot').getContext('2d');

const foodChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Fødevarer',
            data: foods.map(food => ({
                x: food.satiety,
                y: food.calories,
                name: food.name
            })),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            pointRadius: 6
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        const point = context.raw;
                        return [
                            point.name,
                            'Kalorier: ' + point.y,
                            'Mæthed: ' + point.x.toFixed(1)
                        ];
                    }
                }
            },
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Mæthedsfornemmelse (SI)'
                },
                min: 0,
                max: 10,
                ticks: {
                    callback: function(value) {
                        if (value === 2) return '20%';
                        if (value === 8) return '80%';
                        return value * 10 + '%';
                    }
                },
                grid: {
                    color: function(context) {
                        if (context.tick.value === 2 || context.tick.value === 8) {
                            return 'rgba(0, 0, 0, 0.2)';
                        }
                        return 'rgba(0, 0, 0, 0.1)';
                    }
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Kalorier per 100g'
                },
                min: 0,
                max: 900,
                grid: {
                    color: function(context) {
                        if (context.tick.value === 200) {
                            return 'rgba(0, 0, 0, 0.2)';
                        }
                        return 'rgba(0, 0, 0, 0.1)';
                    }
                }
            }
        }
    },
    plugins: [quadrantPlugin]
});

// Search functionality
const searchInput = document.querySelector('.search-input');
const searchResults = document.querySelector('.search-results');

searchInput.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm.length < 1) {
        searchResults.style.display = 'none';
        return;
    }

    const filteredFoods = foods.filter(function(food) {
        return food.name.toLowerCase().includes(searchTerm);
    });

    searchResults.innerHTML = filteredFoods
        .map(function(food) {
            return '<div class="search-item" data-name="' + food.name + '">' +
                food.name + ' (' + food.calories + ' kcal/100g)' +
                '</div>';
        })
        .join('');

    searchResults.style.display = 'block';
});

searchResults.addEventListener('click', function(e) {
    const item = e.target.closest('.search-item');
    if (!item) return;

    const selectedName = item.dataset.name;
    const selectedFood = foods.find(function(f) {
        return f.name === selectedName;
    });

    // Highlight selected food in chart
    foodChart.data.datasets[0].pointBackgroundColor = foods.map(function(f) {
        return f.name === selectedName ? 'rgba(255, 0, 0, 0.8)' : 'rgba(75, 192, 192, 0.6)';
    });
    foodChart.data.datasets[0].pointRadius = foods.map(function(f) {
        return f.name === selectedName ? 10 : 6;
    });
    foodChart.update();

    searchInput.value = '';
    searchResults.style.display = 'none';
});

// Close search results when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.search-container')) {
        searchResults.style.display = 'none';
    }
});