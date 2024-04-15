import React,{useState} from 'react';
import Sure from './Sure';
const BusinessLogout = () => {
  const [showLogout, setShowLogout]=useState(false);


  

  return (
    <div className="flex">
      <div className="flex-1 flex items-center justify-end">
        <div className="bg-antiquewhite p-2 rounded">
          <button
             onClick={() => setShowLogout(true)}
            className="bg-red-700 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
          {showLogout && <Sure onClose={()=> setShowLogout(false)}/>}

        </div>
      </div>
    </div>
  );
};

export default BusinessLogout;

