import React from 'react';
import { Form } from 'formik';
import { ItemProps } from './ToDoList'; 

interface ToDoItemFormProps {
  values: ItemProps;
  handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void;
}

const ToDoItemFormStructure = ( props: ToDoItemFormProps) => {
  const { values, handleChange } = props;
 
  return(
    <Form>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={values.name}
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <input
        id="description"
        name="description"
        type="textarea"
        value={values.description}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </Form>
  );
}

export default ToDoItemFormStructure;