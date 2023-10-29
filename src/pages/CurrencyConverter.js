import { useCallback,  useState } from "react";
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

    const convert = () => {
        let x = fromAmount * currencyData[toCurrency]
        setToAmount(x);
    }

    const swapCurrency = useCallback(() => {
        // Use a temporary variable to hold the value of fromCurrency

        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setFromAmount(toAmount)
        setToAmount(fromAmount)

    }, [fromCurrency,toCurrency,toAmount,fromAmount]);


    if (currencyData === 'err') {
        return <ErrorPage />
    }
    return (
        <div className="converter-container">
            <h1>Currency Converter</h1>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="input-container">
                    <label className="input-label">Enter amount:</label>
                    <Input className="input-field" title="Enter amount" amount={fromAmount} setAmount={(from) => setFromAmount(from)} currency={fromCurrency} setCurrency={(from) => setFromCurrency(from)} disabledStatus={false} currancyOptions={options} currentState={toCurrency} />
                </div>
                <button onClick={swapCurrency} className="swap"><i className="fa fa-exchange "/></button>
                <div className="input-container">
                    <label className="input-label">Converted Amount:</label>
                    <Input className="input-field" title="Converted Amount" amount={toAmount} currency={toCurrency} setCurrency={(to) => setToCurrency(to)} disabledStatus={true} currancyOptions={options} currentState={fromCurrency} />
                </div>
                <button onClick={convert}>Convert {fromCurrency} to {toCurrency}</button>
            </form>
        </div>
    )
}
export default CurrencyConverter;