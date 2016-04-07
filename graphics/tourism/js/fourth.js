var tourists = [];
var spending = [];
var country = [];
var population = [];
var countryName = [];
var bubbleInfo = [];
var arrayToPush = [];





$(document).ready(function() {
  // for (var i = 0; i < 8; i++) {
  //   country.push('name' + i);
  //   tourists.push(10 * Math.random());
  //   spending.push(10 * Math.random());
  //   population.push(10 * Math.random());
  //
  //   arrayToPush = [tourists[i], spending[i], population[i], country[i]];
  //   bubbleInfo.push(arrayToPush);
  // }
  // console.log("doc ready");
  //
  //
  //
  $.ajax({
    url: 'info-5.xml',
    type: 'GET',
    dataType: 'xml',
    success: parseData
  });
  function parseData(xml){
    console.log("3nd doc ready");

    $(xml).find("country").each(function(index){
      country.push($(this).attr("name"));
      tourists.push(parseFloat($(this).find("tourists").text()));
      spending.push(parseFloat($(this).find("spending").text()));
      population.push(parseFloat($(this).find("population").text()));
      // countryName.push($(this).attr("name"));

      arrayToPush = [parseFloat($(this).find("tourists").text()),
      parseFloat($(this).find("population").text()), parseFloat($(this).find("spending").text()),
      $(this).attr("name")];

      bubbleInfo.push(arrayToPush);


     });

  //  };
    console.log(bubbleInfo);
    // console.log(spending);
    // console.log(processedData);



  buildchart4();

};


  function buildchart4(xml) {
    $('#chart4').highcharts({

        chart: {
            type: 'bubble',
            plotBorderWidth: 1,
            zoomType: 'xy'
        },

        legend: {
            enabled: false
        },

        title: {
            text: 'Number of Tourists v. Amount Spent per Tourist'
        },

        subtitle: {
            text: 'Source: Annual Economic Reports. Ministry of Economy and Finance. Department of Budget and Statistics IPAT.'
          },

        xAxis: {
            gridLineWidth: 1,
            title: {
                text: 'Number of Tourists in 2000'
            },
            labels: {
                format: '{value}'
            },
            // plotLines: [{
            //     color: 'black',
            //     dashStyle: 'dot',
            //     width: 2,
            //     value: 65,
            //     // label: {
            //     //     rotation: 0,
            //     //     y: 15,
            //     //     style: {
            //     //       fontStyle: 'italic'
            //     //     },
            //     //     text: 'Safe fat intake 65g/day'
            //     // },
            //     zIndex: 3
            // }]
        },

        yAxis: {
            startOnTick: false,
            endOnTick: false,
            title: {
                text: 'Total Population in 2000'
            },
            labels: {
                format: '{value}'
            },
            maxPadding: 0.2
            // plotLines: [{
            //     color: 'black',
            //     dashStyle: 'dot',
            //     width: 2,
            //     value: 50,
            //     label: {
            //         align: 'right',
            //         style: {
            //             fontStyle: 'italic'
            //         },
            //         text: 'Safe sugar intake 50g/day',
            //         x: -10
            //     },
            //     zIndex: 3
            // }]
        },

        tooltip: {
            useHTML: true,
            headerFormat: '<table>',
            pointFormat: '<tr><th colspan="2"><h3>{point.name}</h3></th></tr>' +
                '<tr><th>Number of tourists</th><td>{point.x}</td></tr>' +
                '<tr><th>Total population:</th><td>{point.y}</td></tr>' +
                '<tr><th>Spending per tourist:</th><td>{point.z}$</td></tr>',
            footerFormat: '</table>',
            followPointer: true
        },

        plotOptions: {
            series: {
              keys: ['x', 'y', 'z', 'name'],
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
                },
              dataLabels: {
                  enabled: true,
                  format: '{point.name}'
              }


            }
        },

        series: [{
          data: bubbleInfo,
          color: '#9D9994'

        }]

    });
};



 });
