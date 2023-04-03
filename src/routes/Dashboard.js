import '../theme.css';
import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useState, useEffect } from 'react';
import { useNavigate, Fragment } from "react-router-dom";

const Dashboard = ({value}) => {
    const [data, setData] = useState([]);

    const navigate = useNavigate();
    
    // eslint-disable-next-line
    const RenderBalanceData = async() => {
        let balances = undefined
        let response = undefined
        try {
            console.log('fetch')
            response = await fetch("/balances")
        } catch (error){
            console.log("errors")
        }

        // Uses the 'optional chaining' operator
        if (response?.ok) {
            balances = await response.json();
            setData(balances)
        } else if (response['status'] === 401){
            navigate("/login");
        }
        //Ideally we should handle other cases here
    }

    // eslint-disable-next-line
    useEffect(() => { RenderBalanceData()}, [RenderBalanceData]);

    const tableRows = data.map((row, index) => (
        <tr key={index}>
          <td>{row.ticker_label}</td>
          <td>{row.amount}</td>
        </tr>
      ));

    return (
    <>
        <Header value={value}/>
        <div className="login-background extend-height vertical-center ">
        <table className="table table-light">
            <thead>
                <tr>
                <th>Ticker Label</th>
                <th>Balance amount</th>
                </tr>
            </thead>
            <tbody>
                {tableRows}
            </tbody>
        </table>
        </div>
        <Footer />
    </>
    );
};

export default Dashboard;