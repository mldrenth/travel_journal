import React from "react";
import {IoLocationSharp} from 'react-icons/io5'

const CardItem = ({visit}) => {
    
    return (
        <>
        <div className="card-div">
            <img src={visit.imageUrl} alt="sight"/>
            <div className="card-info">
                <div className="country">
                    <IoLocationSharp className="location-icon"/>
                    <p className="location">{visit.location.toUpperCase()}</p>
                    <a href={visit.googleMapsUrl}>View on Google Maps</a>
                </div>
                <h2 className="title">{visit.title}</h2>
                <h4 className="date">{visit.startDate} - {visit.endDate}</h4>
                <p className="description">{visit.description}</p>

            </div>
            

        </div>
        <hr/>
        </>
    )
}

export default CardItem