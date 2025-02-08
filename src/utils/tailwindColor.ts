// tailwindColors.ts
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config";

const fullConfig = resolveConfig(tailwindConfig);

export const getTailwindColor = (colorPath: string) => {
  const colors = fullConfig.theme.colors;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return colorPath.split("-").reduce((acc: any, key) => acc[key], colors);
};
