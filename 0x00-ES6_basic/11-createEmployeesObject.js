export default function createEmployeesObject(departmentName, employees) {
  const obj = {};
  obj.$departmentName = [];
  for (let employee of employees) {
    obj.$departmentName.push(employee);
  }
  return obj;
}
