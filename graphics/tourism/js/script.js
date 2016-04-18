
var year = [];
var DirectContributionToGDP = [];
var TotalContributionToGDP = [];
var DirectContributionToEmployment = [];
var TotalContributionToEmployment = [];

//level was here

 function loadData(){
  // $.ajax({
  //   url: 'info-2.xml',
  //   type: 'GET',
  //   dta: 'xml',
  //   success: parseData
  // });
  $.ajax({
    url: 'info-3.xml',
    type: 'GET',
    dta: 'xml',
    success: parseData
  });
}

function parseData(xml){
  console.log("2nd doc ready");

  $(xml).find("year").each(function(index){
    year.push($(this).attr("name"));
    console.log($(this).find("Direct_contribution_to_GDP").text());
    DirectContributionToGDP.push(parseFloat($(this).find("Direct_contribution_to_GDP").text()));
    TotalContributionToGDP.push(parseFloat($(this).find("Total_contribution_to_GDP").text()));
    DirectContributionToEmployment.push(parseFloat($(this).find("Direct_contribution_to_employment").text()));
    TotalContributionToEmployment.push(parseFloat($(this).find("Total_contribution_to_employment").text()));
  });

  $(xml).find("Level").each(function(index){
    Level.push($(this).attr("name"));
    TotalAssests.push(parseFloat($(this).find("TotalAssests").text()));
    ROA.push(parseFloat($(this).find("roa").text()));
    ROE.push(parseFloat($(this).find("roe").text()));
    Leverage.push(parseFloat($(this).find("Leverage").text()));
    Turnover.push(parseFloat($(this).find("Turnover").text()));
    MTB.push(parseFloat($(this).find("mtb").text()));
  });

  buildchart2();
};
function buildchart2(xml) {
  console.log(year);
  console.log(DirectContributionToGDP);
  console.log("working");
    $('#chart2').highcharts({
        title: {
            text: 'Effect of Tourism on GDP',
            x: -20 //center
        },
        subtitle: {
            //margin: 70,
            text: 'Source: World Travel and Tourism Council',
            x: -20
        },
        xAxis: {
            categories: year
        },
        yAxis: {
            title: {
                text: 'Real 2013 Prices'

            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        plotOptions: {
        series: {
            connectNulls: true
        }
    },
        tooltip: {
            valueSuffix: 'USD',
            backgroundColor: '#E6E7E8',
            borderColor: '#E6E7E8',
            shadow: false,
            pointFormat: '<tr><td style="color:#a65c7a;padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>'

        },
        legend: {
            margin: 30


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
            name: "Direct contribution to GDP",
            data: DirectContributionToGDP,
            color: '#008b8f'

          },
            {
            name: "Total contribution to GDP",
            data: TotalContributionToGDP,
            color: '#074442'


            },
            // {
            // name: "Direct contribution to employment",
            // data: DirectContributionToEmployment,
            // color: '#b5d9d5'
            //
            // },
            {
              name: 'Total contribution to employment',
              data: TotalContributionToEmployment,
              color: '#b5d9d5'

        }]
    });
    buildTable();
};

function buildTable(){
 $('#table').DataTable( {
      "ajax": 'table.txt'
  } );
  console.log("working adkf;asldkf;a")
};

$(document).ready(function() {
loadData ();
})
