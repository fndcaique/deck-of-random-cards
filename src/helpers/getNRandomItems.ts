import genRandomIntegerNumber from './genRandomIntegerNumber';

/* eslint-disable @typescript-eslint/no-explicit-any */
const getNRandomItems = (list: any[], n: number) => {
  const itemsIdx: { [key: number]: boolean } = {};
  const fiveItems: any[] = [];
  let it = 0;
  while (it < n) {
    const index = genRandomIntegerNumber(0, list.length - 1);
    if (!itemsIdx[index]) {
      itemsIdx[index] = true;
      fiveItems.push(list[index]);
      it++;
    }
  }
  return fiveItems;
};

export default getNRandomItems;
