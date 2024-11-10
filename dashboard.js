// dashboard.js
document.addEventListener('DOMContentLoaded', function () {
    google.charts.load('current', { packages: ['corechart'] });
    google.charts.setOnLoadCallback(drawCharts);

    function drawCharts() {
        drawPageViewsChart();
        drawUserInteractionsChart();
        drawConversionRateChart();
    }

    function drawPageViewsChart() {
        const data = google.visualization.arrayToDataTable([
            ['Date', 'View'],
            ['2024-01-01', 100],
            ['2024-01-02', 120],
            ['2024-01-03', 130],
        ]);

        const options = {
            title: 'Page Views Over Time',
            backgroundColor: '#1f1f1f',
            titleTextStyle: { color: '#f1f1f1' },
            hAxis: { textStyle: { color: '#f1f1f1' }, titleTextStyle: { color: '#f1f1f1' } },
            vAxis: { textStyle: { color: '#f1f1f1' }, titleTextStyle: { color: '#f1f1f1' } },
            legend: { textStyle: { color: '#f1f1f1' } },
            colors: ['#61b5b7']
        };

        const chart = new google.visualization.LineChart(document.getElementById('pageViewsChart'));
        chart.draw(data, options);
    }

    function drawUserInteractionsChart() {
        const data = google.visualization.arrayToDataTable([
            ['Action', 'Count'],
            ['Likes', 150],
            ['Shares', 80],
            ['Comments', 45],
        ]);

        const options = {
            title: 'User Interactions',
            backgroundColor: '#1f1f1f',
            titleTextStyle: { color: '#f1f1f1' },
            legend: { textStyle: { color: '#f1f1f1' } },
            colors: ['#008082', '#00A19D', '#536877']
        };

        const chart = new google.visualization.PieChart(document.getElementById('userInteractionsChart'));
        chart.draw(data, options);
    }

    function drawConversionRateChart() {
        const data = google.visualization.arrayToDataTable([
            ['Metric', 'Rate'],
            ['Completed Signups', 30],
            ['Incomplete Signups', 70],
        ]);

        const options = {
            title: 'Conversion Rate',
            backgroundColor: '#1f1f1f',
            titleTextStyle: { color: '#f1f1f1' },
            hAxis: { textStyle: { color: '#f1f1f1' }, titleTextStyle: { color: '#f1f1f1' } },
            vAxis: { textStyle: { color: '#f1f1f1' }, titleTextStyle: { color: '#f1f1f1' } },
            legend: { textStyle: { color: '#f1f1f1' } },
            colors: ['#61b5b7', '#f1f1f1']
        };

        const chart = new google.visualization.BarChart(document.getElementById('conversionRateChart'));
        chart.draw(data, options);
    }
});
