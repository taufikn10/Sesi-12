import React, { useEffect, useState } from "react";

export default function FunctComp() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((Response) => Response.json())
      .then((data) => setTodos(data.slice(0, 20)));
  });

  return (
    <div>
      <table className="table" style={{ border: "1px solid" }}>
        <tbody>
          {todos.map((todo, index) => (
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
    </div>
  );
}
