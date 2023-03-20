const convertBtn = document.getElementById("convert-btn")
const lengthOut = document.getElementById("length-output")
const volumeOut = document.getElementById("volume-output")
const massOut = document.getElementById("mass-output")

convertBtn.addEventListener("click", function() {
    let value = document.querySelector('input').value
    length = Math.round(value * 10) / 10
    length1 = Math.round(value * 3.28084 * 10) / 10
    length2 = Math.round(value / 3.28084 * 10) / 10
    lengthOut.innerHTML = `${length} meters = ${length1} feet
    <br> 
    ${length} feet = ${length2} meters`

    volume = Math.round(value * 10) / 10
    volume1 = Math.round(value * 0.264172 * 10) / 10
    volume2 = Math.round(value / 0.264172 * 10) / 10
    volumeOut.innerHTML = `${volume} liters = ${volume1} gallons
    <br> 
    ${volume} gallons = ${volume2} liters`

    mass = Math.round(value * 10) / 10
    mass1 = Math.round(value * 2.20462262185 * 10) / 10
    mass2 = Math.round(value / 2.20462262185 * 10) / 10
    massOut.innerHTML = `${mass} kilograms = ${mass1} pounds
    <br> 
    ${mass} pounds = ${mass2} kilograms`
})

