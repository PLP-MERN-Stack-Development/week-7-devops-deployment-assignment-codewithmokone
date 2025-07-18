import React from 'react';
import axios from "axios";
import { useState } from "react"
import TaskList from "../components/TaskList";
import { useEffect } from 'react';

const API = import.meta.env.VITE_API_URL

export default function Home() {
    const [title, setTitle] = useState('');
    const [taskList, setTaskList] = useState([]);

    // Function to add a task
    const handleAddTask = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${API}/task`, {
                title
            });
            const newTask = response.data;
            console.log("Added task: ", newTask);
            fetchTasks();
        } catch (err) {
            console.log(err.response?.data || err.message);
        }
        setTitle('');
    }

    // Function for fetching task list
    const fetchTasks = async () => {
        try {
            const response = await axios.get(`${API}/task`);
            const taskData = response.data;
            setTaskList(taskData);
        } catch (err) {
            console.log(err.response?.data || err.message);
        }
    }

    // Fetching task list on mount
    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div className="w-screen h-screen bg-gray-800 flex flex-col items-center justify-center gap-6">
            <h1 className="font-bold text-white text-2xl">TODO: Task Manager</h1>
            {/* Add task input */}
            <div className="w-96 h-16 flex items-center bg-gray-600 justify-center gap-2 shadow rounded">
                <input
                    className="border px-4 rounded bg-white"
                    type="text"
                    value={title}
                    placeholder="Add task"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button className="px-4 bg-blue-700 rounded text-white font-medium" onClick={handleAddTask} >ADD</button>
            </div>
            <div className="h-96">
                <h2 className="font-medium text-center text-white text-2xl">Task List</h2>
                {/* Card for task list */}
                <TaskList list={taskList} fetchTasks={fetchTasks}/>
            </div>
        </div>
    )
}