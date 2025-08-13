function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a/b;
}

function layout() {
    const layout = [
        ["7", "8", "9", "/"],
        ["4", "5", "6", "*"],
        ["1", "2", "3", "-"],
        ["+", "0", "=", "CLEAR"]
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
            rowDiv.appendChild(btnDiv);
        })
        container.appendChild(rowDiv);
    })
}

function operate(a, operand, b) {
    if (operand == '+') return a + b;
    else if (operand == '-') return a - b;
    else if (operand == '*') return a * b;
    else if (operand == '/') return a / b;

}

layout();