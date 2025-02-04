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
      bg-ap-orange-700 text-white font-semibold
      transition duration-300 hover:bg-ap-orange-600
    `,
    text: `
        hover:bg-[#020D1E0D]`,
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
