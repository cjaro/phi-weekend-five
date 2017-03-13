var router = require('express').Router();
var pg = require('pg');

var config = {
  database: 'phi',
  host: 'localhost',
  port: 5432,
  max: 10,
  idleTimeoutMillis: 30000
};

var pool = new pg.Pool(config);

//gonna get all the emps
router.get('/', function(req, res) {
  console.log('hit my get all employees route');
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      client.query('SELECT * FROM employees ORDER BY id;', function(err, result) {
        done();
        if(err){
          console.log(err);
          res.sendStatus(500);
        }else{
          console.log(result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
});

// add new employee in the db
router.post('/', function(req, res) {
  var empsObject = req.body;
// db query
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('INSERT INTO employees (first_name, last_name, job_title, salary) VALUES ($1, $2, $3, $4);',
        [empsObject.first_name, empsObject.last_name, empsObject.job_title, empsObject.salary], function(err, result) {
          done();
          if(err){
            console.log(err);
            res.sendStatus(500);
          }else{
            res.sendStatus(201);
          }
      });
    }
  });
});
// delete employee
router.delete('/:id', function(req, res) {
  var empDeleteID = req.params.id;
  console.log('delete route');
  console.log('here is the id to delete ->', empDeleteID);

  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('DELETE FROM employees WHERE id=$1;',
        [empDeleteID], function(err, result) {
          done();
          if(err){
            console.log(err);
            res.sendStatus(500);
          }else{
            res.sendStatus(200);
          }
      });
    }
  });
});
//distinguish active vs inactive
// millie's walkthrough did this with the tasks/chores

router.put('/active/:id', function(req, res) {
  var empActiveID = req.params.id;

  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('UPDATE employees SET status=TRUE WHERE ID=$1;',
        [empActiveID], function(err, result) {
          done();
          if(err){
            console.log(err);
            res.sendStatus(500);
          }else{
            res.sendStatus(200);
          }
      });
    }
  });
});
//inactive??? look at millie's walkthrough for this part
router.put('/inactive/:id', function(req, res) {
  var empInactiveID = req.params.id;

  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      client.query('UPDATE employees SET status=FALSE WHERE ID=$1;',
        [empInactiveID], function(err, result) {
          done();
          if(err){
            console.log(err);
            res.sendStatus(500); 
          }else{
            res.sendStatus(200);
          }
      });
    }
  });
});

router.get('/', function(req, res) {
  console.log('salary route');
  pool.connect(function(err, client, done) {
    if(err){
      console.log(err);
      res.sendStatus(500);
    } else {
      client.query('SELECT SUM(salary) FROM employees;', function(err, result) {
        done();
        if(err){
          console.log(err);
          res.sendStatus(500);
        }else{
          console.log(result.rows);
          res.status(200).send(result.rows);
        }
      });
    }
  });
});

module.exports = router;
