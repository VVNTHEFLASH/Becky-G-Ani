function generateRandomColor(){
    return '#'+ Math.floor(Math.random()*16777215).toString(16);
}

function changeBackgroundColor(){
    let colorBg = document.getElementById("color-ovarlay");
    colorBg.style.backgroundColor = generateRandomColor();
}

function changeBgText(){
    let textBg = document.getElementById("text-bg");
    if(textBg.innerHTML == "BECKY G")
        textBg.innerHTML = "FROM THE BLOCK";
    else if(textBg.innerHTML == "FROM THE BLOCK")
        textBg.innerHTML = "ALL AROUND THE WORLD"; 
    else if(textBg.innerHTML == "ALL AROUND THE WORLD")
        textBg.innerHTML = "BECKY G";
}

function checkBg(){
    generateRandomColor();
    changeBackgroundColor();
    changeBgText();
}

setInterval(checkBg,500);
