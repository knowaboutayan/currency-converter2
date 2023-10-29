const Input = ({ amount, title, setAmount, currency = 'usd', setCurrency, disabledStatus = "false", currancyOptions = [],currentState }) => {
    return (
        <div >
            <div className="money-input-container"><i class="fa fa-money" aria-hidden="true"></i>
                <input className="money-input" type="number" value={amount} onChange={(event) => setAmount(event.target.value)} placeholder={title} disabled={disabledStatus} />
                <select className="currency-select" value={currency} onChange={(event) => setCurrency(event.target.value)}>
                    {
                        currancyOptions.map((item) => {if(item!==currentState) return <option value={item} key={item}>{item}</option>})}
                </select>
            </div>
        </div>
    )
}
export default Input;