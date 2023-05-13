import React from 'react'
// import { Navigate } from 'react-router-dom'
import Navigation from './Navigation'

export default function Home() {
  return (
    <div className='grid grid-cols-2'>
    <Navigation/>
    

    <div className="h-screen  justify-center items-center">
            
            <p className="text-3xl text-amber-300 lg:-ml-96 ">
             Navigation  which have some dummy button which are not working
              only  ...<b>"working section"</b>... of Navigation is working
              <br/>
                            1)word frequency count
                            <br/>
                            2) chart
</p>
         
          </div>
         
    
    </div>
  )
}
