import setFilter from "../../redux/contacts/contacts-actions";
import { useSelector, useDispatch } from "react-redux";
import styles from "./FilterInput.module.css";

const FilterInput = () => {
  const filter = useSelector((state) => state.contacts.filter);
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
