import React, { useState } from 'react'
import { addTask } from '../JS/actions';
import { useDispatch} from 'react-redux';
import { Form, Button } from 'react-bootstrap';

const AddTask = () => {
    const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault()
    if (text) {
       
      dispatch(addTask({ id: Math.random(), text, isDone: false }))
    }
    else {
      alert ("can not add an emty task")}
    }
  
  return (
    <div>
        <Form onSubmit ={handleAdd} >
          <Form.Control placeholder="Enter Task Title" onChange ={(e) => setText(e.target.value)} value={text}/>
          <Button variant="primary" type="submit" onClick={handleAdd}>
            ADD
          </Button>
        </Form>
    </div>
  )
}

export default AddTask

