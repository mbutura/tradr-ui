import '../theme.css';
import Footer from "../components/Footer";
import Header from "../components/Header";
import React, { useEffect } from 'react';
import { /*useNavigate,*/ Fragment } from "react-router-dom";

const Dashboard = () => {
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
            console.log('Unauthorized')
        } else {
            console.log('Login error')
        }
    }

    useEffect(() => {
        RenderBalanceData();
    }, []);

    return (
    <>
        <Header />
        <Footer />
    </>
    );
};

export default Dashboard;