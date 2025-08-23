document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value
    const addamount = parseInt(document.getElementById('add-amount').value)
    const addPin = document.getElementById('add-pin').value
    

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    const totalNewAvalableBalance = addamount + availableBalance;
    
    document.getElementById('available-balance').innerText = totalNewAvalableBalance;
})