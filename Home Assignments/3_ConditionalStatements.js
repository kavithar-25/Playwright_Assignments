 function launchBrowser(browserName) {
    if (browserName === "Chrome") {
        console.log("The browser is chrome");
    } else {
        console.log("Other browser");
    }
}
function runTests(testType) {
    switch (testType) {
        case "Smoke":
            console.log("The testType is Smoke")
            break;
            case "Sanity":
            console.log("The testType is Sanity")
            break;
            case "Regression":
            console.log("The testType is Regression")
            break;
    default:
        console.log("The testType is Smoke")
            break;
    }
}
launchBrowser("Chrome")
launchBrowser("msedge")
runTests("Unit")
runTests("Regression")