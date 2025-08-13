let operand1, operand2;

function displayInput(val) {
    const display = document.querySelector("#input");
    if (val === "CLEAR") {
        display.textContent = "";
    }
    else if (val === "=") {
        filterInput();
    }
    else if (val === "+ " || val === "- " || val === "* " || val === "/ ") {
        display.textContent = display.textContent + " " + val;
    }
    
    else display.textContent = display.textContent + val;
}

function layout() {
    const layout = [
        ["7", "8", "9", "/ "],
        ["4", "5", "6", "* "],
        ["1", "2", "3", "- "],
        ["+ ", "0", "=", "CLEAR"]
    ];

    const container = document.querySelector(".buttons");

    layout.forEach(row => {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("row");

        row.forEach(label =>{
            const btnDiv = document.createElement("div");
            const btn = document.createElement("button");

            btnDiv.classList.add("btnDiv");
            btn.classList.add("btn");
            btnDiv.appendChild(btn);
            btn.textContent = label;
            btn.addEventListener("click", (e) => {
                displayInput(e.target.textContent);
            });
            
            rowDiv.appendChild(btnDiv);
        })
        container.appendChild(rowDiv);
    })
}

function filterInput() {
    const display = document.querySelector("#input");
    let string = display.textContent;
    let arr = string.split(" ");

    operand1 = arr[0];
    operand2 = arr[2];
    if(operand2 === "") alert("Enter second operand!");
    operate(operand1, arr[1], operand2);
}

function operate(a, operator, b) {
    let ans;
    const resultDiv = document.querySelector("#result");
    const inputDiv = document.querySelector("#input");
    if (operator == '+') ans = a + b;
    else if (operator == '-') ans = a - b;
    else if (operator == '*') ans = a * b;
    else if (operator == '/') ans = (a / b).toFixed(4);

    resultDiv.textContent = ans;
    inputDiv.textContent = ans;
}



layout();