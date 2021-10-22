import React from 'react';
import { Bar } from 'react-chartjs-2';

function VerticalBar({dataParam}) {

    // The dataParam for a vertical bar should be:
    
    // const dataParam = {

    //     labelName: 'Beep', 
    //     labels   : ['A', 'B', 'C'],
    //     data     : [1, 2, 3],
        
    //     // If custom color is desired:

    //     colors  : [
    //         'rgba(255   , 99    , 132   , 0.2)',
    //         'rgba(54    , 162   , 235   , 0.2)',
    //         'rgba(255   , 206   , 86    , 0.2)'
    //     ]

    // }

    const defaultBarColors = [
        'rgba(255   , 99    , 132   , 0.2)',
        'rgba(54    , 162   , 235   , 0.2)',
        'rgba(255   , 206   , 86    , 0.2)',
        'rgba(75    , 192   , 192   , 0.2)',
        'rgba(153   , 102   , 255   , 0.2)',
        'rgba(255   , 159   , 64    , 0.2)',
    ]

    var barColors = null;

    if (dataParam.hasOwnProperty('colors')) {
        barColors = dataParam.colors;
    } else {
        barColors = defaultBarColors;
    }

    const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };

    const data = {

        labels  : dataParam.labels,
        datasets: [{

            label           : dataParam.labelName, 
            data            : dataParam.data,
            backgroundColor : barColors

        }]

    }

    return (
        <>
            <Bar data={data} options={options} />
        </>
    )
}

export default VerticalBar