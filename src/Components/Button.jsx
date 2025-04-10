import React from "react";
import PropTypes from "prop-types";

function Button({ label, onClick, color }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="px-4 py-2 rounded text-white hover:opacity-90"
    >
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: "blue",
};

export default Button;

// Example usage:
// <Button label="Click Me" onClick={() => alert('Clicked!')} color="red" />
