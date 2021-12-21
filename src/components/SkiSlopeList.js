import skiSlopeData from "../skiSlopeData.js";
import SkiSlope from "./SkiSlope";
import './Cards.css';




function SkiSlopeList () {




    return(
      <>
        <section>
          <h1>Check out these Coldest Destinations!</h1>
        </section>
          
        <div className='cards'>
          {
          skiSlopeData.map( object => (
              <SkiSlope className="card-body"
                key = {object.id}
                city= {object.city}
                name = {object.partia}
                lat = {object.lat}
                lon = {object.lon}
                location = {object.location}
                imgIarna = {object.imgIarna }
                imgVara = {object.imgVara}
                length = {object.lungime}
                altitudinePlecare = {object.altitudinePlecare}
                altitudineSosire = {object.altitudineSosire}
                transport = {object.transport}
                nocturna = {object.nocturna}
                
              />
          ))}
        </div>       
      </>
    )
};
export default SkiSlopeList;