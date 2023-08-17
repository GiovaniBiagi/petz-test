export const capitalizeFirstLetter = (text: string | string[]) => {
  if (!text) return "";

  if (Array.isArray(text)) {
    return text
      .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
      .join(" ");
  }

  return text.charAt(0).toUpperCase() + text.slice(1);
};
