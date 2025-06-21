export const openLinkNewTab = (link: string) => {
  return () => window.open(link, "_blank");
};
