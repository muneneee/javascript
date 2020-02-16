var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleAkanNames = {
    Sunday: "Kwasi",
    Monday: "Kwadwo",
    Tuesday: "Kwabena",
    Wednesday: "Kwaku",
    Thurday: "Yaw",
    Friday: "Kofi",
    Saturday: "Kwame"
};

var femaleAkanNames = {
    Sunday: "Akosua",
    Monday: "Adwoa",
    Tuesday: "Abenaa",
    Wednesday: "Akua",
    Thurday: "Yaa",
    Friday: "Afua",
    Saturday: "Ama"
};
// form validation function
function validateForm() {
    var gender = document.getElementsByName("gender");
    var date = document.getElementById("day");
    var month = document.getElementById("month");
    var year = document.getElementById("year");
    var formValid = false;
    var i = 0;

    if (date.value == "" || date.value == null) {
        // alert("Please Input date");
        document.getElementById("date").innerHTML = "Day Required";
        document.getElementById("date").style.color = "red";
        date.style.border = "2px solid red";
        return false;
    } else {
        date.style.border = "";
        if (!isNaN(date.value)) {
            if (date.value <= 0 || date.value > 31) {
                document.getElementById("date").innerHTML = "Invalid date";
                document.getElementById("date").style.color = "red";
                date.style.border = "2px solid red";
                return false;
            } else {
                document.getElementById("date").innerHTML = "Date Ok!";
                document.getElementById("date").style.color = "green";
                date.style.border = "2px solid green";
            }
        } else {
            document.getElementById("date").innerHTML = "Day must be a Number";
            document.getElementById("date").style.color = "red";
            date.style.border = "2px solid red";
            return false;

        }
    }
    if (month.value == "" || month.value == null) {



        document.getElementById("month").innerHTML = "Month Required";
        document.getElementById("month").style.color = "red";
        month.style.border = "2px solid red";
        return false;
    } else {
        if (!isNaN(month.value)) {
            if (month.value <= 0 || month.value > 12) {
                document.getElementById("month").innerHTML = "Invalid Month";
                document.getElementById("month").style.color = "red";
                month.style.border = "2px solid red";
                return false;
            } else {
                document.getElementById("month").innerHTML = "Month Ok!";
                document.getElementById("month").style.color = "green";
                month.style.border = "2px solid green";
            }
        } else {
            document.getElementById("month").innerHTML = "Month must be a Number";
            document.getElementById("month").style.color = "red";
            month.style.border = "2px solid red";
            return false;
        }
    }
    if (year.value == "" || year.value == null) {

        document.getElementById("year").innerHTML = "Year Required";
        document.getElementById("year").style.color = "red";
        year.style.border = "2px solid red";
        return false;
    } else {
        if (!isNaN(year.value)) {
            if (year.value.length != 4) {
                document.getElementById("year").innerHTML = "Invalid Year";
                document.getElementById("year").style.color = "red";
                year.style.border = "2px solid red";
                return false;
            } else {
                document.getElementById("year").innerHTML = "Year Ok!";
                document.getElementById("year").style.color = "green";
                year.style.border = "2px solid green";
            }
        } else {
            document.getElementById("year").innerHTML = "Year must be a Number";
            document.getElementById("year").style.color = "red";
            year.style.border = "2px solid red";
            return false;
        }
    }
    while (!formValid && i < gender.length) {
        if (gender[i].checked) {
            // mgender = gender[i].value;
            document.getElementById("legend").style.color = "green";
            document.getElementById("legend").innerHTML = "Gender Ok!";
            formValid = true;
        }
        i++;
    }
    if (!formValid) {
        document.getElementById("legend").style.color = "red";
        return false;
    }
    return formValid;

}

//functions to get user details
function getUserDetails() {
    var gender = document.getElementsByName("gender");
    var date = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    // var date = 12;
    // var month = 12;
    // var year = 2012;
    var i = 0;

    while (i < gender.length) {
        if (gender[i].checked)

            mgender = gender[i].value;
        i++;

    }


    var userDetailsObj = {
        date: date,
        month: month,
        year: year,
        gender: mgender
    }

    return userDetailsObj;

}
// function to get the day of the week
function dayOfWkCal() {
    var userDetailsObj = getUserDetails();
    var day = userDetailsObj.date;
    var month = userDetailsObj.month;
    var year = userDetailsObj.year;

    // alert("dd "+day+" mm "+month +" yyyy "+year);

    var a = Math.floor((14 - month) / 12);
    var y = year - a;
    var m = month + 12 * a - 2;
    dayOfWk = (day + y + Math.floor(y / 4) - Math.floor(y / 100) +
        Math.floor(year / 400) + Math.floor((31 * m) / 12)) % 7;

    var myDay = daysOfWeek[dayOfWk];
    // alert(myDay);
    return myDay;

}
// function to get Akan Names
function getAkanName() {
    var userDetailsObj = getUserDetails();
    var gender = userDetailsObj.gender;

    var dayOfBirth = dayOfWkCal();


    if (gender === "male") {
        for (var akanKey in maleAkanNames) {
            if (maleAkanNames.hasOwnProperty(akanKey)) {
                if (akanKey === dayOfBirth)
                    myAkanName = maleAkanNames[akanKey];
            }
        }
    } else if (gender === "female") {
        for (var akanKey in femaleAkanNames) {
            if (femaleAkanNames.hasOwnProperty(akanKey)) {
                if (akanKey === dayOfBirth)
                    myAkanName = femaleAkanNames[akanKey];
            }
        }

    } else {
        alert("error");
    }

    // alert(myAkanName)

    document.getElementById("results").innerHTML = "Hey Your Akan name would be " + myAkanName ;





}

function aggregateMyFunctions() {
    var isValid = validateForm();

    if (!isValid) {
        validateForm();
        return false;
    } else {
        getUserDetails();
        dayOfWkCal();
        getAkanName()
        return false;
    }
}
