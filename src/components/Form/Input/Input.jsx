import PropTypes from "prop-types";

const Input = ({ content, callback, options, className }) => {
  return (
    <input
      {...options}
      value={content}
      className={className}
      onChange={callback}
      required
    />
  );
};
Input.defaultProps = {
  callback: () => {},
  options: {},
};
Input.propTypes = {
  content: PropTypes.string.isRequired,
  callback: PropTypes.func,
  options: PropTypes.object,
  className: PropTypes.string.isRequired,
};
export default Input;
