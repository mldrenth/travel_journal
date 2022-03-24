import React from "react";
import CardItem from "./CardItem";
import { visits } from "../data";

const CardList = () => {

    const visitItems = visits.map((visit, index) => {
       return <CardItem visit={visit} key={index}/>
    })

    return (
        <div>
            {visitItems}
        </div>
    )
    
}

export default CardList;