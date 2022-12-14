import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import myImage from "../../images/myImage.png";

const MyInfo = () => {
  return (
    <div>

      {/* Name and Address */}
      <div className="flex justify-center items-center">
        <div className="w-1/3">
          <img src={myImage} alt="" className=" rounded-full" />
        </div>

        <div className="">
          <h3 className="text-xl font-bold">Anowar Hossain</h3>

          <p className="text-gray-400">
            <FontAwesomeIcon icon={faLocationDot} /> Cumilla, Bangladesh
          </p>
        </div>
      </div>

      {/* Personal Information */}
  <div className="mt-8  bg-gray-200 shadow-md  p-5 border rounded-lg mx-auto w-[90%]">
   <div className="flex justify-between">
   <h5> <span className="text-2xl font-bold">62</span> Kg</h5>
    <h5><span className="text-2xl font-bold">6</span> feet</h5>
    <h5><span className="text-2xl font-bold">23</span> Years</h5>
   </div>

    <div className="flex justify-between mt-2">
      <p className="pr-4">Weight</p>
      <p className="pr-4">Height</p>
      <p className="pr-4">Age</p>
    </div>

    </div>
    


      </div>

  
  );
};

export default MyInfo;
