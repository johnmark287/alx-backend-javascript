export default function cleanSet(set, startString) {
  let ans = '';
  if (startString && startString.length) {
    for (const item of set) {
      if (item && item.startsWith(startString)) ans += `${item.slice(startString.length)}-`;
    }
  }
  return ans.slice(0, ans.length - 1);
}
