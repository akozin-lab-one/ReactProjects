import React, { useState } from "react";

const Form = ({getUserTask}) => {
  const [usertask, setUserTask] = useState('');



  return (
    <div className="mt-4">
      <div className="container">
        <form
          action=""
          className="col-12 col-sm-6 col-md-4 offset-sm-3 offset-md-4"
        >
          <div className="form-group d-flex ">
            <input value={usertask} type="text" className="form-control col-md-1" onChange={(e)=> setUserTask(e.target.value)} />
            <button type="button" className="btn btn-primary ms-1 col-md-3" onClick={()=>getUserTask(usertask, setUserTask)}>
              <i className="fa-solid fa-plus"></i> Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
