import React, { useState } from 'react';
import List from './components/List/index';
import AddButtonList from './components/AddButtonList';

import listSvg from './assets/img/list.svg';

function App() {
  return <div className="todo">
    <div className="todo__sidebar">
      <List items={[
        {
          icon: <img src={listSvg} alt="List icon" />,
          name: "Все задачи",
        }
      ]} />
      <List items={[
        {
          color: 'green',
          name: "Покупки"
        },
        {
          color: 'blue',
          name: "Фронтенд",
          active: true
        },
        {
          color: 'pink',
          name: "Фильмы и сериалы"
        },
      ]}
        isRemovable
      />
      <AddButtonList />
    </div>
    <div className="todo__tasks">
    </div>
  </div>;
}

export default App;
