function welcomeMessage() {
    alert("Welcome to Hospital Management System!");
}

    // Patient Registration
var registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", function(event) {

        var name = document.getElementById("name").value.trim();
        var email = document.getElementById("email").value.trim();
        var phone = document.getElementById("phone").value.trim();
        var dob = document.getElementById("dob").value;
        var gender = document.getElementById("gender").value;
        var address = document.getElementById("address").value.trim();
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirm_password").value;

        event.preventDefault();

        if (name == "" || email == "" || phone == "" ||
            dob == "" || gender == "" || address == "" ||
            password == "" || confirmPassword == "") {

            alert("Please fill in all fields.");

        }
        else if (!/^[A-Za-z ]+$/.test(name)) {

    alert("Name can contain only English letters and spaces.");

}

        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

            alert("Please enter a valid email address.");

        }

      else if (!/^01[3-9][0-9]{8}$/.test(phone)) {

    alert("Please enter a valid Bangladesh mobile number.");

}

        else if (new Date(dob) >= new Date()) {

            alert("Date of Birth must be in the past.");

        }

        else if (password.length < 8) {

            alert("Password must be at least 8 characters long.");

        }

        else if (password != confirmPassword) {

            alert("Password and Confirm Password do not match.");

        }

        else {

            alert("Registration Successful!");

        }
    });
}

    // Add Doctor
function validateDoctorForm() {
    var nameInput = document.getElementById("docName");
    var idInput = document.getElementById("docId");
    var deptSelect = document.getElementById("department");
    var phoneInput = document.getElementById("phone");

    var nameError = document.getElementById("nameError");
    var idError = document.getElementById("idError");
    var deptError = document.getElementById("deptError");
    var phoneError = document.getElementById("phoneError");

    var name = nameInput.value.trim();
    var id = idInput.value.trim();
    var department = deptSelect.value;
    var phone = phoneInput.value.trim();

    var namePattern = /^[A-Za-z ]+$/;
    var intPattern = /^[0-9]+$/;
    var phonePattern = /^[0-9]{11}$/;

    if (nameError) nameError.innerHTML = "";
    if (idError) idError.innerHTML = "";
    if (deptError) deptError.innerHTML = "";
    if (phoneError) phoneError.innerHTML = "";

    nameInput.style.borderColor = "";
    idInput.style.borderColor = "";
    deptSelect.style.borderColor = "";
    phoneInput.style.borderColor = "";

    var isValid = true;

    if (name === "" || !namePattern.test(name)) {
        if (nameError) nameError.innerHTML = "Name must contain alphabets only.";
        nameInput.style.borderColor = "red";
        isValid = false;
    }

    if (id === "" || !intPattern.test(id)) {
        if (idError) idError.innerHTML = "ID must be an integer.";
        idInput.style.borderColor = "red";
        isValid = false;
    }

    if (department === "") {
        if (deptError) deptError.innerHTML = "Please select a department.";
        deptSelect.style.borderColor = "red";
        isValid = false;
    }

    if (!phonePattern.test(phone)) {
        if (phoneError) phoneError.innerHTML = "Phone must be an 11-digit integer.";
        phoneInput.style.borderColor = "red";
        isValid = false;
    }

    if (!isValid) {
        alert("Fillup all the field properly");
        return false;
    }
    return true;
}

function resetFormDOM() {
    var nameError = document.getElementById("nameError");
    var idError = document.getElementById("idError");
    var deptError = document.getElementById("deptError");
    var phoneError = document.getElementById("phoneError");

    if (nameError) nameError.innerHTML = "";
    if (idError) idError.innerHTML = "";
    if (deptError) deptError.innerHTML = "";
    if (phoneError) phoneError.innerHTML = "";

    var nameInput = document.getElementById("docName");
    var idInput = document.getElementById("docId");
    var deptSelect = document.getElementById("department");
    var phoneInput = document.getElementById("phone");

    if (nameInput) nameInput.style.borderColor = "";
    if (idInput) idInput.style.borderColor = "";
    if (deptSelect) deptSelect.style.borderColor = "";
    if (phoneInput) phoneInput.style.borderColor = "";
}

    // Add Receptionist
