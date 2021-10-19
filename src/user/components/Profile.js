import React, { useEffect, useState } from "react";
import ProfileHeader from "./ProfileHeader";
import Footer from "../../app/components/Footer";
import userService from "../userService";
import { useDispatch, useSelector } from "react-redux";
import { setInfos } from "../userSlice";

function Profile() {
    const token = useSelector((state) => state.user.token);
    const fullName = useSelector((state) => state.user.infos.firstName + ' ' + state.user.infos.lastName);
    const dispatch = useDispatch();

    useEffect(() => {
        const getInfos = async () => {
            const userData = await userService.getInfos(token);
            const { email, firstName, lastName, id } = userData;
            const infos = { email, firstName, lastName, id };
            dispatch(setInfos(infos));
        }
        getInfos();
    }, [token]);

    return (
        <div>
            <ProfileHeader />
            <main className="main bg-dark">
                <div className="header">
                    <h1>Welcome back<br/>{fullName}!</h1>
                    <button className="edit-button">Edit Name</button>
                </div>
                <h2 className="sr-only">Accounts</h2>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                        <p className="account-amount">$2,082.79</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                        <p className="account-amount">$10,928.42</p>
                        <p className="account-amount-description">Available Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
                <section className="account">
                    <div className="account-content-wrapper">
                        <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                        <p className="account-amount">$184.30</p>
                        <p className="account-amount-description">Current Balance</p>
                    </div>
                    <div className="account-content-wrapper cta">
                        <button className="transaction-button">View transactions</button>
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Profile;