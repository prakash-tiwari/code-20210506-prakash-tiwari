import  { config as input } from './src/config';
import { bmiCategory } from "./src/bmiCategory";
import  { healthRisk }  from './src/healthRisk'


var calculateBMI = [];
var countOverWeight = 0;

for(var i in input){
    let heightInMeter = input[i].HeightCm/100; // to get the values in meter
    let weightInKg = input[i].WeightKg; 
    let calBMI = (weightInKg/(heightInMeter*heightInMeter)); // calculating the Body Mass Index


    //here is the logic as per the BMI Range
    if(calBMI <= 18.4){
        calculateBMI.push({
            input : input[i], 
            bmi : calBMI, 
            bmiCategory : bmiCategory.Under_Weight, 
            healthRisk: healthRisk.Malnutrition_Risk,
            overWeight : false
        });        
    }
    else if(18.5 <= calBMI && calBMI <= 24.9){        
        calculateBMI.push({
            input : input[i], 
            bmi : calBMI, 
            bmiCategory : bmiCategory.Normal_Weight, 
            healthRisk: healthRisk.Low_Risk,
            overWeight : false
        });
    }
    else if(25 <= calBMI && calBMI <= 29.9) {
         calculateBMI.push({
            input : input[i], 
            bmi : calBMI, 
            bmiCategory : bmiCategory.Over_Weight, 
            healthRisk: healthRisk.Enhanced_Risk,
            overWeight : true
        });
    }
    else if(30 <= calBMI && calBMI <= 34.9) {
         calculateBMI.push({
            input : input[i], 
            bmi : calBMI, 
            bmiCategory : bmiCategory.Moderately_Obese, 
            healthRisk: healthRisk.Medium_Risk,
            overWeight : true
        });       
    }
    else if(35 <= calBMI && calBMI <= 39.9) {
        calculateBMI.push({
            input : input[i], 
            bmi : calBMI, 
            bmiCategory : bmiCategory.Severely_Obese, 
            healthRisk: healthRisk.High_Risk,
            overWeight : true
        });
    }
    else if(calBMI >= 40) {
       calculateBMI.push({
            input : input[i], 
            bmi : calBMI, 
            bmiCategory : bmiCategory.Very_Severely_Obese, 
            healthRisk: healthRisk.Very_High_Risk,
            overWeight : true
        });
    }  

    // To count the total number of overweight peoples...
    if(calculateBMI[i].overWeight=== true){
        countOverWeight++;
    }
}

console.log("Modified Input is: ",calculateBMI);
console.log("Total number of over weight people is: ",countOverWeight)



