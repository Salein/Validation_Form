import React, { Fragment } from "react";
import { Button, Form, Input } from "antd";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Form
        className="app"
        name="basic"
        labelCol={{ span: 12 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
      >
        <h1>Регистрация</h1>
        <Form.Item
          className="app__input"
          label="Email"
          name="email"
          rules={[{ required: true, message: "Поле не должно быть пустое!" }]}
        >
          <Input
            name="email"
            type="text"
            placeholder="Enter your email..."
          />
        </Form.Item>

        <Form.Item
          className="app__input"
          label="Password"
          name="password"
          rules={[{ required: true, message: "Поле не должно быть пустое!" }]}
        >
          <Input.Password
            name="password"
            type="password"
            placeholder="Enter your password..."
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Registration
          </Button>
        </Form.Item>
      </Form>
    </Fragment>
  );
};

export default App;
