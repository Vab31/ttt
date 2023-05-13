import React, { useState, useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Navigation from './Navigation';

function WordFrequencyChart() {
  const [wordCounts, setWordCounts] = useState([]);
  const chartRef = useRef(null);
  let [boo,setFlag]=useState(false);

  useEffect(() => {
    // Fetch the contents of the URL
    fetch('https://www.terriblytinytales.com/test.txt')
      .then(response => response.text())
      .then(text => {
        // Parse the text into individual words
        const words = text.toLowerCase().match(/\b\w+\b/g);

        // Count the frequency of each word
        const wordCounts = {};
        words.forEach(word => {
          if (wordCounts[word]) {
            wordCounts[word]++;
          } else {
            wordCounts[word] = 1;
          }
        },[boo]);

        // Select the 20 most occurring words
        const sortedWordCounts = Object.entries(wordCounts)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 20);

        // Update state with the word counts
        setWordCounts(sortedWordCounts);
      });
  }, [boo]);

  useEffect(() => {
    // Create a chart instance when the canvas element is available in the DOM
    if (chartRef.current && wordCounts.length > 0) {
      const ctx = chartRef.current.getContext('2d');
      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: wordCounts.map(entry => entry[0]),
          datasets: [{
            label: 'Word Frequency',
            data: wordCounts.map(entry => entry[1]),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(225, 96, 9, 1)',
            borderWidth: 1,
            
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true,
                fontColor:'red'
                
              }
            }],
            xAxes: [{
                ticks: {
                  fontColor: 'red' // set the font color of the x-axis labels to red
                }
              }],
          }
        }
      });

      // Store the chart instance in the ref
      chartRef.current = chart;
    }
  }, [wordCounts]);

  const handleExportClick = () => {
    // Build a CSV string of the word counts
    const csvContent = 'data:text/csv;charset=utf-8,' + wordCounts.map(entry => entry.join(',')).join('\n');

    // Create a temporary link element to trigger the download
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'word-frequency.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='text-white'>
   {  boo?
   <div>
     <canvas id="myChart" ref={chartRef}></canvas>
      <button onClick={handleExportClick} className='bg-blue-500 text-slate-200  p-5 rounded-lg m-10'>Export</button>
      <button  className='bg-blue-500 text-slate-200  p-5 rounded-lg m-10'><a href="/">Return Home</a></button>
   </div>
   : ""
   }
   {
            boo
            ?
            "": 
            <div className='grid grid-cols-2'>
            <Navigation/>
            <div className="h-screen  justify-center items-center">
            
            <p className="text-5xl text-amber-300 lg:-ml-96 ">No Data Click on Show to fetch data</p>
         
          <button onClick={()=>setFlag(true)} className="bg-blue-500 text-slate-200 lg:-ml-96 p-5 rounded-lg m-10"> Show </button>
          </div>
          </div>
    }
   
   
    </div>
  );
}

export default WordFrequencyChart;

