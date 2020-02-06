import React from 'react';
import { Formik, FormikProps } from 'formik';
import ToDoItemFormStructure from './ToDoItemFormStructure';
import { ItemProps } from './ToDoList'; 


interface ToDoItemFormProps {
  updateToDoList: Function;
}
const ToDoItemForm = (props: ToDoItemFormProps) => {
  const { updateToDoList } = props;
  const handleSubmit = (values: ItemProps)  => {
    updateToDoList({name: values.name, description: values.description, completed: false});
  }

  const renderToDoItemForm = (injectedProps: FormikProps<ItemProps>) => {
    return( <ToDoItemFormStructure {...injectedProps} />);
  }
  return(
    <Formik
      initialValues={{ name: '', description:'', completed: false}}
      onSubmit={handleSubmit}
      render={renderToDoItemForm}
    />
  );
}

export default ToDoItemForm;