function addScore(inputScore, inputElId)
{
    let elemId = document.getElementById(inputElId);
    let elemValue = parseInt(elemId.textContent);

    elemValue += inputScore
    
    elemId.textContent = elemValue;
}

function resetScore(inputElId)
{
    document.getElementById(inputElId).textContent = 0;
}