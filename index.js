//  Gets value and id element
function addScore(inputScore, inputElId)
{
    //  Grabs element ID from string parameter
    let elemId = document.getElementById(inputElId);
    //  Grabs content in element id and parses to int value
    let elemValue = parseInt(elemId.textContent);
    
    //  Adds score parameter to current value
    elemValue += inputScore
    
    //  Updates value in html document
    elemId.textContent = elemValue;
    
    /*
    console.log(inputScore);
    console.log(elemId);
    
    console.log(elemValue);
    */
}

function resetScore(inputElId)
{
    document.getElementById(inputElId).textContent = 0;
}