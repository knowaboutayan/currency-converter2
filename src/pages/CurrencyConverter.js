import { useEffect, useState } from "react";
import Input from "../components/Input"
import useCurrencyConvert from "../Hook/useCurrencyConvert";
import ErrorPage from "./ErrorPage";
import "./CurrencyConverter.css"

const CurrencyConverter = () => {
    let [fromAmount, setFromAmount] = useState("");
    let [toAmount, setToAmount] = useState("");

    let [fromCurrency, setFromCurrency] = useState("USD");
    let [toCurrency, setToCurrency] = useState("INR");
    const currencyData = useCurrencyConvert(fromCurrency);
    const options = Object.keys(currencyData);

    const swapCurrency = () => {


        // Use a temporary variable to hold the value of fromCurrency


        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);

    }



    const calcu = () => {
        let x = fromAmount * currencyData[toCurrency]
        setToAmount(x);
    }

    useEffect(() => calcu(), [toAmount, toCurrency, fromAmount, fromCurrency, swapCurrency, calcu]);
    return (
        <div className="converter-container">
            <h1>Currency Converter</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="input-container">
                    <label className="input-label">Enter amount:</label>
                    <Input className="input-field" title="Enter amount" amount={fromAmount} setAmount={(from) => setFromAmount(from)} currency={fromCurrency} setCurrency={(from) => setFromCurrency(from)} disabledStatus={false} currancyOptions={options} currentState={toCurrency} />
                </div>
                <button onClick={swapCurrency}>Swap</button>
                <div className="input-container">
                    <label className="input-label">Converted Amount:</label>
                    <Input className="input-field" title="Converted Amount" amount={toAmount} currency={toCurrency} setCurrency={(to) => setToCurrency(to)} disabledStatus={true} currancyOptions={options} currentState={fromCurrency} />
                </div>
                <button onClick={calcu}>Convert</button>
            </form>
        </div>
    )
}
export default CurrencyConverter;