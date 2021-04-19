export const shorten = (str = "", maxLen: number, separator = " "): string => {
  if (!maxLen) return str;
  if (str.length <= maxLen) return str;
  return str.substr(0, str.lastIndexOf(separator, maxLen)) + "...";
};

// gets called at the end of a bunch of events
export function debounce(func: () => any, delay: number): () => any {
  // console.log(func);
  let later: ReturnType<typeof setTimeout> | null;
  return () => {
    if (later) clearTimeout(later);
    later = setTimeout(() => {
      later = null;
      // console.log('working?')
      func();
    }, delay);
  };
}
