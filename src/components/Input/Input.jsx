import React, { useState } from "react";
import { Form } from "react-bootstrap";

const Input = (props) => {
  const [value, setValue] = useState("");
  return (
    <div style={{ width: 500, margin: "10px auto 10px auto" }}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          props.addTask(value);
          setValue("");
        }}
      >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Enter Save"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Input;
