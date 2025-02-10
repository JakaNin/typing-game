// * Tailwind CSS のブレークポイント * //
// ブレークポイント | 対象画面サイズ | CSSの範囲
// sm	Small (小さい画面): 640px以上	@media (min-width: 640px)
// md	Medium (中程度の画面): 768px以上	@media (min-width: 768px)
// lg	Large (大きな画面): 1024px以上	@media (min-width: 1024px)
// xl	Extra Large (さらに大きな画面): 1280px以上	@media (min-width: 1280px)
// 2xl	2X-Large (超大画面): 1536px以上	@media (min-width: 1536px)

import { headers } from "next/headers";

/**
 * ユーザーエージェントからデバイスタイプを判定するユーティリティ関数
 * @returns 'mobile' | 'tablet' | 'desktop'
 */
export const getDeviceType = async (): Promise<
  "mobile" | "tablet" | "desktop"
> => {
  const userAgent = (await headers()).get("user-agent") || "";
  if (/mobile/i.test(userAgent)) return "mobile";
  if (/tablet/i.test(userAgent)) return "tablet";
  return "desktop";
};

export const isMobile = async (): Promise<boolean> => {
  return (await getDeviceType()) === "mobile";
};

export const isTablet = async (): Promise<boolean> => {
  return (await getDeviceType()) === "tablet";
};

export const isDesktop = async (): Promise<boolean> => {
  return (await getDeviceType()) === "desktop";
};
