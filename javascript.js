


function calculator(){
    var firstNumber = parseInt(document.getElementById("number1").value);
    var secondNumber = parseInt(document.getElementById("number2").value);
    var operator = document.getElementById("op").value;
    var result = document.getElementById("result");
    var total;


    if (isNaN(firstNumber) || isNaN(secondNumber)){
        alert(" isiin kolomnya dengan number tolol")
    }
    else{
        if (operator == "+"){
            total = firstNumber+secondNumber;
        }
        else if (operator == "-"){
            total = firstNumber-secondNumber;
        }
        else if (operator == "*"){
            total = firstNumber*secondNumber;
        }
        else if (operator == "/"){
            total = firstNumber/secondNumber;
        }
    }
    result.value = total;
}

