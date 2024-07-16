import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
export const CreateApi = () => {
    const [info, setInfo] = useState(null);
    useEffect(()=>{
        const fetchData = async () =>{
            try {
            const response = await axios.get("https://api.randomuser.me/")

            const data = response.data
                const userData ={
                    name: data.results[0].name,
                    email: data.results[0].email,
                    phone: data.results[0].phone,
                    picture: data.results[0].picture.medium
                }
            setInfo(userData)
            console.log("data", data)
            console.log("SetInfo", info)
            } catch (error) {
                console.error("Error en la consulta a la API" , error)
            }
            
        }
        fetchData();
    }, [])


  return (
    <div>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={ info?.picture} class="d-flex w-100" alt="imagen"/>
    </div>
    <div className="carousel-item">
      <img src={info?.picture} className="d-flex w-100" alt="imagen2"/>
    </div>
    <div className="carousel-item">
      <img src={info?.picture} className="d-flex w-100" alt="imagen3"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden"></span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden"></span>
  </button>
</div>
    </div>
  )
}
