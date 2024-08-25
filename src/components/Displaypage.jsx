import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "antd";
import { MdDelete } from "react-icons/md";

const Displaypage = ({ isreload }) => {
  const [Data_array, setData_array] = useState([]);
  const Categoryy = ["all", "CSPM", "CWPP", "Image", "Ticket"];

  console.log("data:", Data_array);

  useEffect(() => {
    const allkeys = Object.keys(localStorage);

    const temparr = allkeys.map((key) => {
      const storeitem = localStorage.getItem(key);

      try {
        return JSON.parse(storeitem);
      } catch (e) {
        return null;
      }
    });

    const validitems = temparr.filter((item) => item !== null);
    setData_array(validitems);
  }, [isreload]);

  const updateFilterValue = (event) => {
    console.log("event", event);

    const allkeys = Object.keys(localStorage);

    const temparr = allkeys.map((key) => {
      const storeitem = localStorage.getItem(key);

      try {
        return JSON.parse(storeitem);
      } catch (e) {
        return null;
      }
    });

    const temparray = temparr.filter((item) => item["Category"] === event);
    if (event == "all") {
      setData_array(temparr);
    } else {
      setData_array(temparray);
    }
  };

  const onDelete = (id) => {
    const newArray = Data_array.filter((i) => i?.id !== id);

    localStorage.removeItem(id, Data_array);

    setData_array(newArray);

    console.log(Data_array);
  };

  return (
    <div>
      <div className="flex justify-center space-x-2 mb-6">
        {Categoryy.map((currele, index) => {
          return (
            <button
              key={index}
              type="primary"
              name="Category"
              className="bg-blue-600 text-white py-1 px-4 rounded-full hover:bg-blue-700 transition duration-300"
              // value={Data_array}
              onClick={() => updateFilterValue(currele)}
            >
              {" "}
              {currele}
            </button>
          );
        })}
      </div>
      <div className="flex flex-wrap w-[80%] mx-auto">
        {Data_array.map((item) => {
          return (
            <div className="flex w-fit m-4">
              {/* <Card title={item?.Widgetname} styles={{title:  {backgroundColor:"lightblue", padding:"0px" }}} className="w-[300px] h-[200px]  " bordered={true}>
                    {item?.WidgetText}
                  </Card> */}
              <div className="flex flex-col w-[300px] h-[200px] border-2 shadow-lg rounded-md">
                <div className="bg-blue-100 text-blue-700 p-2 rounded-md flex justify-between w-full">
                  <span className="text-lg font-medium">
                    {item?.Widgetname}
                  </span>
                  <span className="text-3xl h-fit  cursor-pointer ">
                    <MdDelete
                      className="text-red-400"
                      onClick={() => onDelete(item?.id)}
                    />
                  </span>
                </div>

                <div className=" flex p-3">{item?.WidgetText}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Displaypage;
