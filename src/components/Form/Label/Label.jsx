import PropTypes from "prop-types";

import inputOptions from "./inputOptions";
import Input from "../Input";

import styles from "./Label.module.css";

const Label = ({ name, value, label, callback }) => {
  return (
    <label className={styles.label} htmlFor="">
      {label}
      <Input
        options={inputOptions[name]}
        className={styles.input}
        content={value}
        callback={callback}
      />
    </label>
  );
};
Label.defaultProps = {
  callback: () => {},
};
Label.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  callback: PropTypes.func,
};
export default Label;
