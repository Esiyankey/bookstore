import React from 'react'
import "../styles/payment.css";

export const Payment = () => {
  return (
    <div className="myPaymentPage">
    <div className="background"></div>
    <section className="mainPayment">
      <h1>PAYMENT</h1>
      <section className="card">
        <h2>VISA</h2>
        <section className="section1">
          <p>Card number</p>
          <span>8014</span>
        </section>
        <section className="section1">
          <section>
            <p>CARD HOLDER</p>
            <p>REINHARD KENSON</p>
          </section>
          <section>
            <p>EXPIRY DATE</p>
            <p>08/21</p>
          </section>
        </section>
      </section>
      <form className="PaymentForm">
        <section>
          <label htmlFor="">CREDIT CARD NUMBER</label>
          <br />
          <input
            className="PaymentFormInput"
            placeholder="XXXX XXXX XXXX 8014"
            type="text"
            name=""
            id=""
          />
          <br />
          <p className="errorMessage"></p>
        </section>
        <section>
          <label htmlFor="">CARD HOLDER NAME</label>
          <br />
          <input
            className="PaymentFormInput"
            type="text"
            placeholder="REINHARD KENSON"
          />
          <p className="errorMessage"></p>
        </section>
        <section className="flexRow">
          {" "}
          <p className="checkboxContent">
            <input type="checkbox" name="save " id="" />{" "}
            <label htmlFor="">Save this card for future transactions</label>
          </p>
        </section>
        <hr />
        <section className="flexRow">
          <p>
            TOTAL: <span>100</span>
          </p>
          <input
            className="PaymentButton"
            type="submit"
            value="Proceed to Pay"
          />
        </section>
      </form>
    </section>
  </div>
  )
}
