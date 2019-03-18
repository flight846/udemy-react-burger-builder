import React from 'react'
import Auxi from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={ igKey }><span style={{ textTransform: 'capitalize' }}>{igKey}</span>: { props.ingredients[igKey] }</li>
        })

    return (
        <Auxi>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                { ingredientsSummary }
            </ul>
            <p><strong>Total Price: ${ props.price }</strong></p>
            <Button btnType="Danger" clicked={ props.purchaseCancelled }>CANCEL</Button>
            <Button btnType="Success" clicked={ props.purchaseContinued }>CHECKOUT</Button>
        </Auxi>
    )
}

export default OrderSummary;