function validateReceptionistForm() {
    var nameInput = document.getElementById("recName");
    var idInput = document.getElementById("recId");
    var phoneInput = document.getElementById("phone");
    var shiftSelect = document.getElementById("shift");

    var nameError = document.getElementById("recNameError");
    var idError = document.getElementById("recIdError");
    var phoneError = document.getElementById("recPhoneError");
    var shiftError = document.getElementById("recShiftError");

    var name = nameInput.value.trim();
    var id = idInput.value.trim();
    var phone = phoneInput.value.trim();
    var shift = shiftSelect.value;

    var namePattern = /^[A-Za-z ]+$/;
    var intPattern = /^[0-9]+$/;
    var phonePattern = /^[0-9]{11}$/;

    if (nameError) nameError.innerHTML = "";
    if (idError) idError.innerHTML = "";
    if (phoneError) phoneError.innerHTML = "";
    if (shiftError) shiftError.innerHTML = "";

    nameInput.style.borderColor = "";
    idInput.style.borderColor = "";
    phoneInput.style.borderColor = "";
    shiftSelect.style.borderColor = "";

    var isValid = true;

    if (name === "" || !namePattern.test(name)) {
        if (nameError) nameError.innerHTML = "Name must contain alphabets only.";
        nameInput.style.borderColor = "red";
        isValid = false;
    }

    if (id === "" || !intPattern.test(id)) {
        if (idError) idError.innerHTML = "ID must be an integer.";
        idInput.style.borderColor = "red";
        isValid = false;
    }

    if (!phonePattern.test(phone)) {
        if (phoneError) phoneError.innerHTML = "Phone must be an 11-digit integer.";
        phoneInput.style.borderColor = "red";
        isValid = false;
    }

    if (shift === "") {
        if (shiftError) shiftError.innerHTML = "Please select a shift.";
        shiftSelect.style.borderColor = "red";
        isValid = false;
    }

    if (!isValid) {
        alert("Fillup all the field properly");
        return false;
    }

    return true;
}

function resetReceptionistFormDOM() {
    var nameError = document.getElementById("recNameError");
    var idError = document.getElementById("recIdError");
    var phoneError = document.getElementById("recPhoneError");
    var shiftError = document.getElementById("recShiftError");

    if (nameError) nameError.innerHTML = "";
    if (idError) idError.innerHTML = "";
    if (phoneError) phoneError.innerHTML = "";
    if (shiftError) shiftError.innerHTML = "";

    var nameInput = document.getElementById("recName");
    var idInput = document.getElementById("recId");
    var phoneInput = document.getElementById("phone");
    var shiftSelect = document.getElementById("shift");

    if (nameInput) nameInput.style.borderColor = "";
    if (idInput) idInput.style.borderColor = "";
    if (phoneInput) phoneInput.style.borderColor = "";
    if (shiftSelect) shiftSelect.style.borderColor = "";
}

