import React, { useRef } from "react";
import { VscSearch } from "react-icons/vsc";

const Form = ({fetchWeatherData}) => {
  const name = useRef('');

  

  return (
    <div className="d-flex justify-content-center my-3">
      <input type="text" className="font-control" ref={name} />
      <button type="button " onClick={()=>{fetchWeatherData(name.current.value)}} className="bg-dark btn text-white">
        <VscSearch />
      </button>
    </div>
  );
};

export default Form;
