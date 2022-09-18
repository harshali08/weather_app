import React, { useEffect, useState } from 'react';

import { FaSearch,FaCloudSun,FaCloudSunRain,FaCloudShowersHeavy} from "react-icons/fa";
import { HiLocationMarker} from "react-icons/hi";


function TempApp(){
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("Mumbai");

    useEffect(()=>{
        const fetchApi=async()=>{
            const url= `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=20073702af8df1df26fc11b886b764ba`
           const response=await fetch(url);
           const resJson= await response.json();
           console.log(resJson);
           setCity(resJson.main);
        }
        fetchApi();
        
    },[search] )

  return(
    <div>
         <div className='body'>
          <div className='cont'>
          <div className='search'>
                       <input typeof='text' placeholder='search' onChange={(event)=>{
                           setSearch(event.target.value)
                       }}></input>
                       <FaSearch className='icon' />
             </div>
             <div className='clouds'>
             <FaCloudSun className='clo_icon'/>
             <FaCloudShowersHeavy className='clo_icon'/>
             <FaCloudSunRain className='clo_icon'/>
             
             </div>

             {
                !city ? (
                    <p>No data Found</p>
                ):(<div>
                    <div className='loc'>

<h3><HiLocationMarker></HiLocationMarker></h3>
 <h3>
   {search}
 </h3>
</div>

<h1 className='main_val'>
 {city.temp}<sup>o</sup>C
</h1>

<div className='min_max'>
<div className='min_max_val'> <h5 >Min value <br/> <br/>
 <p>{city.temp_min}<sup>o</sup>C</p></h5></div>
 <div className='min_max_val'> <h5 >Max value  <br/> <br/> <p>{city.temp_max}<sup>o</sup>C</p></h5>
</div></div>

</div>

                )
             }
             </div>
             </div>
    </div>
  )
}
export default TempApp;