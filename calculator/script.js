let first_num = "";
let second_num = "";
let result = "";
let adding = false;
let substracting = false;
let multiplying = false;
let dividing = false;
let decimals_first = false;
let decimals_second = false;

function add(num1,num2){
    return num1+num2;
}

function substract(num1,num2){
    return num1-num2;
}

function multiply(num1,num2){
    return num1*num2;
}

function divide(num1,num2){
    return num1/num2;
}

function toAdd(){
    if(result.length+1 >13)
        result = "TooManyChars";
    else
        result += "+";
    
    document.getElementById("display").textContent = `${result}`;
    adding = true;
}

function toSubstract(){
    if(result.length+1 >13)
        result = "TooManyChars";
    else
        result += "-";
    
    document.getElementById("display").textContent = `${result}`;
    substracting = true;
}

function toMultiply(){
    if(result.length+1 >13)
        result = "TooManyChars";
    else
        result += "*";
    
    document.getElementById("display").textContent = `${result}`;
    multiplying = true;
}

function toDivide(){
    if(result.length+1 >13)
        result = "TooManyChars";
    else
        result += "/";
    
    document.getElementById("display").textContent = `${result}`;
    dividing = true;
}

function numberZeroClicked(){
    if(!(adding||substracting||multiplying||dividing)){
        first_num += "0";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "0";
    }
    else{
        second_num += "0";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "0";
    }
    
    document.getElementById("display").textContent = `${result}`;
}

function numberOneClicked(){
    if(!(adding||substracting||multiplying||dividing)){
        first_num += "1";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "1";
    }else{
        second_num += "1";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "1";
    }
    
    document.getElementById("display").textContent = `${result}`;
}

function numberTwoClicked(){
    if(!(adding||substracting||multiplying||dividing)){
        first_num += "2";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "2";
    }else{
        second_num += "2";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "2";
    }
    
    document.getElementById("display").textContent = `${result}`;
}

function numberThreeClicked(){
    if(!(adding||substracting||multiplying||dividing)){
        first_num += "3";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "3";
    }else{
        second_num += "3";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "3";
    }
    
    document.getElementById("display").textContent = `${result}`;
}

function numberFourClicked(){
    if(!(adding||substracting||multiplying||dividing)){
        first_num += "4";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "4";
    }else{
        second_num += "4";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "4";
    }
    
    document.getElementById("display").textContent = `${result}`;
}

function numberFiveClicked(){
    if(!(adding||substracting||multiplying||dividing)){
        first_num += "5";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "5";
    }else{
        second_num += "5";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "5";
    }
    
    document.getElementById("display").textContent = `${result}`;
}

function numberSixClicked(){
    if(!(adding||substracting||multiplying||dividing)){
        first_num += "6";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "6";
    }else{
        second_num += "6";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "6";
    }
    
    document.getElementById("display").textContent = `${result}`;
}

function numberSevenClicked(){
    if(!(adding||substracting||multiplying||dividing)){
        first_num += "7";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "7";
    }else{
        second_num += "7";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "7";
    }
    
    document.getElementById("display").textContent = `${result}`;
}

function numberEightClicked(){
    if(!(adding||substracting||multiplying||dividing)){
        first_num += "8";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "8";
    }else{
        second_num += "8";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "8";
    }
    
    document.getElementById("display").textContent = `${result}`;
}

function numberNineClicked(){
    if(!(adding||substracting||multiplying||dividing)){
        first_num += "9";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "9";
    }else{
        second_num += "9";
        if(result.length+1 >13)
            result = "TooManyChars";
        else
            result += "9";
    }
    
    document.getElementById("display").textContent = `${result}`;
}

function decimalClicked(){
    if(!(adding||substracting||multiplying||dividing)){
        if(!decimals_first){
            first_num += ".";
            if(result.length+1 >13)
                result = "TooManyChars";
            else
                result += ".";
            decimals_first = true;
            document.getElementById("display").textContent = `${result}`;
        }
    }else{
        if(!decimals_second){
            second_num += ".";
            if(result.length+1 >13)
                result = "TooManyChars";
            else
                result += ".";
            decimals_second = true;
            document.getElementById("display").textContent = `${result}`;
        }
    }
}

function ACCLicked(){
    first_num = "";
    second_num = "";
    adding = false;
    substracting = false;
    dividing = false;
    multiplying = false;
    decimals_first = false;
    decimals_second = false;
    result = "";
    document.getElementById("display").textContent = "Numbers Here";
}

function operate(){
    if(adding){
        result = add(Number(first_num),Number(second_num));
        first_num = result;
        second_num = "";
        adding = false;
        decimals_second = false;
    }else if (substracting){
        result = substract(Number(first_num),Number(second_num));
        first_num = result;
        second_num = "";
        substracting = false;
        decimals_second = false;
    }else if (multiplying){
        result = multiply(Number(first_num),Number(second_num));
        first_num = result;
        second_num = "";
        multiplying = false;
        decimals_second = false;
    }else if (dividing){
        result = divide(Number(first_num),Number(second_num));
        first_num = result;
        second_num = "";
        dividing = false;
        decimals_second = false;
    }

    document.getElementById("display").textContent = `${result}`;
}
