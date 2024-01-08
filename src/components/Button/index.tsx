import { DraggableProps, motion } from "framer-motion";

type Props = {
  children?: React.ReactElement | React.ReactElement[] | string;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  dragProps?: DraggableProps;
  disabled?: boolean;
};

function Button({ children, onClick, dragProps, disabled }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      disabled={disabled}
      {...dragProps}
    >
      {children}
    </motion.button>
  );
}

export default Button;
