var year = [];
var arrivals = [];

$(document).ready(function() {

console.log("doc ready");

  $.ajax({
    url: 'info-4.xml',
    type: 'GET',
    dataType: 'xml',
    success: parseData
  });

  console.log("checkpoint 1");

function parseData(xml){
  console.log("in row");
  $(xml).find("row").each(function(){
    var $row = $(this);
    // year.push($(this).attr("name"));
    year.push(parseInt($row.find("year").text()));
    arrivals.push(parseInt($row.find("arrivals").text()));
  });

  console.log("here");
  buildChart1();
  //buildCharts();
}

function buildChart1(xml) {

  var chart = new Highcharts.Chart({
    chart: {
      renderTo: 'chart1',
      type: 'line'
    },
    title: {
        text: 'Panama Tourism: Number of Arrivals',
        x: -20 //center
    },
    subtitle: {
        text: 'Source: The World Bank',
        x: -20
    },
    xAxis: {
        categories: year
    },
    yAxis: {
        title: {
            text: 'Number of Arrivals'
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
    },
    tooltip: {
        valueSuffix: ' arrivals',
        backgroundColor: '#E6E7E8',
        borderColor: '#E6E7E8'
    },
    legend: {
        //layout: 'vertical',
        //align: 'right',
        //verticalAlign: 'middle',
        margin: 30,
        borderWidth: 0
    },

    plotOptions: {
            series: {
                states: {
                    hover: {
                        halo: {
                            size: 9,
                            attributes: {
                                fill: '#FFFFFF',
                                'stroke-width': 2,
                                stroke: '#008B8F'
                            }
                        }

                    }
                }
            }
        },
    series: [{
        name: 'Arrivals',
        data: arrivals,
        color: "#282423"

    }]
  });
};

});
