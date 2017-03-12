CREATE TABLE employees (
id SERIAL PRIMARY KEY,
first_name varchar(255),
last_name varchar(255),
job_title varchar(255),
salary INT
);

INSERT INTO employees (first_name, last_name, job_title, salary) VALUES ('Bob', 'Builder', 'CTO', 70);
INSERT INTO employees (first_name, last_name, job_title, salary) VALUES ('Bill', 'Bobder', 'CEO', 100);

DELETE FROM employees WHERE id=1;

SELECT * FROM employees ORDER BY id;
