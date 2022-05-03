function obtener(){

const usdAmount = document.getElementById('usd-amount');
const change24 = document.getElementById('change');
const symbol = document.getElementById('symbol');

fetch('https://api.coincap.io/v2/assets')
    .then(response => response.json())
    .then(datos => displayData(datos));

const displayData = datos => {
  console.log(datos)
    const usd = Math.round(datos.data[0].priceUsd * 100) / 100;
    usdAmount.textContent = `$${usd} USD `;
    const symbol1 = datos.data[0].symbol;
    symbol.textContent = `${symbol1} `;
    const chg = Math.round(datos.data[0].changePercent24Hr * 100) / 100;
    if (chg == 0) {
      document.getElementById('change').style.color = "white"
      change24.textContent = `${chg} % `;  
    } else if (chg > 0) {
        document.getElementById('change').style.color = "green";
        change24.textContent = `${chg} % `;
    } else {
        document.getElementById('change').style.color = "red";
        change24.textContent = `${chg} % `;
    }
    
    
}
}
setInterval(obtener, 3000)