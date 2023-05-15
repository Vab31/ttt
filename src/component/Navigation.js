import * as React from 'react';
import FilePresentIcon from '@mui/icons-material/FilePresent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import BarChartIcon from '@mui/icons-material/BarChart';
import Home from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import ListIcon from '@mui/icons-material/List';
import { Avatar } from '@mui/material';
import AbcIcon from '@mui/icons-material/Abc';
import Person2Icon from '@mui/icons-material/Person2';


export default function Navigation() {
  return (

   
  
    <div className= 'h-screen'>
   
        <ul className="bg-slate-700 max-w-sm rounded-md text-slate-50 font-medium text-left pl-2  h-screen pb-2 " >
        <h1 className='lg:text-4xl text-3xl text-amber-300 pt-3'>DashBoard</h1>
        <div className="p-6 lg:pl-20 items-center" >
        <Avatar
      alt="John Doe"
    //   src="https://www.flaticon.com/free-icon/woman_4139951?term=person&page=1&position=75&origin=tag&related_id=4139951"
      sx={{ width: 100, height: 100 }}  
    />
       
</div>
    <p className='text-3xl text-center font-bold lg:-ml-24 text-amber-300'>John Doe</p>
        <li className='p-5 flex items-center  hover:bg-slate-500'>
  <ListItemDecorator>
    <Home />
  </ListItemDecorator>
  <span className="ml-2"> <button>Home</button></span>
</li>
            <li className='p-5 flex items-center  hover:bg-slate-500'>
  <ListItemDecorator>
    <ListIcon/>
  </ListItemDecorator>
  <span className="ml-2"> <button>Project</button></span>
</li>
           <li className='p-5 flex items-center  hover:bg-slate-500'>
  <ListItemDecorator>
    <SettingsIcon />
  </ListItemDecorator>
  <span className="ml-2"> <button>Settings</button></span>
</li>

<li className='p-5 pl-1 flex items-center text-amber-300 hover:bg-slate-500'>
  
  <span className="ml-2">Working</span>
</li>
{/* 
<li className='p-6 flex items-center hover:bg-slate-500'>
<ListItemDecorator>
    <FilePresentIcon/>
  </ListItemDecorator>
  <span className="ml-2"><button>Fetch Data</button></span>
</li> */}
<li className='p-6 flex items-center hover:bg-slate-500'>
<ListItemDecorator>
    <AbcIcon />
  </ListItemDecorator>
  <span className="ml-2" ><button> <a href="/table"> Word Frequency Count </a></button></span>
</li>

<li className='p-6 flex items-center hover:bg-slate-500'>
<ListItemDecorator>
    <BarChartIcon/>
  </ListItemDecorator>
  <span className="ml-2"  ><button><a href="/chart">Chart</a></button></span>
</li>
  </ul>
 


    
 </div>
  
 
  );
}

