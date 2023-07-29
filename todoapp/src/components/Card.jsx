import React from "react";

const Card = ({ tasks, deleteTasks, updatetask }) => {



  const deleteTaskManage = (task_id)=>{

      deleteTasks(task_id);      

  }

  const ChangeEvent = (task_id, completed)=>{

      updatetask(task_id, completed);
  }


  return (
    <div className=" ">
      {tasks.map((task) => {
        return (
          <div
            key={task.id}
            className={task.completed === true ? 'd-flex text-decoration-line-through justify-content-between col-6 offset-3  row border shadow-sm rounded mb-3 bg-success text-white' : 'd-flex justify-content-between col-6 offset-3  row border shadow-sm rounded mb-3'}
          >
            <div className="col-1 p-3">
              <input type="checkbox" name="" id="" onClick={()=>{ChangeEvent(task.id, !task.completed)}} />
            </div>
            <p className="col-8 mt-2" key={task.id}>
              {task.title}
            </p>
            <button onClick={()=>{deleteTaskManage(task.id)} } className="btn  col-2" type="button">
              <i className={task.completed === true ? 'fa-solid fa-trash-can text-white' : 'fa-solid fa-trash-can text-danger'}></i>
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
