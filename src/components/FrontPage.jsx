import React, { createContext, useState } from "react";
import { Button, Checkbox, Form, Input, Select, Space } from "antd";

const FrontPage = ({ setShowcomponent, setisreload }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    const data = values;
    data.id = Date.now();

    const data_serialized = JSON.stringify(data);

    localStorage.setItem(data.id, data_serialized);

    setShowcomponent(false);
    setisreload((prev) => !prev);

    // console.log(`this is ${data.id} is ${localStorage.getItem(data.id)}!`)
  };

  const layout = {
    labelCol: {
      span: 3,
    },
    wrapperCol: {
      span: 21,
    },
  };

  // const handleSubmit = () => {

  //   // Handle form submission logic here

  //   // Call the function to close the FirstPage component

  //   onClose();

  // };

  return (
    // <div className="w-[100%] h-fit flex flex-col items-center my-8 bg-gray-100 rounded-lg">
    <div className="w-[100%] h-fit flex flex-col items-center my-8 rounded-lg">
      <Form
        name="basic"
        onFinish={onFinish}
        {...layout}
        className="w-[60%] mx-auto"
      >
        <Form.Item
          label="Category"
          name="Category"
          rules={[
            {
              required: true,
              message: "Please select Category!",
            },
          ]}
        >
          <Select
            placeholder="Select Category"
            options={[
              {
                label: "CSPM",
                value: "CSPM",
              },
              {
                label: "CWPP",
                value: "CWPP",
              },
              {
                label: "Image",
                value: "Image",
              },
              {
                label: "Ticket",
                value: "Ticket",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          label="Widgetname"
          name="Widgetname"
          rules={[
            {
              required: true,
              message: "Please add Widget Name!",
            },
          ]}
        >
          <Input placeholder="Add Name" />
        </Form.Item>

        <Form.Item
          name="WidgetText"
          label="Widget Text"
          rules={[
            {
              required: true,
              message: "Please add Widget Text!",
            },
          ]}
        >
          <Input.TextArea placeholder="Add text" />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 5,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FrontPage;
