function Person(age, name) {
    this.name = name;
    this.age = age;

    this.print = function () {
        console.log(this.age, this.name)
    }

    this.changeName = function(newName){
        this.name= newName;
    }
}

module.exports.Person = Person;
