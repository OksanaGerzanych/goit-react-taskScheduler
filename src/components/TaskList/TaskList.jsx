import { useSelector } from "react-redux";
import { Task } from "components/Task/Task";
import { List, Item } from "./TaskList.styled";
import { selectVisibleTasks  } from "redux/selectors";


export const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);
  return (
    <List>
      {tasks.map(task => (
        <Item key={task.id}>
          <Task task={task} />
        </Item>
      ))}
    </List>
  );
};

