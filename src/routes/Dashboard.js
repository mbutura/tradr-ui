import '../theme.css';
import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useEffect } from 'react';
import { useNavigate, Fragment } from "react-router-dom";

const Dashboard = ({value}) => {
    console.log(`Dashboard value: ${value}`)
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
            console.log(balances)
        } else if (response['status'] === 401){
            navigate("/login");
        }
        //Ideally we should handle other cases here
    }

    // eslint-disable-next-line
    useEffect(() => {
        RenderBalanceData();
    }, [RenderBalanceData]);

    return (
    <>
        <Header value={value}/>
        <div className="login-background extend-height vertical-center ">
            <div class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
        <Footer />
    </>
    );
};

export default Dashboard;