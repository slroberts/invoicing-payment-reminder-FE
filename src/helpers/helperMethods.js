export const capitalizeWords = (string) => {
  return string.replace(/(?:^|\s)\S/g, (res) => {
    return res.toUpperCase();
  });
};
