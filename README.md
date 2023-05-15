Project link : https://ttt-one-zeta.vercel.app/

There are Three component In this Dashboard..
1) Navigation  which have some dummy button which are not working
 only  ..."working section"... of Navigation is working
            |
            |______ word frequency count
            |______ chart
 


 2) WordFrequencyChart (chart) histogram.js
  Its displays 20 most repeated word in chart form...
  It have a button to export data in csv form...



=> Imports the necessary dependencies:useState, useEffect, useRef, Chart, and Navigation.


1. 'useState': This import is a React hook that enables you to add state to functional components. You can declare state variables and control their values thanks to it.

2. 'useEffect': This import is another React hook that enables you to execute side effects in functional components. Data retrieval, DOM manipulation, and event subscription are examples of possible side effects.

3. 'useRef': This import is a React hook that enables you to construct a mutable reference to an element in the DOM. It is frequently used to directly access and control DOM elements.

4. 'Chart': This import is the default export from the 'chart.js/auto' module. It offers the widely used Chart.js package, which is used to build charts and graphs in JavaScript.




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
// set the font color of the x-axis labels to red

                  fontColor: 'red' 
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

  In return...
Renders the component's UI:

=> If boo is true, it displays the chart, an "Export" button, and a "Return Home" button.
=> If boo is false, it displays a "No Data" message and a "Show" button.
=> The "Show" button sets the boo flag to true when clicked.

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
   

 3) Datatable Component (word frequency count) display.js

The code you provided is a React component called Datatable that fetches data from a URL, counts the frequency of words, and displays the word frequency table using the React Bootstrap Table component. 

Imports

Imports the necessary dependencies: React, useState, useEffect, Navigation (custom component), and Table component from React Bootstrap.

 let [count,setData]=useState([]);  //count stores the array of word counts.

let [boo,setFlag]=useState(false);  //boo is a flag that determines whether to fetch and display data or show a "No Data" message.

let [sea,setSea]=useState("");  // sea stores the search keyword entered by the user.


Count frequency and sort it and store in count array...

    useEffect(() => {
            fetch("https://www.terriblytinytales.com/test.txt")
            .then(res => res.text())
            .then(text => {
                const words = text.split(" ");;
         
             const freq = {};
             words.forEach(word => {
              if (freq[word]) {
                freq[word]++;
              } else {
                freq[word] = 1;
              }
            });
            const freqArr = Object.entries(freq);
            freqArr.sort((a, b) => b[1] - a[1]);
          
       

            setData(freqArr);
          });
      }, [boo]);



Defines the searchfunc function:

=> It is called when the user clicks the "Search" button.
=> It filters the count array based on the search keyword entered by the user.
=> If the word is found, it displays an alert with the word and its frequency. Otherwise, it displays an alert indicating that the word was not found.

       function searchfunc() {
       let va= count.filter((val)=>val[0]==sea )
       if(va.length!==0){
        console.log(va)
        window.alert(`Word: "${va[0][0]}" and Frequency: "${va[0][1]}"`)
       }else{
        window.alert("Oops! Word not found...")
       }
      }
  

  In return render ui

=> If boo is true, it displays an input field and a "Search" button for searching words.
=> The table displays the word frequency data in rows with columns for S.No., First Name (word), and Last Name (frequency).
=> If boo is false, it displays a "No Data" message and a "Show" button to fetch and display data.
