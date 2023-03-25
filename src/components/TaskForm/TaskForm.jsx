import { Button } from "components/Button/Button";
import { Input, Form } from "./TaskForm.styled";

export const TaskForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    form.reset();
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
