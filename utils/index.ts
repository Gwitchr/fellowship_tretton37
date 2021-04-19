export const shorten = (str = "", maxLen: number, separator = " "): string => {
  if (!maxLen) return str;
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen)) + "...";
};
