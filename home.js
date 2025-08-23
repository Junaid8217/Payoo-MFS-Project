const validPin = 1234;

document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value
    const addamount = parseInt(document.getElementById('add-amount').value)
    const addPin = parseInt(document.getElementById('add-pin').value)
    

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    if(accountNumber.length < 11){
        alert("Please provide valid account number")
        return;
    }
    if(addPin != validPin ){
        alert("Please provide a valid pin number")
        return;
    }

    const totalNewAvalableBalance = addamount + availableBalance;
    
    document.getElementById('available-balance').innerText = totalNewAvalableBalance;
})

// Cashout money feature

document.getElementById('withdraw-button').addEventListener('click',function(e){
    e.preventDefault();
    const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value)

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    const totalNewAvalableBalance = availableBalance - withdrawAmount;

    document.getElementById('available-balance').innerText = totalNewAvalableBalance;


})







// toggling feature

document.getElementById('add-money-button').addEventListener('click', function(){
    document.getElementById('cashout-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';


})

document.getElementById('cashout-button').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cashout-parent').style.display = 'block';


})