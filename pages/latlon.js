import React, { useEffect, useState } from "react";
import { CheckBox } from "@mui/icons-material";

function LatLon(){
    const [lat,setLat]=useState()
    const [lon,setLon]=useState()

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((postion)=>{
            setLat(postion.coords.latitude)
            setLon(postion.coords.longitude)
        })
    })

    // function latlon () {
    //     navigator.geolocation.getCurrentPosition((postion)=>{
    //         setLat(postion.coords.latitude);
    //         setLon(postion.coords.longitude);
    //     })
    //     console.log(lat);
    //     console.log(lon);

    // }

    return(
        <div>
            <CheckBox value="Tutor 1" onClick={() => {
                 navigator.geolocation.getCurrentPosition((postion)=>{
                    setLat(postion.coords.latitude);
                    setLon(postion.coords.longitude);
                })
                console.log(lat);
                console.log(lon);
            }}/>
            <h1>{lat} location {lon}</h1>
        </div>
    );
}
export default LatLon;