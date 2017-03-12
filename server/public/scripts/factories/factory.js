myApp.factory('EmpFactory', [function() {

  var empFactory = { list: [] };

  getEmp();

  //get employees
  function getEmp() {
    $http({
      method: 'GET',
      url: '/emp'
    }).then(function(response) {
      console.log('response from factory: ', response);
      console.log('response.data from factory: ', response.data);
      factoryEmp.list = response.data;
    });
  }

  //add emp
  function addEmp(data) {
    $http({
      method: 'POST',
      url: '/emp',
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
      url: '/emp/' + empID
    }).then(function(response) {
      getEmp();
    });
  }

  //active emp
  function activeEmp(empID) {
    $http({
      method: 'PUT',
      url: '/emp/active/' + empID
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
    allEmp: factoryEmp,
    addEmp: addEmp,
    deleteEmp: deleteEmp,
    completeEmp: completeEmp,
    inactiveEmp: inactiveEmp
  };
}]);
