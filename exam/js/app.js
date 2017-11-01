var dataController = (function () {

    var data = {
        exams: [],

    };

    function Student(fullName) {
        this.fullName = fullName;
    }

    function Exam(name) {
        this.name = name;
        this.listOfStudents = [];
        this.listOfGrades = [];
    }


})();

var UIController = (function () {
    var DOMStrings = {
        inputSubjectSelect: '.add-subject',
        inputFullName: '.add-student-name',
        inputGrade: '.add-grade',
        monthContainer: '.exam-title-month',
        addButton: '.add-btn'

    }


    function collectInput() {
        var subjectElement = $(DOMStrings.inputSubjectSelect);
        var subjectOptionElement = $(".add-subject option:selected");
        var fullNameElement = $(DOMStrings.inputFullName);
        var gradeElement = $(DOMStrings.inputGrade);


        var result = {
            subject: subjectOptionElement.val(),
            fullName: fullNameElement.val(),
            grade: gradeElement.val()
        }

        return result;
    }
    function displayMonth() {
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var monthElement = $(DOMStrings.monthContainer);
        var month = new Date().getMonth();
        monthElement.text(monthNames[month]);

    }
    function getDOMStrings() {
        return DOMStrings;
    }
    return {
        displayMonth: displayMonth,
        collectInput: collectInput,
        getDOMStrings: getDOMStrings
    }

})();

var mainController = (function (UICtrl, dataCtrl) {
    UICtrl.displayMonth();

    var DOM = UICtrl.getDOMStrings();
    $(DOM.addButton).on('click', function () {
        ctrlAddStudent();
    });

    function ctrlAddStudent() {
        var input = UICtrl.collectInput();
        // console.log(input);

    }


})(UIController, dataController);