const inputEl = document.getElementById("input-element")
const convertBtn = document.getElementById("convert-btn")
const convBlock = document.getElementById("convert-block")
let inputElNumber = Number(inputEl.value)

const measures = [{
    magnitude:"Length",
    unitEU:"meter",
    unitUS:"feet",
    conversion: 3.281
},
{   
    magnitude:"Volume",
    unitEU:"liter",
    unitUS:"gallon",
    conversion: 0.264
},
{   
    magnitude:"Mass",
    unitEU:"kilo",
    unitUS:"pound",
    conversion: 2.204
}
]

inputEl.value = '1'

convertBtn.addEventListener("click", function (){
    inputElNumber = Number(inputEl.value)
    renderItems()
})

function renderItems(){
    
    let allDivs = ""
    for (let i = 0; i < measures.length; i ++){
        allDivs += divGenerator(i)
    }
    convBlock.innerHTML = allDivs 
}
function converter(){
    let converted = []
    for(let i = 0; i < measures.length; i++){
        converted.push(`${inputElNumber} ${measures[i].unitEU}s = ${(inputElNumber*measures[i].conversion).toFixed(3)} ${measures[i].unitUS}s | ${inputElNumber} ${measures[i].unitUS}s = ${(inputElNumber/measures[i].conversion).toFixed(3)} ${measures[i].unitEU}s`)
    }

    return converted
}

function divGenerator(arrIndex){
    let generatedDiv = ""
    if(measures[arrIndex].magnitude ==='Length'){
        generatedDiv = `
        <div class="converted-block">
            <h2>Length (Meter/Feet)</h2>
            <p>${converter()[arrIndex]}</p>
        </div>
        `
    } else if (measures[arrIndex].magnitude ==='Volume'){
        generatedDiv = `
        <div class="converted-block">
            <h2>Volume (Liters/Gallons)</h2>
            <p>${converter()[arrIndex]}</p>
        </div>
        `
    } else {
        generatedDiv = `
        <div class="converted-block">
            <h2>Mass (Kilograms/Pounds)</h2>
            <p>${converter()[arrIndex]}</p>
        </div>
        `
    }

    return generatedDiv
}

function clearDom() {
    convBlock.innerHTML = null
}

renderItems()
