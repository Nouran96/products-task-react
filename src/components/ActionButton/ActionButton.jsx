import Button from "react-bootstrap/Button";

const ActionButton = ({
  label,
  children,
  variant,
  className,
  onClick,
  ...rest
}) => {
  return (
    <Button
      variant={variant}
      size="sm"
      onClick={onClick}
      className={className}
      {...rest}
    >
      {label || children}
    </Button>
  );
};

export default ActionButton;
