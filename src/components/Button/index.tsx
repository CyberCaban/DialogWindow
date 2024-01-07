import { DraggableProps, motion } from "framer-motion";

type Props = {
  children?: React.ReactElement | React.ReactElement[] | string;
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void;
  dragProps?: DraggableProps;
};

function Button({ children, onClick, dragProps }: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      {...dragProps}
    >
      {children}
    </motion.button>
  );
}

export default Button;
