/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const meter = 3.281
const liter = 0.264
const kilogram = 2.204

const feet = 0.304
const gallon = 3.785
const pound = 0.453

//                    meter, feet, kiter, gallon, kg,    pound
const totalMetric = [3.281, 0.304, 0.264, 3.785, 2.204, 0.453]

const inputEl = document.getElementById("input-El")
const btnEl = document.getElementById("btn-El")
const metricBox = document.getElementById("metric-box")


boxContent = [["Lenght (Meter/Feet)"], ["Volume (Liters/Gallons)"], ["Mass (Kilograms/Pouds)"]]

function displayHTML() {
    for (let i = 0; i < boxContent.length; i++) {
        metricBox.innerHTML += `
        <div class="conversion-box">
            <h3>${boxContent[i][0]}</h3>
            <p>${boxContent[i][1]}</p>
        </div>
        `
    }
    boxContent = [["Lenght (Meter/Feet)"], ["Volume (Liters/Gallons)"], ["Mass (Kilograms/Pouds)"]]
}

function metricCalculation(value) {
    const conversionResult = []
    for (let i = 0; i < totalMetric.length; i++) {
        conversionResult.push((value * totalMetric[i]).toFixed(3))
    }

    //Lenght
    boxContent[0].push(`${value} meters = ${conversionResult[0]} feet | ${value} feet = ${conversionResult[1]} meters`)
    
    //Volume
    boxContent[1].push(`${value} liters = ${conversionResult[2]} gallons | ${value} gallons = ${conversionResult[3]} liters`)
    
    //Mass
    boxContent[2].push(`${value} kilos = ${conversionResult[4]} pounds | ${value} pounds = ${conversionResult[5]} kilos`)
    
    displayHTML()
}

btnEl.addEventListener("click", function() {
    metricBox.innerHTML = ""
    metricCalculation(inputEl.value)
})

