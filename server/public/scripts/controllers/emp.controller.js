empApp.controller('EmpController', ['EmpFactory', function(EmpFactory){ //can now take http out of depenc\since I moved it to the factory
  console.log('EmpController was loaded');
  var self = this;
  self.newEmp = {};
  self.empList = EmpFactory.allEmps;

//add
  self.addEmp = function() {
    empFactory.addEmp(self.newEmp);
      self.newEmp = {};
  }

//delete
  self.deleteEmp = function(empID) {
    EmpFactory.deleteEmp(empID);
  }

// // "the glue between the controller and view"
//   self.completeEmp = function(empID) {
//     EmpFactory.completeEmp(empID);
//   }
//
// // uncomplete
//   self.uncompleteEmp = function(empID) {
//     EmpFactory.uncompleteEmp(empID);
//   }


}]);
