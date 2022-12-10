 const chartOne = document.getElementById('chartOne');
 const chartTwo = document.getElementById('chartTwo');

  new Chart(chartOne, {
    type: 'doughnut',
    data: {
      labels: ['Token Disrtibution', 'Advisors & Partners', 'Company Reserve', 'Bounty', 'Team'],
      datasets: [{
        label: '',
        data: [300, 50, 100, 75, 34],
        borderWidth: 0,
        backgroundColor: [
            '#665fff',
            '#f89c5a',
            '#d95af8',
            '#5aa5f8',
            '#d7a7ff'
        ]
      }]
    },
    options: {
      animation: false,
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });

  new Chart(chartTwo, {
    type: 'doughnut',
    data: {
      labels: ['Marketing & Sales', 'Product Development', 'Legal Expenses', 'Admin & Operations', 'Overhead Expenses'],
      datasets: [{
        label: '',
        data: [50, 80, 120, 250, 30],
        borderWidth: 0,
        backgroundColor: [
            '#51ffd0',
            '#ffe56a',
            '#f89c5a',
            '#ff5fae',
            '#8e51ff'
        ]
      }]
    },
    options: {
      animation: false,
      plugins: {
        legend: {
          display: false,
        }
      }
    }
  });