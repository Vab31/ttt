import React, { useState,useEffect } from "react";
import Navigation from "./Navigation";
import Table from 'react-bootstrap/Table';
import * as R from 'ramda';

export default function Datatable(){
  
    let [count,setData]=useState([]);
    let [boo,setFlag]=useState(false);
    let [sea,setSea]=useState("");

    

    useEffect(() => {
        fetch("https://www.terriblytinytales.com/test.txt")
          .then(res => res.text())
          .then(text => {
            const words = text.split(" ");;
           // Create an object to store the frequency of each word
            const freq = {};

            // Loop through the words array and count the frequency of each word
            words.forEach(word => {
              if (freq[word]) {
                freq[word]++;
              } else {
                freq[word] = 1;
              }
            });
            const freqArr = Object.entries(freq);
            freqArr.sort((a, b) => b[1] - a[1]);
          //  const sortedDict=Object.fromEntries(freqArr);
       

            setData(freqArr);
          });
      }, [boo]);

      function searchfunc() {
       let va= count.filter((val)=>val[0]==sea )
       if(va.length!==0){
        console.log(va)
        window.alert(`Word: "${va[0][0]}" and Frequency: "${va[0][1]}"`)
       }else{
        window.alert("Oops! Word not found...")
       }
      }
  

   return(
    <div className="grid grid-cols-2">
    
    <Navigation/>
    <div className=""  >
   { boo ?
   <div>
     {/* <input className="w-64 left-2 mt-8 mb-8 mr-2 p-2" type="text" placeholder="Search Word" onChange={()=>setSea(sea)} value={sea} /> */}
     <input name="search" className="w-64 left-2 mt-8 mb-8 mr-2 p-2" type="text" id="search" placeholder="Search Word"  onChange={(event) => setSea(event.target.value)} />
         
        <button type="submit" className="text-white bg-blue-500 p-2" onClick={searchfunc}>
          Search
        </button>
        </div>
        :""}
      <Table className="border-4 border-amber-300 text-xl p-5 lg:-ml-24 bg-slate-700">
      { boo ?
        <thead className="text-amber-300">

        <tr>
          <th>S.No.</th>
          <th >First Name</th>
          <th>Last Name</th>
          
        </tr>
        
      </thead>:
      ""}
      <tbody>
      
        {
    boo && count && Object.entries
    (count).map(([sno, count,]) => {
                
         return(    
        <tr>
          {/* <td>{number}</td> */}
          <td className="text-2xl text-zinc-50 border-2  border-amber-300">{sno}</td>
          <td className="text-2xl text-zinc-50 border-2  border-amber-300">{count[0]}</td>
          <td className="text-2xl text-zinc-50 border-2  border-amber-300">{count[1]}</td>
          
        </tr>

        
        )})}

        
       
      </tbody>
    </Table>
    {
            boo
            ?
            "": 
            <div className="h-screen  justify-center items-center">
            
            <p className="text-5xl text-amber-300 lg:-ml-96 ">No Data Click on Show to fetch data</p>
         
          <button onClick={()=>setFlag(true)} className="bg-blue-500 text-slate-200 lg:-ml-96 p-5 rounded-lg m-10"> Show </button>
          </div>
    }
    </div>
</div>
   );


}


