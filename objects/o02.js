function Person (name, lname, yob, occupation) {
    this.name = name,
    this.last_name = lname,
    this.yob = yob,
    this.occupation = occupation
    this.greeting = function (){
        return "Hi! My name is " + this.name + " " + this.last_name + ". I was born in " + this.yob + ". And I am a " + this.occupation + ". :)";
    }
}

var ivan = new Person("Ivan", "Nikolic", "1984", "programmer");
console.log(ivan.greeting());


function Country (name, capital, continent, language){
    this.name = name,
    this.capital = capital,
    this.continent = continent,
    this.language = language,
    this.info = function(){
        return  "Country: " + this.name + ", capital: " + this.capital +", continent: " + this.continent + ", language:" + this.language;
    }
}

var serbia = new Country ("Srbija", "Beograd","Evropa", "srpski");
console.log(serbia.info());