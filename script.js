function inputNumber(number) {
    const passcodeField = document.getElementById('passcode');
    if (passcodeField.value.length < passcodeField.maxLength) {
        passcodeField.value += number;
    }
}

function clearInput() {
    document.getElementById('passcode').value = '';
}

function validatePasscode() {
    const passcode = document.getElementById('passcode').value;
    const correctPasscode = '60904'; // Correct passcode

    if (passcode === correctPasscode) {
        window.location.href = 'https://jeki33.github.io/j/index.html'; // Replace with your target URL
    } else {
        alert('Passcode incorrect, please try again!');
    }
}