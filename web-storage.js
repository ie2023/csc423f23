// web storage example
const playerNameWidget      = document.getElementById("playerName");
const difficultyLevelWidget = document.getElementById("difficultyLevel");
        
if (localStorage.getItem("playerName")) {                
   playerNameWidget.value      = localStorage.getItem("playerName");
   difficultyLevelWidget.value = localStorage.getItem("difficultyLevel");
}


document.getElementById("saveBtn").addEventListener("click", function() {
        localStorage.setItem("playerName", playerNameWidget.value);
        localStorage.setItem("difficultyLevel", difficultyLevelWidget.value);
    });