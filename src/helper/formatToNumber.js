
export default function formatToNumber(value) {
  let change = "";
  for (let i = 0; i < value.length; i++) {
    if (value[i] !== ".") {
      change += value[i];
    }
  }
  return change;
}
