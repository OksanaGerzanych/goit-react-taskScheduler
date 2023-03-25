import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import { Title, Section, Wrapper } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Wrapper>
      <Section>
        <Title>Tasks</Title>
        <TaskCounter />
      </Section>
      <Section>
        <Title>Filter by status</Title>
        <StatusFilter />
      </Section>
    </Wrapper>
  );
};
