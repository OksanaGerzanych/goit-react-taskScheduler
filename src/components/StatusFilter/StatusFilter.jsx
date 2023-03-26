import { Button } from "components/Button/Button"
import { Wrapper } from "./StatusFilter.styled"
import { useSelector } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { getStatusFilter } from "redux/selectors";


export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);
  console.log(filter)
  return (
         <Wrapper>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </Wrapper>
    )
}

