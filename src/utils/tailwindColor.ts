import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

export const getTailwindColor = (colorPath: string) => {
  // NOTE: 'ap-black-300', 'ap-black-DEFAULT' などの形式で指定
  const colors = fullConfig.theme.colors;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return colorPath.split("-").reduce((acc: any, key) => acc[key], colors);
};
