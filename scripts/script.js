function SearchPaint () {
    searchField = document.getElementById("textInput").value.toLowerCase();
    let currentString;
    for (let i = 1; i <= 4; i++) {
        currentString = document.getElementById(`nameCard${i}`).innerHTML.toLowerCase();
        if (currentString.indexOf(searchField) + 1) {
            document.getElementById(`card-${i}`).style.display = "inline-block";
        } else {
            document.getElementById(`card-${i}`).style.display = "none";
        }
    }
}

let searchField;
let button = document.getElementById("buttonInput");
let other = document.getElementById("textInput");

button.addEventListener('click', SearchPaint);
other.addEventListener('keydown', (e) => {
    if (e.key === "Enter") button.click();
});