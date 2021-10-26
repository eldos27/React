import React from "react";
import { Button, Table } from "react-bootstrap";

const View = (props) => {
  return (
    <div className="container">
      {props.todos.length ? (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {props.todos.map((item, index) => (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.title}</td>
                <td>
                  <Button
                    onClick={() => {
                      props.deleteTask(item.id);
                    }}
                  >
                    Del
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <h2>No Task</h2>
      )}
    </div>
  );
};

export default View;