// Add Department Form
function validateDepartmentForm() {
    var nameInput = document.getElementById("deptName");
    var codeInput = document.getElementById("deptCode");
    var headInput = document.getElementById("deptHead");

    var nameError = document.getElementById("deptNameError");
    var codeError = document.getElementById("deptCodeError");
    var headError = document.getElementById("deptHeadError");

    var name = nameInput.value.trim();
    var code = codeInput.value.trim();
    var head = headInput.value.trim();

    var alphaPattern = /^[A-Za-z ]+$/;
    var codePattern = /^[A-Za-z0-9-]+$/;

    if (nameError) nameError.innerHTML = "";
    if (codeError) codeError.innerHTML = "";
    if (headError) headError.innerHTML = "";

    nameInput.style.borderColor = "";
    codeInput.style.borderColor = "";
    headInput.style.borderColor = "";

    var isValid = true;

    if (name === "" || !alphaPattern.test(name)) {
        if (nameError) nameError.innerHTML = "Department name must contain alphabets only.";
        nameInput.style.borderColor = "red";
        isValid = false;
    }

    if (code === "" || !codePattern.test(code)) {
        if (codeError) codeError.innerHTML = "Department code must be valid (e.g., DEPT-01).";
        codeInput.style.borderColor = "red";
        isValid = false;
    }

    if (head === "" || !alphaPattern.test(head)) {
        if (headError) headError.innerHTML = "Head of department must contain alphabets only.";
        headInput.style.borderColor = "red";
        isValid = false;
    }

    if (!isValid) {
        alert("Fillup all the field properly");
        return false;
    }

    return true;
}

function resetDepartmentFormDOM() {
    var nameError = document.getElementById("deptNameError");
    var codeError = document.getElementById("deptCodeError");
    var headError = document.getElementById("deptHeadError");

    if (nameError) nameError.innerHTML = "";
    if (codeError) codeError.innerHTML = "";
    if (headError) headError.innerHTML = "";

    var nameInput = document.getElementById("deptName");
    var codeInput = document.getElementById("deptCode");
    var headInput = document.getElementById("deptHead");

    if (nameInput) nameInput.style.borderColor = "";
    if (codeInput) codeInput.style.borderColor = "";
    if (headInput) headInput.style.borderColor = "";
}

// Add Ward Form Validation & DOM Manipulation
function validateWardForm() {
    var nameInput = document.getElementById("wardName");
    var codeInput = document.getElementById("wardCode");
    var bedsInput = document.getElementById("totalBeds");

    var nameError = document.getElementById("wardNameError");
    var codeError = document.getElementById("wardCodeError");
    var bedsError = document.getElementById("wardBedsError");

    var name = nameInput.value.trim();
    var code = codeInput.value.trim();
    var beds = bedsInput.value.trim();

    var alphaPattern = /^[A-Za-z ]+$/;
    var codePattern = /^[A-Za-z0-9-]+$/;
    var intPattern = /^[0-9]+$/;

    if (nameError) nameError.innerHTML = "";
    if (codeError) codeError.innerHTML = "";
    if (bedsError) bedsError.innerHTML = "";

    nameInput.style.borderColor = "";
    codeInput.style.borderColor = "";
    bedsInput.style.borderColor = "";

    var isValid = true;

    if (name === "" || !alphaPattern.test(name)) {
        if (nameError) nameError.innerHTML = "Ward name must contain alphabets only.";
        nameInput.style.borderColor = "red";
        isValid = false;
    }

    if (code === "" || !codePattern.test(code)) {
        if (codeError) codeError.innerHTML = "Ward code must be valid (e.g., WARD-01).";
        codeInput.style.borderColor = "red";
        isValid = false;
    }

    if (beds === "" || !intPattern.test(beds) || parseInt(beds, 10) < 1) {
        if (bedsError) bedsError.innerHTML = "Total beds must be an integer (at least 1).";
        bedsInput.style.borderColor = "red";
        isValid = false;
    }

    if (!isValid) {
        alert("Fillup all the field properly");
        return false;
    }

    return true;
}

function resetWardFormDOM() {
    var nameError = document.getElementById("wardNameError");
    var codeError = document.getElementById("wardCodeError");
    var bedsError = document.getElementById("wardBedsError");

    if (nameError) nameError.innerHTML = "";
    if (codeError) codeError.innerHTML = "";
    if (bedsError) bedsError.innerHTML = "";

    var nameInput = document.getElementById("wardName");
    var codeInput = document.getElementById("wardCode");
    var bedsInput = document.getElementById("totalBeds");

    if (nameInput) nameInput.style.borderColor = "";
    if (codeInput) codeInput.style.borderColor = "";
    if (bedsInput) bedsInput.style.borderColor = "";
}

