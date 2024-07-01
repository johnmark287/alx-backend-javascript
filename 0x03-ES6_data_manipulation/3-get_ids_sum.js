export default function getStudentIdsSum(arr) {
  return (arr instanceof Array) ? arr.reduce((prev, current) => prev + current.id, 0) : 0;
}
