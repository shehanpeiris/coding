var orm = require("./config/orm.js");


// INSERT QUERIES HERE

// Console log all the party names.
orm.selectAllColumn("party_name", "parties");

// Console log all the client names.
orm.selectAllColumn("client_name", "clients");

// Console log all the parties that have a party-type of grown-up.
orm.selectWhere("party_name", "parties", "party_type", "grown-up");

// Console log all the clients and their parties.
orm.leftJoin("client_name","clients","parties","id","client_id");


// // Find all the pets ordering by the lowest price to the highest price.
// orm.selectAndOrder("animal_name", "pets", "price");

// // Find a pet in the pets table by an animal_name of Rachel.
// orm.selectWhere("pets", "animal_name", "Rachel");

// // Find the buyer with the most pets.
// orm.findWhoHasMost("buyer_name", "buyer_id", "buyers", "pets");
