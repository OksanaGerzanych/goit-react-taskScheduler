import { Button } from "components/Button/Button"
import { Wrapper } from "./StatusFilter.styled"
import { useSelector, useDispatch } from "react-redux";
import { statusFilters } from "../../redux/constants";
import { selectStatusFilter } from "redux/selectors";
import { setStatusFilter } from "../../redux/filtersSlice";


export const StatusFilter = () => {
  const filter = useSelector(selectStatusFilter);
 
  const dispatch = useDispatch(); // Отримуємо посилання на функцію відправки екшенів

  const handleFilterChange = (filter) => dispatch(setStatusFilter(filter));
   // Викликаємо генератор екшену та передаємо значення фільтра
  // Відправляємо результат - екшен зміни фільтра

  return (
         <Wrapper>
      <Button selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}>
        All</Button>
      <Button selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}>
        Active</Button>
      <Button selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.completed)}>
        Completed</Button>
    </Wrapper>
    )
}


