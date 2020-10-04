import React, { useState } from 'react';
import List from './components/List/index';
import AddList from './components/AddList';

import DB from '../src/assets/db.json'

import listSvg from './assets/img/list.svg';
import Tasks from './components/Tasks';

function App() {
  const [lists, setLists] = useState(
    DB.lists.map(item => {
      item.color = DB.colors.filter(color => color.id === item.colorId)[0].name;
      return item;
    })
  );

  const onAddList = (obj) => {
    const newList = [...lists, obj];
    setLists(newList);
  };

  return <div className="todo">
    <div className="todo__sidebar">
      <List items={[
        {
          icon: <img src={listSvg} alt="List icon" />,
          name: "Все задачи",
        }
      ]} />
      <List
        items={lists}
        onRemove={(item) => {
          console.log(item)
        }}
        isRemovable
      />
      <AddList onAdd={onAddList} colors={DB.colors} />
    </div>
    <div className="todo__tasks">
      <Tasks />
    </div>
  </div>;
}

export default App;
