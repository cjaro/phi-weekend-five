empApp.controller('OtherController', ['EmpFactory', function(EmpFactory){
  console.log('OtherController was loaded');
  var self = this;
  self.listTest = ['Owl', 'Trashpanda', 'Murderball', 'Stickers'];
  self.monthlyTotal = 0;

  // self.getSalaries = function(){
  //
  // }

  // var newEmployeeMonthlyExpenses = salary / 12;
  // var previousMonthlyExpenses = $('#monthlyExpenses').text();
  // var totalMonthlyExpenses = parseFloat(previousMonthlyExpenses) + newEmployeeMonthlyExpenses;
  // $('#monthlyExpenses').text(totalMonthlyExpenses);

//TODO add math from salary column here
// SQL??
//SELECT salary FROM employees;
//then export to DOM

}]);
