empApp.controller('OtherController', ['EmpFactory' function(){
  console.log('OtherController was loaded');
  var self = this;
  self.listTest = ['Owl', 'Trashpanda', 'Murderball', 'Stickers'];

  // var newEmployeeMonthlyExpenses = salary / 12;
  // var previousMonthlyExpenses = $('#monthlyExpenses').text();
  // var totalMonthlyExpenses = parseFloat(previousMonthlyExpenses) + newEmployeeMonthlyExpenses;
  // $('#monthlyExpenses').text(totalMonthlyExpenses);

//TODO add math from salary column here
// SQL??
//SELECT salary FROM employees;
//then export to DOM

}]);
