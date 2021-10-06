import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

class User extends React.Component {
    render() {
        return (
            <div>
                <nav className="main-nav">
                    <Header />
                    <div>
                        <Link to={`/user`}>
                            <div className="main-nav-item">
                                <i className="fa fa-user-circle"></i>
                                <p>Tony</p>
                            </div>
                        </Link>
                        <Link to={`/home`}>
                            <div className="main-nav-item">
                                <i className="fa fa-user-circle"></i>
                                <p>Sign Out</p>
                            </div>
                        </Link>
                    </div>
                </nav>
                <main className="main bg-dark">
                    <div className="header">
                        <h1>Welcome back<br/>Tony Jarvis!</h1>
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
}

export default User;