var ivan = {
    name: "Ivan",
    lastName: "Nikolic",
    age: 32,
    greet: function () {
        console.log("Hi, my name is " + this.name + " " + this.lastName + ". I graduated from " + this.education.university +
        ". My favorite subject was " + this.education.subjects[0]);
    },
    education: {
        highSchool: "Gimnazija",
        university: "Faculty of Economics",
        subjects: ["statistics", "mathematics", "english"]
    }
};

ivan.greet();
ivan.education.subjects[3] = "programming";
console.log(ivan.education.subjects);
ivan.education.subjects.push("nesto");
console.log(ivan.education.subjects);
ivan.education.subjects.pop();
ivan.education.subjects.pop();
console.log(ivan.education.subjects);
ivan.education.subjects[ivan.education.subjects.length] = "programming";
console.log(ivan.education.subjects);
