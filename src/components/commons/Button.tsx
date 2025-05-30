import { type ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type ButtonVariant = "base" | "primary" | "text";
type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
};

const styles = {
  button: "rounded-full disabled:cursor-not-allowed p-3 px-4",
  variant: {
    base: "",
    primary: `
      bg-gradient-to-r from-ap-orange-700 to-ap-orange-500 text-white font-semibold
      transition duration-300
      hover:from-ap-orange-800 hover:to-ap-orange-600
      disabled:from-ap-orange-500 disabled:to-ap-orange-400
    `,
    text: `
        hover:bg-ap-transparentBlack-100`,
  },
};

const Button = ({
  type = "button",
  variant = "base",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={twMerge(styles.button, styles.variant[variant], className)}
      {...props}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
