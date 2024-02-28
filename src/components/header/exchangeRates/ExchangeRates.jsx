import './exchangerates.style.scss'

const ExchangeRates = () => {
  return (
    <div className='exchange-container'>
        <div>
            <img src="/img/fa_usd.png" alt="USD" />   
            <span>510</span>
        </div>
        <div>
            <img src="/img/bx_ruble.png" alt="RUB" />   
            <span>510</span>
        </div>
        <div>
            <img src="/img/tabler_currency-dram.png" alt="Dram" />   
            <span>510</span>
        </div>
        <div>
            <img src="/img/ic_outline-euro.png" alt="EUR" />   
            <span>510</span>
        </div>   
        <hr/>
    </div>
  )
}

export default ExchangeRates