
// Define quadrant plugin
const quadrantPlugin = {
    id: 'quadrantPlugin',
    beforeDraw: (chart) => {
        const {ctx, chartArea: {top, bottom, left, right, width, height}} = chart;

        // Calculate midpoints
        const midX = left + (width * 0.5);  // 5.0 on satiety scale
        const midY = top + (height * (1 - 200/900)); // 200 calories threshold

        ctx.save();

        // Red quadrant (top-left) - High calories, Low satiety
        ctx.fillStyle = 'rgba(255, 200, 200, 0.5)';
        ctx.fillRect(left, top, midX - left, midY - top);

        // Orange quadrant (top-right) - High calories, High satiety
        ctx.fillStyle = 'rgba(255, 230, 200, 0.5)';
        ctx.fillRect(midX, top, right - midX, midY - top);

        // Green quadrant (bottom-right) - Low calories, High satiety
        ctx.fillStyle = 'rgba(200, 255, 200, 0.5)';
        ctx.fillRect(midX, midY, right - midX, bottom - midY);

        // Yellow quadrant (bottom-left) - Low calories, Low satiety
        ctx.fillStyle = 'rgba(255, 255, 200, 0.5)';
        ctx.fillRect(left, midY, midX - left, bottom - midY);

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