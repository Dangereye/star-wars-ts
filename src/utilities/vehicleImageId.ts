export const vehicleImageId = (name: string) => {
  return name.replace(/[\s\/]/g, "_").toLowerCase();
};
