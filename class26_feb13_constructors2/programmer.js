var programmer = function(name, title, age, language) {
    this.name = name;
    this.title = title;
    this.age = age;
    this.language = language;
    this.print = function() {
        console.log("---------------------\nName: " + this.name + "\nTitle: " + this.title + 
        "\nAge: " + this.age + "\nFavorite Language: " + this.language
        + "\n---------------------\n");
    };
};

var shehan = new programmer("Shehan", "Rookie", 27, "JavaScript");

shehan.print();