import React, { useEffect, useState } from 'react'
import './OurTeam.css'
const TrainerService=require('../../../services/TrainerService');

const OurTeam = () => {
    const [trainers, setTrainers]=useState(null)


    //Fetching Trainers from backend
    const getTrainers=async()=>{
        const res=await TrainerService.getAllTrainers();
        if(!res.error && res.data.length > 0){
            setTrainers(res.data);
        }
    }
    useEffect(()=>{
       getTrainers();
    },[])

    // useEffect(()=>{
    //     console.log(trainers);
    // },[trainers])
  return (
    <div>
        <div class="ourteam-firstline">
            OUR TEAM
        </div>
        <div class="ourteam-secondline">
            TRAIN WITH OUR EXPERTS
        </div> 
        <div>
       
        </div>

    <div class="productsSection">
        <div class="row row-cols-2 row-cols-md-4 g-3"> 
        {
             
            trainers !== null && trainers.length>0 && trainers.map((item)=>(
                 <div class="">
                     <div class="card h-auto bg-dark">
                         <div class="decs-container">
                             <img src={item.image} class="card-img-top" alt="p1" id="p1"/>
                         </div>
                         <div class="card-foot" >
                             <h4 class="teamMateName">{item.name}</h4>
                             <p class="teamJOb">Gym Trainer</p>
                         </div>
                     </div>
                 </div>
            ))
         
         }
        </div>
    </div>
    </div>
  )
}

export default OurTeam