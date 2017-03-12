#*Back to the Future!*
Remember our first weekend challenge? It's time to re-visit some old code and bring it up to date with everything you know. This will test your full stack and Angular knowledge!

#*Full Stack App*

Convert your previous weekend 1 challenge application (original instructions below) to utilize Angular, Node/Express, AJAX, and SQL. Any application logic can remain on the client side, but all data storage should be handled by the server and your database. Be sure to include all your CREATE TABLE queries in a database.sql file in your repo!

Make use of Express routing modules to organize your server code. Your application should track salary usage on the page (original Pro Mode) and allow the user to remove this person from the list (original Hard Mode).

#*Hard Mode*
No more deleting! Create an interface on the page that would allow you to toggle employees from active to inactive and back. Your salary total should only tally active employees and change as employees are changed. Be sure to style the inactive employees differently than active ones.

#*Pro Mode*
Bring in ngRoute and create a second view and controller as well as a nav bar. The second view will handle setting a monthly salary budget (in the database!) and display budget limit history. The first view then needs to be updated to tell the user if the active employees are over the latest budget limit set. There are several ways to solve this. One way is to research creating an Angular factory to share the budget number between controllers.

Move all of your AJAX requests into a factory so that $http is not a dependency in any of your controllers.

#*Original Challenge Instructions*

For your weekend challenge, you will need to create an application that records employee records along with their salary. We also want to add the salaries up so we know how much we’re spending each month in salary.

> - The Employee's First and Last name
> - The Employee's ID Number
> - The Employee's Job Title
> - The Employee's Salary (Yearly)
