// Button.jsx
import classnames from "classnames";

function Button({ bgColor, textColor, children }) {
  return (
    <button
      className={classnames(
        `bg-${bgColor} text-${textColor} font-bold py-2 px-4 rounded`
      )}
    >
      {children}
    </button>
  );
}

export default Button;
