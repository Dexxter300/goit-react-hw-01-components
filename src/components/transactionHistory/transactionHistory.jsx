import css from './transactions.module.css'
import PropTypes from "prop-types";


export const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{ item.type}</td>
                            <td>{item.amount}</td>
                            <td>{ item.currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array
}