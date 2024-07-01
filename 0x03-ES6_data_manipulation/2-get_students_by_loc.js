export default function getStudentsByLocation(students, city) {
  return students instanceof Array ? students.filter((obj) => (obj.location === city)) : [];
}
