
import { PizzaOrderType } from '@/lib/Data'
import React from 'react'

type Props = {}

const Order = ({ orderId, customerName, pizzaType, quantity, orderDate, status }: PizzaOrderType) => {
  return (
    <div>Order</div>
  )
}

export default Order