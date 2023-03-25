import { MdClose } from "react-icons/md";
import { Wrapper, Checkbox, Button, Text } from "./Task.styled";


export const Task = ({ task }) => {
  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        checked={task.completed}
      />
      <Text>{task.text}</Text>
      <Button>
        <MdClose size={24} />
      </Button>
    </Wrapper>
  );
};
