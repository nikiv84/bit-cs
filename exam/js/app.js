var dataController = (function () {

    var data = {
        passed: [],
        failed: []
    };

    function Student(fullName) {
        var res = fullName.trim().split(" ");
        this.name = res[0];
        this.surname = res.slice(1, res.length).join(" ");
    }

    Student.prototype.getInfo = function () {
        return this.name + " " + this.surname;
    }

    function Exam(student, grade, subject) {
        this.student = student;
        this.grade = grade;
        this.subject = subject;
        this.passed = (grade > 5);
    }

    function addExam(fullName, grade, subject) {
        var student = new Student(fullName);
        var exam = new Exam(student, Math.abs(grade), subject);
        if (!exam.passed) {
            data.failed.push(exam);
        } else {
            data.passed.push(exam);
        }
        return exam;
    }

    //ZASTO NE RADI?!?!?!
    // var stats = {
    //     totalNumOfStudents: data.passed.length + data.failed.length,
    //     totalNumOfPassed: data.passed.length,
    //     totalNumOfFailed: data.failed.length
    // }

    function getTotalNum() {
        return data.passed.length + data.failed.length;
    }
    function getPassedNum() {
        return data.passed.length;
    }
    function getFailedNum() {
        return data.failed.length;
    }
    function getFailedPercent() {
        return Math.round((data.failed.length / getTotalNum()) * 100);
    }
    function getPassedPercent() {
        return Math.round((data.passed.length / getTotalNum()) * 100);
    }

    //exclusively for testing
    function logData() {
        console.log(data);
    }

    return {
        addExam: addExam,
        //ONLY FOR TESTING
        logData: logData,
        getTotalNum: getTotalNum,
        getPassedNum: getPassedNum,
        getFailedNum: getFailedNum,
        getPassedPercent: getPassedPercent,
        getFailedPercent: getFailedPercent
    }

})();

var UIController = (function () {
    var DOMStrings = {
        inputSubjectSelect: '.add-subject',
        inputFullName: '.add-student-name',
        inputGrade: '.add-grade',
        monthContainer: '.exam-title-month',
        addButton: '.add-btn',
        numOfStudents: '.numofstud',
        outputPassed: '.passed-list',
        outputFailed: '.failed-list',
        outputPassedCount: '.exam-passed-count',
        outputFailedCount: '.exam-failed-count',
        outputPassedPercent: '.exam-passed-percentage',
        outputFailedPercent: '.exam-failed-percentage',
        errorContainer: '.error'
    }

    function collectInput() {
        var subjectElement = $(DOMStrings.inputSubjectSelect);
        var subjectOptionElement = $(".add-subject option:selected");
        var fullNameElement = $(DOMStrings.inputFullName);
        var gradeElement = $(DOMStrings.inputGrade);

        return {
            subject: subjectOptionElement.val(),
            fullName: fullNameElement.val(),
            grade: gradeElement.val()
        }
    }

    function displayMonth() {
        var monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        var monthElement = $(DOMStrings.monthContainer);
        var month = new Date().getMonth();
        monthElement.text(monthNames[month]);
    }

    function displayStats(stats1, stats2, stats3, pPercent, fPercent) {
        $(DOMStrings.numOfStudents).text(stats1);
        $(DOMStrings.outputPassedCount).text(stats2);
        $(DOMStrings.outputFailedCount).text(stats3);
        $(DOMStrings.outputPassedPercent).text(pPercent + "%");
        $(DOMStrings.outputFailedPercent).text(fPercent + "%");
    }
    var i = 0;
    var j = 0;
    function displayStudent(exam) {
        var passedList = $(DOMStrings.outputPassed);
        var failedList = $(DOMStrings.outputFailed);
        if (exam.passed) {
            var output01 = $('<div class="item clearfix" id="passed-' + i + '"></div>');
            passedList.append(output01);
            var output02 = $('<div class="item-description">' + exam.student.getInfo() + '</div>');
            output01.append(output02);
            var output03 = $('<div class="right clearfix"></div>');
            output01.append(output03);
            var output04 = $('<div class="item-value">' + exam.grade + '</div>');
            output03.append(output04);
            var output05 = $('<div class="item-delete"></div>');
            output03.append(output05);
            var output06 = $('<button class="item-delete-btn">x</button>');
            output05.append(output06);
            i++;
        } else {
            var output01 = $('<div class="item clearfix" id="failed-' + j + '"></div>');
            failedList.append(output01);
            var output02 = $('<div class="item-description">' + exam.student.getInfo() + '</div>');
            output01.append(output02);
            var output03 = $('<div class="right clearfix"></div>');
            output01.append(output03);
            var output04 = $('<div class="item-value">' + exam.grade + '</div>');
            output03.append(output04);
            var output05 = $('<div class="item-delete"></div>');
            output03.append(output05);
            var output06 = $('<button class="item-delete-btn">x</button>');
            output05.append(output06);
            j++;
        }
    }
    function clearInputs() {
        $(DOMStrings.inputFullName).val('');
        $(DOMStrings.inputGrade).val('');
        $(DOMStrings.errorContainer).animate({
            opacity: 0
        }, 250, function () {
            $(DOMStrings.errorContainer).text('');
        });
    }

    function showError(input) {
        var errorMsg = '';
        if (!input.fullName) {
            errorMsg = 'Enter student\'s name';
        } else if (!input.grade || input.grade > 10) {
            errorMsg = 'Enter student\'s grade';
        } else {
            errorMsg = 'Unknown error';
        }
        $(DOMStrings.errorContainer).text(errorMsg).animate({
            opacity: 1
        }, 250);

    }

    function getDOMStrings() {
        return DOMStrings;
    }

    return {
        displayMonth: displayMonth,
        collectInput: collectInput,
        getDOMStrings: getDOMStrings,
        displayStudent: displayStudent,
        clearInputs: clearInputs,
        displayStats: displayStats,
        showError: showError
    }

})();

var mainController = (function (UICtrl, dataCtrl) {
    UICtrl.displayMonth();

    var DOM = UICtrl.getDOMStrings();
    $(DOM.addButton).on('click', function () {
        ctrlAddStudent();
    });

    function ctrlAddStudent() {
        // 1) get input data (UI)
        var input = UICtrl.collectInput();

        // 2) Validate input
        if (!input.fullName || !input.grade || input.grade > 10) {
            UICtrl.showError(input);
            return;
        }

        // 3) Add exam to list
        var exam = dataCtrl.addExam(input.fullName, input.grade, input.subject);
        console.log(exam);
        dataCtrl.logData();

        // 4) Clear input fields
        UICtrl.clearInputs();

        // 5) Display student on UI
        UICtrl.displayStudent(exam);

        // 5) Display stats
        UICtrl.displayStats(dataCtrl.getTotalNum(), dataCtrl.getPassedNum(), dataCtrl.getFailedNum(), dataCtrl.getPassedPercent(), dataCtrl.getFailedPercent());


    }


})(UIController, dataController);