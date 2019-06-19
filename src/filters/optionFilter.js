export default function optionFilter(optionArr) {
  return optionArr.map(v => v.label).join(" / ");
}
