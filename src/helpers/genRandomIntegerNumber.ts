function genRandomIntegerNumber(minValue: number, maxValue: number) {
  const randomInteger = Math.trunc(
    (maxValue - minValue + 1) * Math.random() + minValue,
  );
  return randomInteger;
}

export default genRandomIntegerNumber;
