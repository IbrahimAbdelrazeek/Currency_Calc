function convert() {
    const amount = document.getElementById('amount').value;
    const sourceCurrency = document.getElementById('sourceCurrency').value;
    const targetCurrency = document.getElementById('targetCurrency').value;

    fetch(`https://api.exchangerate-api.com/v4/latest/${sourceCurrency}`)
        .then(response => response.json())
        .then(data => {
            const exchangeRate = data.rates[targetCurrency];
            const result = amount * exchangeRate;
            document.getElementById('result').innerText = `${amount} ${sourceCurrency} = ${result.toFixed(2)} ${targetCurrency}`;
        })
        .catch(error => console.error('Error:', error));
}