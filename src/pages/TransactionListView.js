import React from 'react';
import TransactionView from "../components/TransactionView";

const TransactionList = ({ transactions }) => {

    const transactionList = transactions.map(transaction => <TransactionView key={transaction.id} transaction={transaction} />);

    return (

        <div>

            <h2>Transactions</h2>

            <div>

                {transactionList}

            </div>

        </div>

    );
}

export default TransactionList;