// Manage Doctors Search
function searchDoctors() {
    var searchInput = document.getElementById("doctorSearchInput");
    var noResultSpan = document.getElementById("doctorNoResult");
    var tableBody = document.querySelector(".appointment-table tbody");

    if (!searchInput || !tableBody) return;

    var searchText = searchInput.value.trim().toLowerCase();
    var rows = tableBody.getElementsByTagName("tr");
    var matchedCount = 0;

    for (var i = 0; i < rows.length; i++) {
        var rowData = rows[i].textContent.toLowerCase();

        if (searchText === "" || rowData.indexOf(searchText) !== -1) {
            rows[i].style.display = "";
            matchedCount++;
        } else {
            rows[i].style.display = "none";
        }
    }

    if (noResultSpan) {
        if (matchedCount === 0) {
            noResultSpan.innerHTML = "No doctor found matching \"" + searchInput.value.trim() + "\".";
        } else {
            noResultSpan.innerHTML = "";
        }
    }
}

// Remove Doctor Row
function removeDoctorRow(linkElement) {
    var row = linkElement.closest("tr");
    if (!row || !row.parentNode) return;

    var doctorName = row.cells[0] ? row.cells[0].textContent.trim() : "this doctor";
    var confirmed = confirm("Are you sure you want to remove " + doctorName + "?");

    if (confirmed) {
        row.parentNode.removeChild(row);
        searchDoctors();
    }
}

// Check Patient Details Search & DOM Filtering
function searchPatientDetails(event) {
    if (event) {
        event.preventDefault();
    }

    var searchInput = document.getElementById("patientId");
    var noResultSpan = document.getElementById("patientNoResult");
    var tableBody = document.querySelector(".details-container .appointment-table tbody");

    if (!searchInput || !tableBody) return false;

    var query = searchInput.value.trim().toLowerCase();
    var rows = tableBody.getElementsByTagName("tr");
    var matchedCount = 0;

    for (var i = 0; i < rows.length; i++) {
        var rowText = rows[i].textContent.toLowerCase();

        if (query === "" || rowText.indexOf(query) !== -1) {
            rows[i].style.display = "";
            matchedCount++;
        } else {
            rows[i].style.display = "none";
        }
    }

    if (noResultSpan) {
        if (matchedCount === 0) {
            noResultSpan.innerHTML = "No patient found matching \"" + searchInput.value.trim() + "\".";
        } else {
            noResultSpan.innerHTML = "";
        }
    }
    return false;
}

// Manage Receptionist Search & DOM Row Removal
function searchReceptionists() {
    var searchInput = document.getElementById("receptionistSearchInput");
    var noResultSpan = document.getElementById("receptionistNoResult");
    var tableBody = document.querySelector(".manage-container .appointment-table tbody");

    if (!searchInput || !tableBody) return;

    var query = searchInput.value.trim().toLowerCase();
    var rows = tableBody.getElementsByTagName("tr");
    var matchedCount = 0;

    for (var i = 0; i < rows.length; i++) {
        var rowText = rows[i].textContent.toLowerCase();

        if (query === "" || rowText.indexOf(query) !== -1) {
            rows[i].style.display = "";
            matchedCount++;
        } else {
            rows[i].style.display = "none";
        }
    }

    if (noResultSpan) {
        if (matchedCount === 0) {
            noResultSpan.innerHTML = "No receptionist found matching \"" + searchInput.value.trim() + "\".";
        } else {
            noResultSpan.innerHTML = "";
        }
    }
}

function removeReceptionistRow(linkElement) {
    var row = linkElement.closest("tr");
    if (!row || !row.parentNode) return;

    var receptionistName = row.cells[0] ? row.cells[0].textContent.trim() : "this receptionist";
    var confirmed = confirm("Are you sure you want to remove " + receptionistName + "?");

    if (confirmed) {
        row.parentNode.removeChild(row);
        searchReceptionists();
    }
}