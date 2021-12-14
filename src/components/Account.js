import React, { Component } from 'react';

class Account extends React.Component {
    state = {
        amount: 0,
    }

    addMoney = () => {
        let inputAmount = document.getElementById("inputAmount").value
        this.setState({ amount: this.state.amount + Number(inputAmount) });
    }

    subMoney = () => {
        let inputAmount = document.getElementById("inputAmount").value
        this.setState({ amount: this.state.amount - Number(inputAmount) });
    }

    render() {
        return (
            <section>
                <h1>Bank</h1>
                <div>
                    <h2>Your Account:</h2>
                    <p style={{
                        color: this.state.amount >= 0 ? 'black' : 'red',
                    }}>{this.state.amount}€</p>
                </div>
                <article>
                    <input type="number" name="amount" id="inputAmount" placeholder="please enter amout" />
                    <div>
                        <button onClick={this.addMoney}>Einzalung</button>
                        <button onClick={this.subMoney}>Auszahlung</button>

                    </div>
                </article>
            </section>
        );
    }
}

export default Account;