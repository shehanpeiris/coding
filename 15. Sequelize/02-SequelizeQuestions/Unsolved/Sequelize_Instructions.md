* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
  	- Answer: What is Sequelize?
		- A promise-based ORM for Node.js

  	- Answer: What advantages does it offer?
		- An easier way to interact with databases

  	- Answer: How do I install it? How do I incorporate it into my app?
		- You can install it using npm
		- To incorporate it into your app, you create instance of Sequelize

  	- Answer: What the heck is a Sequelize model? What role will it play?
		- A model represents a table in a db. It serves as a schema

  	- Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

  		- How would I model it in Sequelize? 
			var countries = sequelize.define('countries', {
				country: Sequelize.STRING,
				phone_code: Sequelize.INTEGER
				capital: Sequelize.STRING,
				independence_year: Sequelize.INTEGER
			});

  		- How would I query for all the records where the Independence Year was less than 50 years ago?
		  	var Op = Sequelize.Op
			  
			countries.findAll({
				where: {
					independence_year: {
						[Op.gte]: [1969]
					}
				}
			  });

  		- How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

			countries.findAll({
				offset: 2,
				limit: 2,
				order: [[sequelize.col('IndependenceYear'), 'DESC']]
			});

  	- Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
  ```
