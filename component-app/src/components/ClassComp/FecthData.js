import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";

export default class FecthData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/todos").then((Response) =>
      Response.json().then((data) =>
        this.setState({ todos: data.slice(0, 20) })
      )
    );
  }

  render() {
    return (
      <table className="table" style={{ border: "1px solid" }}>
        <tbody>
          {this.state.todos.map((todo, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid" }}>{todo.id}</td>
              <td style={{ border: "1px solid" }}>{todo.title}</td>
              <td style={{ border: "1px solid" }}>
                {todo.completed ? "v" : "x"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
