var ctx = document.getElementById("CCAG-q2").getContext("2d");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    responsive: false,
    labels: ["Success", "Struggle", "Fail", "NA"],

    datasets: [
      {
        backgroundColor: ["#ffa552", "#fcde9c", "#cccccc", "#333333"],
        data: [21, 11, 5]
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Q2. Tony de Latour Exhibition"
    },
    responsive: true,
    maintainAspectRatio: false
  }
});

var ctx = document.getElementById("CCAG-q3a").getContext("2d");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Success", "Struggle", "Fail", "NA"],
    datasets: [
      {
        backgroundColor: ["#ffa552", "#fcde9c", "#cccccc", "#333333"],
        data: [22, 7, 10]
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Q3a. Family Visit - 4th August"
    },
    responsive: true,
    maintainAspectRatio: false
  }
});

var ctx = document.getElementById("CCAG-q3b").getContext("2d");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Success", "Struggle", "Fail", "NA"],
    datasets: [
      {
        backgroundColor: ["#ffa552", "#fcde9c", "#cccccc", "#333333"],
        data: [30, 5, 4]
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Q3b. Newsletter Sign Up"
    },
    responsive: true,
    maintainAspectRatio: false
  }
});

var ctx = document.getElementById("CCAG-jack").getContext("2d");
var myChart = new Chart(ctx, {
  type: "horizontalBar",
  labels: ["Success", "Struggle", "Fail", "NA"],
  data: {
    labels: ["< 18", "18 - 25", "26 - 40", "41+", "Unknown"],
    datasets: [
      {
        label: "39 Participants Recorded",
        backgroundColor: [
          "#ffa552",
          "#fcde9c",
          "#fff704",
          "#cccccc",
          "#DDB583"
        ],
        data: [11, 20, 5, 2, 1]
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    title: {
      display: true
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            labelString: "Age Groups Of Participants"
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }
});

var ctx = document.getElementById("CCAG-q4").getContext("2d");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Success", "Struggle", "Fail", "NA"],
    datasets: [
      {
        backgroundColor: ["#ffa552", "#fcde9c", "#cccccc", "#333333"],
        data: [25, 4, 4, 6]
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Q4. Join a Tour"
    },
    responsive: true,
    maintainAspectRatio: false
  }
});

var ctx = document.getElementById("CCAG-q5").getContext("2d");
var myChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Success", "Struggle", "Fail", "NA"],
    datasets: [
      {
        backgroundColor: ["#ffa552", "#fcde9c", "#cccccc", "#333333"],
        data: [15, 7, 10, 7]
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Q5. Become a Friend of the Gallery"
    },
    responsive: true,
    maintainAspectRatio: false
  }
});

var ctx = document.getElementById("CCAG-q6").getContext("2d");
var myChart = new Chart(ctx, {
  type: "pie",
  labels: ["Success", "Struggle", "Fail", "NA"],
  data: {
    labels: ["Success", "Struggle", "Fail", "NA"],
    datasets: [
      {
        backgroundColor: ["#ffa552", "#fcde9c", "#cccccc", "#333333"],
        data: [26, 7, 0, 6]
      }
    ]
  },
  options: {
    legend: {
      display: false
    },
    title: {
      display: true,
      text: "Q6. Kids Holiday Program Class"
    },
    responsive: true,
    maintainAspectRatio: false
  }
});
