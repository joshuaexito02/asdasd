const display = document.getElementById("display");



function appendToDisplay (input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate (){
    try{
        let result = eval (display.value);
        if (result ==2) {
            display.value = "I Miss You :<"
        } else {
            display.value = "Balik kana pls";
        }
        if (result == 3) {
            display.value = "I Love You <3"
        }
        if (result == 4) {
            display.value = "4 u only <3"
        }
    } 
    catch (error) {
        display.value = "Error"
    }
}