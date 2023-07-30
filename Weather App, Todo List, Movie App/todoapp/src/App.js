import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Form from "./components/Form";
import List from "./components/List";
import { useEffect, useState } from "react";
import { api } from "./api/apiResource";
import uuid from "react-uuid";

function App() {
    const [tasks, setTasks] = useState([]);

    const fetchData = async() => {

        const res = await api.get('/todolist');
        console.log(res.data);
        setTasks(res.data);
        console.log(tasks);
    }
    useEffect(() => {
        fetchData();
    }, [tasks]);

    const getUserTask = async(usertask, setUserTask) => {
        console.log(usertask);
        setUserTask('');

        const data = {
            "id": uuid(),
            "title": usertask,
            "conpleted": false
        }
        const res = await api.post('/todolist', data);

        console.log(res.data);
        fetchData();

    }

    const deleteTasks = async(task_id) => {
        console.log(task_id);
        const res = await api.delete(`/todolist/${task_id}`);

        console.log(res.data);
        fetchData();
    }

    const updatetask = async(task_id, completed) => {
        console.log(task_id, completed);
        const res = await api.patch(`/todolist/${task_id}`, { completed })
        console.log(res);
        fetchData();
    }

    return ( <
        div className = "H-100" >
        <
        Form getUserTask = { getUserTask }
        / > <
        List tasks = {
            tasks
        }
        deleteTasks = { deleteTasks }
        updatetask = { updatetask }
        / > < /
        div >
    );
}

export default App;