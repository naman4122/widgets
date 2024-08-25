import React, { useState } from "react";
import FrontPage from "./FrontPage";
import Displaypage from "./Displaypage";
import { Button } from "antd";

const HomePage = () => {
  const [Showcomponent, setShowcomponent] = useState(false);
  const [isreload, setisreload] = useState(false);

  const handleclick = () => {
    setShowcomponent(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-50 p-6">
      <span>
        <h3 className="text-4xl font-bold text-blue-900 mb-6">
          Dyanamic Widgets
        </h3>
      </span>
      <div>
        <button
          type="primary"
          onClick={handleclick}
          className=" mx-1 bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 mb-4"
        >
          Add widgets
        </button>

        {Showcomponent && (
          <FrontPage
            setShowcomponent={setShowcomponent}
            setisreload={setisreload}
          />
        )}

        <Displaypage isreload={isreload} />
      </div>
    </div>
  );
};

export default HomePage;
