export const formatImageName = (name: string) => {
  return name.replace(/[\s\/]/g, "_").toLowerCase();
};
