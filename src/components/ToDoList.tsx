import React, { useState } from 'react';
import ToDoItemForm from './ToDoItemForm'

export interface ItemProps {
  name: string;
  description: string;
  completed: boolean
}

export interface ToDoListProps {
  items: ItemProps[]
}

const ToDoList = () => {
  const [toDoList, updateToDoList] = useState<ToDoListProps>({items: []});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    let element = toDoList.items.filter((item) => { return item.name === event.target.id })[0];
    element.completed = true;
    updateToDoList({items:toDoList.items});
  };

  const handleUpdateToDoList = (item: ItemProps) => {
    let newItems = toDoList.items;
    newItems.push(item);
    updateToDoList({items:newItems});
  };

  const renderToDoList = () => {
    return (toDoList.items.map((item) => {
      return(
        <div key={item.name} className={item.completed ? 'strike-text': '' }>
          <input
          type="checkbox"
          id={item.name}
          defaultChecked={item.completed}
          aria-checked={item.completed}
          onChange={handleChange}
          disabled={item.completed}
        />
        <span>{item.name}</span>
        {' => '}
        <span>{item.description}</span>
          <br/>
        </div>
      );
    }));
  }

  return(
    <>
      <ToDoItemForm updateToDoList={handleUpdateToDoList}/>
      {renderToDoList()}
    </>
  )
}

export default ToDoList;