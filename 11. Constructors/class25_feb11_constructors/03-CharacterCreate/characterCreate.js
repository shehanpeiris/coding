function character(name, profession, gender, age, damage, health) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.damage = damage;
    this.health = health;
    this.printStats = function() {
        console.log("Name: " + this.name + "\nProfession: " + this.profession + "\nGender: "
        + this.gender +"\nAge: " + this.age + "\nDamage: " + this.damage + "\nHealth: "
        + this.health);
        console.log("\n--------------------\n");
    };
    this.isAlive = function() {
        if (this.health > 0) {
            console.log(this.name + " is still alive!");
            console.log("\n--------------------\n");
            return true;
        } else {
            console.log(this.name + " has died!");
            console.log("\n--------------------\n");
            return false;
        }
    };
    this.attack = function(opponent) {
        opponent.health -= this.damage
    };
    this.levelUp = function() {
        this.age += 1;
        this.damage += 5;
        this.health += 25;
    }
};

var hound = new character("The Hound","Knight","Male",37,25,100);
var arya = new character("Arya","Runaway","Female",12,15,150);

function gameInit() {
    while ((hound.isAlive()) && (arya.isAlive())) {
        hound.attack(arya);
        hound.printStats();
        arya.printStats();
    }
};

gameInit();