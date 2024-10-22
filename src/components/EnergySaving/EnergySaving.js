import * as React from "react";
import './EnergySaving.css';
import thunderIllustration from "./assets/thunderIllustration.png";
function EnergySaving() {
   return (
     <div className="energy-saving-wrapper">
       <div className="energy-saving">
         <div className="flex-container-2">
           <span className="energy-saving-1">Energy Saving</span>
           <span className="num-35">+35%</span>
           <span className="num-235-k-wh">23.5 kWh</span>
         </div>
         <img className="thunder-illustration" src={thunderIllustration} alt="energy saver" />
       </div>
     </div>
   );
}

export default EnergySaving;
