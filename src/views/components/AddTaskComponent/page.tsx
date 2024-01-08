"use client"

import { useCallback, useState } from "react";
import { Input, Icon } from 'semantic-ui-react';

import './AddTaskComponent.scss';

interface InputPlusProps {
  onAdd: (title:string) => void;
}

const AddTaskComponent: React.FC<InputPlusProps> = ({onAdd}) => {
  const [inputValue, setInputValue] = useState('');
  const addTask = useCallback(() => {
    onAdd(inputValue);
    setInputValue('');
  }, [inputValue])

  return(
    <div className="add-task__component">
      <Input 
        placeholder='Add your task ...' 
        size='big'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <div 
        className="add-task-btn" 
        onClick={addTask}
      >
        <Icon name='plus'/>
        Add
      </div>
    </div>
  )
}

export default AddTaskComponent;