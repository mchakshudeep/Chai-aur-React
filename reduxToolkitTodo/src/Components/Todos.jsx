import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/Todo/todoSlice";
import { useState } from "react";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [updatedText,setUpdatedText]=useState("")
  const [editingTodoId,setEditingTodoId]= useState(null)

  const handleEdit = (todo) => {
    setEditingTodoId(todo.id);
    setUpdatedText(todo.text); // Prepopulate the input with the current text of the todo
  };

  const saveEdit = (id) => {
    if (updatedText.trim() === "") {
      alert("Todo text cannot be empty");
      return;
    }
    dispatch(updateTodo({ id, text: updatedText }));
    setEditingTodoId(null); // Reset editing state
    setUpdatedText(""); // Clear updatedText
  };


  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Todo List</h1>
      {todos.length > 0 ? (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md"
            >
            <div className="space-x-2">
              {editingTodoId === todo.id ? (
                <input
                  type="text"
                  value={updatedText}
                  onChange={(e) => setUpdatedText(e.target.value)}
                  className="border border-gray-300 rounded p-2 w-2/3"
                />
              ) : (
                <span className="text-gray-700">{todo.text}</span>
              )}
              </div>
              <div className="space-x-2">
                {editingTodoId === todo.id ? (
                  <button
                    onClick={() => saveEdit(todo.id)}
                    className="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded hover:bg-green-600"
                  >
                    📁
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(todo)}
                    className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600"
                  >
                    ✏️
                  </button>
                )}
                <button
                  onClick={() => dispatch(removeTodo(todo.id))}
                  className="px-3 py-1 text-sm font-medium text-white bg-red-300 rounded hover:bg-red-400"
                >
                  ❌ 
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-center text-gray-500">No todos available.</p>
      )}
    </div>
  );
}

export default Todos;
