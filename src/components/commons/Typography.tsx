import { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const STYLES = {
  TYPOGRAPHY: "text-base text-ap-black",
  VARIANT: {
    base: "",
    title1: "text-xl font-bold text-ap-black-300",
    subtitle1: "text-sm text-ap-gray-600 fond-bold",
    caption: "text-sm text-ap-gray-400",
  },
} as const;

type Element = "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props = Readonly<
  {
    variant?: keyof typeof STYLES.VARIANT;
    element?: Element;
  } & ComponentPropsWithoutRef<Element>
>;

const Typography = ({
  element = "p",
  variant = "base",
  className,
  ...props
}: Props) => {
  const Component = element;
  return (
    <Component
      className={twMerge(STYLES.TYPOGRAPHY, STYLES.VARIANT[variant], className)}
      {...props}
    />
  );
};

export default Typography;
