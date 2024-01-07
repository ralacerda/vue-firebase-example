import { onCall } from 'firebase-functions/v2/https';
export const getSquared = onCall(({ data }) => {
  const { number } = data;
  return number ** 2;
});

export const getSqrt = onCall(({ data }) => {
  const { number } = data;
  return Math.sqrt(number);
});

export const getCube = onCall(({ data }) => {
  const { number } = data;
  return number ** 3;
});

export const getCubeRoot = onCall(({ data }) => {
  const { number } = data;
  return Math.cbrt(number);
});

export const getSquareRoot = onCall(({ data }) => {
  const { number } = data;
  return Math.sqrt(number);
});
