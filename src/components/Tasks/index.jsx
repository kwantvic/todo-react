import React from "react";
import axios from "axios";

import editSvg from "../../assets/img/edit.svg";

import "./Tasks.scss";

import AddTaskForm from "./AddTaskForm";
import Task from "./Task";

function Tasks({ list, onEditTitle, onAddTask, withoutEmpty }) {
  const editTitle = () => {
    const newTitile = window.prompt("Название списка", list.name);
    if (newTitile) {
      onEditTitle(list.id, newTitile);
      axios
        .patch("http://localhost:3001/lists/" + list.id, {
          name: newTitile,
        })
        .catch(() => {
          alert("Не удалось обновить название списка!");
        });
    }
  };

  return (
    <div className="tasks">
      <h2 style={{ color: list.color.hex }} className="tasks__title">
        {list.name}
        <img onClick={editTitle} src={editSvg} alt="Edit icon" />
      </h2>

      <div className="tasks__items">
        {!withoutEmpty && !list.tasks.length && <h2>Задачи отсутствуют</h2>}
        {list.tasks.map(task => (
          <Task key={task.id} {...task}/>
        ))}
        <AddTaskForm list={list} onAddTask={onAddTask} />
      </div>
    </div>
  );
}

export default Tasks;
