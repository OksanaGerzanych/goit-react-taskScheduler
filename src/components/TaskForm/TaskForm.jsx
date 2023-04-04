import { Button } from "components/Button/Button";
import { Input, Form } from "./TaskForm.styled";
import { useDispatch } from "react-redux";  
import { addTask } from "redux/operations";

export const TaskForm = () => {  
  const dispatch = useDispatch(); // Отримуємо посилання на функцію відправки екшенів
  
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(event.target.elements.text.value));
    form.reset();
    
   // Викликаємо генератор екшену та передаємо текст завдання для поля payload
    // Відправляємо результат – екшен створення завдання
   
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        name="text"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </Form>
  );
};


