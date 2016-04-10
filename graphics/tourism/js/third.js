var Level = [];
var TotalAssests = [];
var roa = [];
var roe = [];
var Leverage = [];
var Turnover = [];
var mtb = [];
var low = [];
var high = [];
var category = [];

$(document).ready(function() {


  $.ajax({
    url: 'info-2.xml',
    type: 'GET',
    dataType: 'xml',
    success: parseData
  });

  function parseData(xml){
    console.log("3nd doc ready");

    $(xml).find("category").each(function(index){
      category.push($(this).attr("name"));
      TotalAssests.push(parseFloat($(this).find("TotalAssests").text()));
      roa.push(parseFloat($(this).find("roa").text()));
      roe.push(parseFloat($(this).find("roe").text()));
      Leverage.push(parseFloat($(this).find("Leverage").text()));
      Turnover.push(parseFloat($(this).find("Turnover").text()));
      mtb.push(parseFloat($(this).find("mtb").text()));
      low.push(parseFloat($(this).find("low").text()));
      high.push(parseFloat($(this).find("high").text()));

    });
buildchart3();
};

function buildchart3(xml) {
  console.log("working...");
  $('#chart3').highcharts({
      chart: {
          type: 'column'
      },
      title: {
          text: 'Economic Benefits of Sustainability'
      },
      subtitle: {
          text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
      },
      xAxis: {
          categories: category,
          title: {
              text: 'Firm characteristics'
          }
      },
      yAxis: {
          min: 0,
          title: {
              text: 'Average',
              align: 'high'
          },
          labels: {
              overflow: 'justify'
          }
      },
      tooltip: {
          valueSuffix: '%',
          backgroundColor: '#E6E7E8',
          borderColor: '#E6E7E8'
      },
      plotOptions: {
        column: {
        states: {
            hover: {
                color: '#008B8F'
            }
        }
    }
},
      legend: {
          backgroundColor: ((Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'),
          shadow: true,
          margin: 30
      },
      credits: {
          enabled: false
      },
      series: [{
          name: 'Low Sustainability',
          data: low,
          color: "#E2DFDC"
      }, {
          name: 'High Sustainability',
          data: high,
          color: "#9D9994"
      }]
  });
};


});
