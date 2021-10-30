import { setFilter } from "../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import styles from "./FilterInput.module.css";

const FilterInput = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const setFilterInput = ({ target }) => {
    const input = target.value;
    dispatch(setFilter(input));
  };
  return (
    <input value={filter} onChange={setFilterInput} className={styles.input} />
  );
};
export default FilterInput;
