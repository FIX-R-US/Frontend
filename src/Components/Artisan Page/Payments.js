import React, { useState } from 'react'
import { PaystackButton } from 'react-paystack'
import './Payment.css'
import Container  from 'react-bootstrap/Container'

function Payments() {
  // const publicKey = "pk_test_5f727831c1256722db92408ab5ad8a99c9e0ae95"
  const publicKey = process.env.REACT_APP_PAYMENT_KEY
  const amount = 100
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [number, setNumber] = useState('')

  
  const resetForm = () => {
    setEmail('')
    setFirstName('')
    setLastName('')
    setNumber('')
  }
  const componentProps = {
    email,
    amount: amount * 100,
    currency: 'GHS',
    channels: ['card', 'ussd', 'mobile_money', 'bank_transfer'],
    metadata:{
      firstName,
      lastName,
      number
    },
    publicKey,
    text:'Pay Now',
    onSuccess: ({reference}) => {
      alert(`Thank you for paying your monthly fee! Transaction reference: ${reference}`)
      resetForm()
    },
    onClose: () => alert("Transaction cancelled")
  }

  return (
    <div className="payment--container">
      <Container>
        <div className="checkout">
          <div className="checkout-form">
            <div className="checkout-field">
              <label>Firstname</label>
              <input onChange={(e)=>setFirstName(e.target.value)} id='firstname'/>
            </div>
            <div className="checkout-field">
              <label>Lastname</label>
              <input onChange={(e)=>setLastName(e.target.value)} id='lastname'/>
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