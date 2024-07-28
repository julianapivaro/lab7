function calculateSquareRoot() {
    let number = document.getElementById("numberInput").value;
    let result = Math.sqrt(number);
    document.getElementById("result").innerText = "The square root of " + number + " is " + result;
}
