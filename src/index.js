import "./styles.css";
import Chart from "chart.js";
import * as lib from "./lib/lib";

import { default as $ } from "./lib/jq";
import * as data from "./json/data.json";

var ctx = $("#myChart");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2", "3A", "3B", "4", "5", "6"],
    // labels: ["Never used the website", "Have Used the website"],
    datasets: [
      {
        label: "Total Score",
        data: [37, 43, 32, 29, 34, 24],
        // data: [35, 4],
        backgroundColor: [
          "#ffa552",
          "#fcde9c",
          "#fff704",
          "#cccccc",
          "#333333",
          "#DDB583"
        ]
      }
    ]
  },
  options: {
    title: {
      display: true
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 66
          },
          scaleLabel: {
            display: true,
            labelString: "Total Score"
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            beginAtZero: true,
            labelString: "Questions"
          }
        }
      ]
    }
  }
});

ctx.on("click", function(evt) {
  var activePoints = myChart.getElementAtEvent(evt);
  console.log(activePoints);
  let task = data.tasks[activePoints[0]._index];
  lib.showDialog(task);
});

var ctx = $("#myChart2");
var myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Never used the website", "Have Used the website", "NA"],
    datasets: [
      {
        label: "Total Score",
        data: [22, 4, 13],
        backgroundColor: ["#ffa552", "#fcde9c", "#333333"]
      }
    ]
  },
  options: {
    title: {
      display: false
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 39
          },
          scaleLabel: {
            display: true,
            labelString: "Total Ammount"
          }
        }
      ],
      xAxes: [
        {
          ticks: {
            beginAtZero: true
          },
          scaleLabel: {
            display: true,
            beginAtZero: true
          }
        }
      ]
    }
  }
});

ctx.on("click", function(evt) {
  var activePoints = myChart.getElementAtEvent(evt);
  console.log(activePoints);
  let task = data.tasks[activePoints[0]._index];
  lib.showDialog(task);
});
