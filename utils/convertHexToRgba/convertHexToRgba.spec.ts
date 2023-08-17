import { convertHexToRgba } from ".";

describe('convertHexToRgba', () => {
  it('should return the correct RGBA value', () => {
    expect(convertHexToRgba('#000000')).toEqual('rgba(0, 0, 0, 1)');
  })

  it('should return the correct RGBA value with alpha', () => {
    expect(convertHexToRgba('#000000', 0.5)).toEqual('rgba(0, 0, 0, 0.5)');
  });

  it('should return an empty string if the hex code is invalid', () => {
    expect(convertHexToRgba('00000')).toEqual('');
  })
})
