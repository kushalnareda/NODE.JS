import React, { Component } from 'react';
import { Chart } from 'chart.js/auto'; // Make sure to install chart.js if you haven't already

class MicroorganismInteractionsChart extends Component {
  chartRef = React.createRef();

  destroyChart() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  componentDidMount() {
    this.destroyChart();
    this.buildChart();
  }


  buildChart() {
    const ctx = this.chartRef.current.getContext('2d');

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Escherichia coli', 'Staphylococcus aureus', 'Candida albicans'],
        datasets: [
          {
            label: 'Growth',
            data: [/* Your growth data for Escherichia coli, Staphylococcus aureus, Candida albicans */],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(75, 192, 192, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(75, 192, 192, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  render() {
    return (
      <div>
        <canvas ref={this.chartRef} />
      </div>
    );
  }
}

export default MicroorganismInteractionsChart;
