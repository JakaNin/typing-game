import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "base";
type ButtonProps = ComponentProps<"div"> & {
  variant?: ButtonVariant;
};

const styles = {
  button: "h-px w-full bg-ap-transparentBlack-300",
  variant: {
    base: "",
  },
};

const SeparateLine = ({
  variant = "base",
  className,
  ...props
}: ButtonProps) => {
  return (
    <div
      className={twMerge(styles.button, styles.variant[variant], className)}
      {...props}
    />
  );
};

export default SeparateLine;
