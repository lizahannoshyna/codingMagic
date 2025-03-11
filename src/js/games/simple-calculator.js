let operator = null;

document.getElementById("add").addEventListener("click", function() { operator = '+'; });
document.getElementById("subtract").addEventListener("click", function() { operator = '-'; });
document.getElementById("multiply").addEventListener("click", function() { operator = '*'; });
document.getElementById("divide").addEventListener("click", function() { operator = '/'; });

document.getElementById("result").addEventListener("click", function() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let result

    if (!operator) {
        result = "Виберіть операцію!";
    } else if (isNaN(num1) || isNaN(num2)) {
        result = 'Помилка: введіть числа';
    } else {
        switch (operator) {
            case '+': result = num1 + num2; break;
            case '-': result = num1 - num2; break;
            case '*': result = num1 * num2; break;
            case '/': 
                result = num1 / num2
                break;
            default: result = 'Невідома операція';
        }
    }

    document.getElementById('input-result').value = result;
});
