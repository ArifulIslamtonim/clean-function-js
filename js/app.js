function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId);
    const valueText = inputField.value;
    const value = parseFloat(valueText);
    inputField.value = '';
    return value;
}
function updateTotal(fieldId, amount) {
    // const totalTag  = document.getElementById(fieldId);
    // const totalTagInput = totalTag.innerText;
    // const previousTotal = parseFloat(totalTagInput);
    const previousTotal = getInnerTextValue(fieldId);
    const newTotal = previousTotal + amount;
    document.getElementById(fieldId).innerText = newTotal;
    return newTotal;
}
function getInnerTextValue(fieldId) {
    const fieldTag = document.getElementById(fieldId);
    const fieldValueText = fieldTag.innerText;
    const value = parseFloat (fieldValueText);
    return value;
}
function updateBalance(amount, isAdd) {
    // const balanceTag = document.getElementById('balance-total');
    // const balanceText = balanceTag.innerText;
    // const previousBalance = parseFloat(balanceText);
    const previousBalance = getInnerTextValue ('balance-total');
    let newbalance;
    if(isAdd == true) {
         newbalance = previousBalance + amount;
    }
    else {
        newbalance = previousBalance - amount;
    }
   
    document.getElementById('balance-total').innerText = newbalance;
}
document.getElementById('deposit-btn').addEventListener('click', function (){
  const amount =  getInputValue('deposit-input');
  if (amount > 0){
    updateTotal('deposit-total', amount);
    updateBalance(amount, true);
  }
});

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const amount = getInputValue ('withdraw-input');
    const balance = getInnerTextValue ('balance-total');
    if(amount > 0 && amount <= balance){
        updateTotal('withdraw-total', amount);
        updateBalance(amount, false);
    }
});