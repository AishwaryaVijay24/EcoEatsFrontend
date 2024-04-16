import React,{useState} from 'react';
import { useNavigate } from 'react-router';
const Done = () => {
const navigate= useNavigate();
const handleDoneButton =()=>{
    navigate('/dashboard');
}
  return (
    <div className="flex">
      <div className="flex-1 flex items-center justify-end">
        <div className="bg-antiquewhite p-2 rounded">
          <button onClick={handleDoneButton}
            className="bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
          >
            Done Adding Items
          </button>

        </div>
      </div>
    </div>
  );
};

export default Done;
