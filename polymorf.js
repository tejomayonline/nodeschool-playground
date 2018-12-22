var employee = new Employee('raja');
//override function
//this method going to execute
// Employee.prototype.getDetails = function(){
//    return this.name.toUpperCase();
// }
Employee.prototype.getDetails = function(){
  return this.name;
}

console.log(employee.getDetails());  //outPut: RAJA
//object and prototype function
function Employee(name){
  this.name = name;
}
