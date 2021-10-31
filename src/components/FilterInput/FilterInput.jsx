import actions from "../../redux/contacts/contacts-actions";
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from "../../redux/contacts/contacts-selectors";
import styles from "./FilterInput.module.css";

const FilterInput = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const setFilterInput = ({ target }) => {
    const input = target.value;
    dispatch(actions.setFilter(input));
  };
  return (
    <input value={filter} onChange={setFilterInput} className={styles.input} />
  );
};
export default FilterInput;
