
var females = [];
var males = [];
var females_urban = [];
var males_urban = [];
var year = [];
var years = [];



$(document).ready(function() {


  $.ajax({
    url: 'women.xml',
    type: 'GET',
    dataType: 'xml',
    success: parseData
  });

  function parseData(xml){

    $(xml).find("year").each(function(index){
      year.push($(this).attr("name"));
      females.push(parseFloat($(this).find("females").text()));
      males.push(parseFloat($(this).find("males").text()));
      females_urban.push(parseFloat($(this).find("females_urban").text()));
      males_urban.push(parseFloat($(this).find("males_urban").text()));
      console.log(year);
    });

buildchart3();
};

function buildchart3() {
  console.log("working...");
  console.log("years:" + years)
  console.log("females:" + females)

  console.log("males:" + males)


  $('#chart3').highcharts({
      chart: {
          type: 'column'
      },
      title: {
          text: 'Percent of <span style="color:#008b8F;">Rural</span> Population in Panama Without Own Income'
      },
      xAxis: {
          categories: year,
          title: {
              text: 'Year'
          }
      },
      yAxis: {
          min: 0,
          max: 60,
          title: {
              text: 'Percent',
              align: 'middle'
          },
          labels: {
              overflow: 'justify'
          }
      },
      tooltip: {
          valueSuffix: '%',
          backgroundColor: '#E6E7E8',
          borderColor: '#E6E7E8',
          shadow: false,
          pointFormat: '<tr><td style="color:#a65c7a;padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>'
      },
      plotOptions: {
        column: {
        states: {
            hover: {
                color: '#074442'
            }
        }
    }
},
      legend: {
          backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
          shadow: false,
          margin: 30
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Females',
          data: females,
          color: "#61c5be"
      }, {
          name: 'Males',
          data: males,
          color: "#0b675f"
      }]
  });
  buildchart4();
};




function buildchart4() {
  console.log("working...");
  console.log("years:" + years)
  console.log("females:" + females)

  console.log("males:" + males)


  $('#chart4').highcharts({
      chart: {
          type: 'column'
      },
      title: {
          text: 'Percent of <span style="color:#008b8F;">Urban</span>  Population in Panama Without Own Income'
      },
      xAxis: {
          categories: year,
          title: {
              text: 'Year'
          }
      },
      yAxis: {
          min: 0,
          max: 60,
          title: {
              text: 'Percent',
              align: 'middle'
          },
          labels: {
              overflow: 'justify'
          }
      },
      tooltip: {
          valueSuffix: '%',
          backgroundColor: '#E6E7E8',
          borderColor: '#E6E7E8',
          shadow: false,
          pointFormat: '<tr><td style="color:#a65c7a;padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>'
      },
      plotOptions: {
        column: {
        states: {
            hover: {
                color: '#074442'
            }
        }
    }
},
      legend: {
          backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
          shadow: false,
          margin: 30
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Females',
          data: females_urban,
          color: "#61c5be"
      }, {
          name: 'Males',
          data: males_urban,
          color: "#0b675f"
      }]
  });
};

});
