function BMI (weight = 80,height = 1.80 ){
    let result = weight / (height * height);
    return result;
}
console.log(BMI(weight,height));
console.log(BMI());


function Status (bmi){
if (bmi < 18.5){
    document.getElementById("result").style.color = "orange";
    return(" لديك نقص في الوزن")   
} 

else if (bmi >= 18.5 && bmi < 25){
    document.getElementById("result").style.color = "green";
    return("وزنك صحي")
}

else{
    document.getElementById("result").style.color = "red";
    return("لديك زيادة في الوزن")    
}
}

function calculate (){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    let bmi = BMI(weight,height);

    let desc = Status(bmi);

    let div = document.getElementById("result");
    div.innerText = bmi + "==" +desc             
}