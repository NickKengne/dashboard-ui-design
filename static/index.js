const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const darkModeLayer = document.querySelector(".dark-mode-layer");
const darkMode = document.querySelector(".dark-mode");

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

darkMode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode-variables");
  darkModeLayer.classList.toggle("night");
});

Orders.forEach((order) => {
  const tr = document.createElement("tr");
  const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${
          order.status === "Declined"
            ? "danger"
            : order.status === "Pending"
            ? "warning"
            : "success"
        }">${order.status}</td>
        <td class="primary">Details</td>
    `;
  tr.innerHTML = trContent;
  document.querySelector("table tbody").appendChild(tr);
});

var options = {
  series: [
  {
    type: 'rangeArea',
    name: 'Team B Range',

    data: [
      {
        x: 'Jan',
        y: [1100, 1900]
      },
      {
        x: 'Feb',
        y: [1200, 1800]
      },
      {
        x: 'Mar',
        y: [900, 2900]
      },
      {
        x: 'Apr',
        y: [1400, 2700]
      },
      {
        x: 'May',
        y: [2600, 3900]
      },
      {
        x: 'Jun',
        y: [500, 1700]
      },
      {
        x: 'Jul',
        y: [1900, 2300]
      },
      {
        x: 'Aug',
        y: [1000, 1500]
      }
    ]
  },

  {
    type: 'rangeArea',
    name: 'Team A Range',
    data: [
      {
        x: 'Jan',
        y: [3100, 3400]
      },
      {
        x: 'Feb',
        y: [4200, 5200]
      },
      {
        x: 'Mar',
        y: [3900, 4900]
      },
      {
        x: 'Apr',
        y: [3400, 3900]
      },
      {
        x: 'May',
        y: [5100, 5900]
      },
      {
        x: 'Jun',
        y: [5400, 6700]
      },
      {
        x: 'Jul',
        y: [4300, 4600]
      },
      {
        x: 'Aug',
        y: [2100, 2900]
      }
    ]
  },

  {
    type: 'line',
    name: 'Team B Median',
    data: [
      {
        x: 'Jan',
        y: 1500
      },
      {
        x: 'Feb',
        y: 1700
      },
      {
        x: 'Mar',
        y: 1900
      },
      {
        x: 'Apr',
        y: 2200
      },
      {
        x: 'May',
        y: 3000
      },
      {
        x: 'Jun',
        y: 1000
      },
      {
        x: 'Jul',
        y: 2100
      },
      {
        x: 'Aug',
        y: 1200
      },
      {
        x: 'Sep',
        y: 1800
      },
      {
        x: 'Oct',
        y: 2000
      }
    ]
  },
  {
    type: 'line',
    name: 'Team A Median',
    data: [
      {
        x: 'Jan',
        y: 3300
      },
      {
        x: 'Feb',
        y: 4900
      },
      {
        x: 'Mar',
        y: 4300
      },
      {
        x: 'Apr',
        y: 3700
      },
      {
        x: 'May',
        y: 5500
      },
      {
        x: 'Jun',
        y: 5900
      },
      {
        x: 'Jul',
        y: 4500
      },
      {
        x: 'Aug',
        y: 2400
      },
      {
        x: 'Sep',
        y: 2100
      },
      {
        x: 'Oct',
        y: 1500
      }
    ]
  }
],
  chart: {
  height: 350,
  type: 'rangeArea',
  animations: {
    speed: 500
  }
},
colors: ['#d4526e', '#33b2df', '#d4526e', '#33b2df'],
dataLabels: {
  enabled: false
},
fill: {
  opacity: [0.24, 0.24, 1, 1]
},
forecastDataPoints: {
  count: 2
},
stroke: {
  curve: 'straight',
  width: [0, 0, 2, 2]
},
legend: {
  show: true,
  customLegendItems: ['Team B', 'Team A'],
  inverseOrder: true
},
title: {
  text: 'Range Area with Forecast Line (Combo)'
},
markers: {
  hover: {
    sizeOffset: 5
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();

var options2 = {
  series: [{
  name: 'Marine Sprite',
  data: [44, 55, 41, 37, 22, 43, 21]
}, {
  name: 'Striking Calf',
  data: [53, 32, 33, 52, 13, 43, 32]
}, {
  name: 'Tank Picture',
  data: [12, 17, 11, 9, 15, 11, 20]
}, {
  name: 'Bucket Slope',
  data: [9, 7, 5, 8, 6, 9, 4]
}, {
  name: 'Reborn Kid',
  data: [25, 12, 19, 32, 25, 24, 10]
}],
  chart: {
  type: 'bar',
  height: 350,
  stacked: true,
},
plotOptions: {
  bar: {
    horizontal: true,
    dataLabels: {
      total: {
        enabled: true,
        offsetX: 0,
        style: {
          fontSize: '13px',
          fontWeight: 900
        }
      }
    }
  },
},
stroke: {
  width: 1,
  colors: ['#fff']
},
title: {
  text: 'Fiction Books Sales'
},
xaxis: {
  categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
  labels: {
    formatter: function (val) {
      return val + "K"
    }
  }
},
yaxis: {
  title: {
    text: undefined
  },
},
tooltip: {
  y: {
    formatter: function (val) {
      return val + "K"
    }
  }
},
fill: {
  opacity: 1
},
legend: {
  position: 'top',
  horizontalAlign: 'left',
  offsetX: 40
}
};

var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
chart2.render();


document.getElementById('logout').addEventListener('click', () => {
  location.href="../static/login.html"
})
