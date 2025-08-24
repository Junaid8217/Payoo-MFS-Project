const validPin = 1234;
// (reuseable function)
// function to get input value as number
function getInputNumber(id){
    const inputFieldValueNumber = parseInt(document.getElementById(id).value)
    return inputFieldValueNumber;
}
// function to get input value
function getInputValue(id){
    return document.getElementById(id).value;
}
// function to get inner-text as number
function getInnerText(id){
     return parseInt(document.getElementById(id).innerText)
}
// function to set inner text
function setInnerText(value){
    const availableBalanceElement = document.getElementById('available-balance')
    availableBalanceElement.innerText = value
}
// function to toggle
function handleToggle(id){
    const forms = document.getElementsByClassName('form');
    
    for(const form of forms){
        form.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'
}
// function to toggle button style
function handleButtonStyle(id){
    const formBtn = document.getElementsByClassName('form-btn')
    for(const btn of formBtn){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-200")
    }

    document.getElementById(id).classList.remove("border-gray-200")
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}


document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value
    const addamount = getInputNumber('add-amount')
    
    const addPin = getInputNumber('add-pin')
    

    const availableBalance = getInnerText('available-balance')
    if(accountNumber.length < 11){
        alert("Please provide valid account number")
        return;
    }
    if(addPin != validPin ){
        alert("Please provide a valid pin number")
        return;
    }

    const totalNewAvalableBalance = addamount + availableBalance;
    
   setInnerText(totalNewAvalableBalance)
})

// Cashout money feature

document.getElementById('withdraw-button').addEventListener('click',function(e){
    e.preventDefault();
    const withdrawAmount = getInputNumber('withdraw-amount')

    const availableBalance = getInnerText('available-balance')

    const totalNewAvalableBalance = availableBalance - withdrawAmount;

    setInnerText(totalNewAvalableBalance)


})







// toggling feature

document.getElementById('add-money-button').addEventListener('click', function(){
    handleToggle('add-money-parent')
    handleButtonStyle('add-money-button')
})

document.getElementById('cashout-button').addEventListener('click', function(){
    handleToggle('cashout-parent')
    handleButtonStyle('cashout-button')
})

document.getElementById('transfer-button').addEventListener('click',function(){
    handleToggle('transfer-money-parent')
    handleButtonStyle('transfer-button')
})

document.getElementById('get-bonus-button').addEventListener('click',function(){
    handleToggle('get-bonus-parent')
    handleButtonStyle('get-bonus-button')
})

document.getElementById('pay-bill-button').addEventListener('click',function(){
    handleToggle('pay-bill-parent')
    handleButtonStyle('pay-bill-button')
})

document.getElementById('transaction-button').addEventListener('click',function(){
    handleToggle('transaction-parent')
    handleButtonStyle('transaction-button')
})