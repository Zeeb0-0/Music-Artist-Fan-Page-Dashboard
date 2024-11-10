// Page Views by Section Chart
const pageViewsCtx = document.getElementById('pageViewsChart').getContext('2d');
const pageViewsChart = new Chart(pageViewsCtx, {
  type: 'bar',
  data: {
    labels: ['Biography', 'Discography', 'Music Videos', 'Gallery', 'Social Media'],
    datasets: [{
      label: 'Page Views',
      data: [120, 90, 75, 50, 45], // Sample data, adjust as needed
      backgroundColor: '#1db954',
      borderColor: '#1db954',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// User Interactions Chart
const userInteractionsCtx = document.getElementById('userInteractionsChart').getContext('2d');
const userInteractionsChart = new Chart(userInteractionsCtx, {
  type: 'doughnut',
  data: {
    labels: ['Likes', 'Shares', 'Comments', 'Downloads'],
    datasets: [{
      label: 'User Interactions',
      data: [300, 150, 100, 75], // Sample data
      backgroundColor: ['#1db954', '#535353', '#404040', '#262626'],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
  }
});
