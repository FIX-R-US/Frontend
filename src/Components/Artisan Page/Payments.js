import React, { useState } from 'react'
import { PaystackButton } from 'react-paystack'
import './Payment.css'
import Container  from 'react-bootstrap/Container'

function Payments() {
  const publicKey = 'pk_test_5f727831c1256722db92408ab5ad8a99c9e0ae95'
  const amount = 100
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')

  const componentProps = {
    email,
    amount: amount * 100,
    metadata:{
      name,
      number
    },
    publicKey,
    text:'Pay Now',
    onSuccess: () => alert("Thanks for paying your monthly fee"),
    onClose: () => alert("Transaction cancelled")
  }

  return (
    <div className="payment--container">
      <Container className='my-3'>
        <div className="item">
          <div className="overlay-effect"></div>
          <img
            className="item-image"
            src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="product"
          />
          <div className="item-details">
            <p className="item-details__title">Coconut Oil</p>
            <p className="item-details__amount">GHS{amount}</p>
          </div>
        </div>
        <div className="checkout">
          <div className="checkout-form">
            <div className="checkout-field">
              <label>Name</label>
              <input onChange={(e)=>setName(e.target.value)} id='name'/>
            </div>
            <div className="checkout-field">
              <label>Email</label>
              <input onChange={(e)=>setEmail(e.target.value)} id='email'/>
            </div>
            <div className="checkout-field">
              <label>Phone</label>
              <input onChange={(e)=>setNumber(e.target.value)} id='phone'/>
            </div>
            <PaystackButton {...componentProps} className='payment--btn'/>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Payments