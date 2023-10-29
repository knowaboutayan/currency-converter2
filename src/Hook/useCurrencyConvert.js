import { useEffect, useState } from "react";

const useCurrencyConverter = (fromCurrency) => {
    const [data, setData] = useState([]);

    const apiResponse = async () => {
        try {
            const response = await fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_1aMFSOBXrr4w25bjBEEBTk9C0NryWuX4odHxRRZD&currencies=&base_currency=${fromCurrency}`);
            const myData = await response.json();
            if(!response.ok) return 'err';
            console.log(myData.data)
            setData(myData.data);
        } catch (error) {
           return 'err'
        }
    };

    useEffect(() => {
        apiResponse(); // Invoke the function within the useEffect
    }, [fromCurrency]); // Add fromCurrency as a dependency

    return data;
};

export default useCurrencyConverter;
