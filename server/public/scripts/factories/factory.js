empApp.factory('EmpFactory', ['$http', function($http) {

  var EmpFactory = { list: [] };

  getEmp();

  //get employees
  function getEmp() {
    $http({
      method: 'GET',
      url: '/employees'
    }).then(function(response) {
      console.log('response from factory: ', response);
      console.log('response.data from factory: ', response.data);
      EmpFactory.list = response.data;
    });
  }

  //add emp
  function addEmp(data) {
    $http({
      method: 'POST',
      url: '/employees',
      data: data
    }).then(function(response){
      console.log(response);
      getEmp();
    });
  }

  // delete emp
  function deleteEmp(empID) {
    $http({
      method: 'DELETE',
      url: '/employees/' + empID
    }).then(function(response) {
      getEmp();
    });
  }

  //active emp
  function activeEmp(empID) {
    $http({
      method: 'PUT',
      url: '/employees/active/' + empID
    }).then(function(response) {
      getEmp();
    });
  }

  //inactive emp
  function inactiveEmp(empID) {
    $http({
      method: 'PUT',
      url: '/emp/inactive/' + empID
    }).then(function(response) {
      getEmp();
    });
  }

  return {
    allEmp: EmpFactory,
    addEmp: addEmp,
    deleteEmp: deleteEmp,
    activeEmp: activeEmp,
    inactiveEmp: inactiveEmp
  };
}]);
