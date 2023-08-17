export const convertHexToRgba = (hex: string, alpha: number = 1): string => {
  // Remove the '#' character if present
  hex = hex.replace(/^#/, '');

  // Check if the hex code is valid
  const hexHash = /^[0-9A-Fa-f]{6}$/;
  if (!hexHash.test(hex)) {
    return '';
  }

  // Parse the hex code into RGB components
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);


  // Construct the RGBA string
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}
