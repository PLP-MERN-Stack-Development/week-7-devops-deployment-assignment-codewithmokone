// src/components/PostList.js
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';


const API = import.meta.env.VITE_API_URL

const TaskList = ({ list, fetchTasks }) => {

  // Function to delete a task
  const handleDelete = async (task) => {
    try {
      const taskToDelete = await axios.delete(`${API}/task/${task}`);

      const deletedTask = taskToDelete.data;
      console.log(deletedTask);
      fetchTasks();
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  }

  return (
    <div>
      {list.length > 0 ? (
        list.map((task) => (
          <div className="w-96 h-12 flex items-center justify-between px-4 bg-gray-600 shadow rounded mt-2" key={task._id}>
            <h3 className="text-white">{task.title}</h3>
            <div>
              <button className="text-red-600" onClick={() => handleDelete(task._id)}>Delete</button>
            </div>
          </div>
        ))
      ) : (
        <p className='text-white mt-4'>No task added.</p>
      )}
    </div>
  );
};

export default TaskList;
