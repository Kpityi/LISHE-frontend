import classNames from 'classnames';
import './index.scss';



const Button = ({ label, className, disabled, type, ...props }) => {
  const mode = classNames(className, 'button', { '-disabled': disabled });

  return (
    <button type={type} className={mode} disabled={disabled} {...props}>
      {label}
    </button>
  );
};

export default Button;
