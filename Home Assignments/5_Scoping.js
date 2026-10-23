let genderType= "male"
function printGender() {
    let color = "brown"
    if (genderType.startsWith("female")) {
        var age = 30
        let color = "Pink"
        console.log("color inside if block:", color)
        }
    else {
        var age = 35
        console.log("Color inside else-block:", color)
    }
    console.log("Age outside if-block:", age)
}
printGender()
console.log("Global genderType:", genderType)
