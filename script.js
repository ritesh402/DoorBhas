function dialNumber(number) {
    let inputField = document.getElementById("phoneNumber");
    inputField.value += number;
}

function showCallingScreen() {
    var number = document.getElementById("phoneNumber").value;
    if (number) {
        document.getElementById("callNumber").innerText = number;
        document.getElementById("callingScreen").classList.remove("hidden");
        setTimeout(makeCall, 3000); // Delay for smooth transition
    } else {
        alert("Please enter a phone number!");
    }
}

function makeCall() {
    var number = document.getElementById("phoneNumber").value;
    window.location.href = "tel:" + number;
}

function endCall() {
    document.getElementById("callingScreen").classList.add("hidden");
}
