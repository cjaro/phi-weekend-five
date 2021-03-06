empApp.controller('EmpController', ['EmpFactory', function(EmpFactory){
  console.log('EmpController was loaded');
  var self = this;
  self.newEmp = {};
  self.empList = EmpFactory.allEmp;


//add
  self.addEmp = function() {
    EmpFactory.addEmp(self.newEmp);
      self.newEmp = {};
  }

//delete
  self.deleteEmp = function(empID) {
    EmpFactory.deleteEmp(empID);
  }

// "the glue between the controller and view"
  self.activeEmp = function(empID) {
    EmpFactory.activeEmp(empID);
  }

// uncomplete
  self.inactiveEmp = function(empID) {
    EmpFactory.inactiveEmp(empID);
  }



}]);
