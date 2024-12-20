export const isValidName = (name: string): boolean => {
  return name.length > 0 && name.length <= 50;
};