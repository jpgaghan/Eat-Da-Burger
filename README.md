# Eat-Da-Burger
This is a handlebars application that uses MYSQL, Heroku, JawsDB and node.js to consume burgers. The user can choose to devour burgers, add burgers and delete burgers. 

## Main Page
Type in a new burger and click the button to add.

You then can click the devour button to change the burgers status in the database and move it to the devoured column. You can also delete the burger off the devoured column by clicking the delete button.
![Main Page](/public/assets/img/burgers.PNG)


### Required Packages
* npm packages:
  * [mysql](https://www.npmjs.com/package/mysql)
  * [Body-Parser](https://www.npmjs.com/package/body-parser)
  * [connect-timeout](https://www.npmjs.com/package/connect-timeout)
  * [express](https://www.npmjs.com/package/express)
  * [express-handlebars](https://www.npmjs.com/package/express-handlebars)