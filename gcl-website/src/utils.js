/**
 * Gets the current year
 *
 * @returns the current year
 */
export const getCurrentYear = () => {
  const currentDate = new Date();
  return currentDate.getFullYear();
};
