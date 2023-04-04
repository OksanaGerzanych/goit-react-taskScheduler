import { MdClose } from 'react-icons/md';
import { Wrapper, Checkbox, Button, Text } from './Task.styled';
import { useDispatch } from 'react-redux'; // Імпортуємо хук
import { deleteTask, toggleCompleted } from 'redux/operations'; // Імпортуємо генератор екшену

export const Task = ({ task }) => {
  const dispatch = useDispatch(); // Отримуємо посилання на функцію відправки екшенів

  const handleDelete = () => dispatch(deleteTask(task.id));
  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен видалення завдання

  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        onChange={handleToggle}
        checked={task.completed}
      />
      <Text>{task.text}</Text>
      <Button type="button" onClick={handleDelete}>
        <MdClose size={24} />
      </Button>
    </Wrapper>
  );
};
