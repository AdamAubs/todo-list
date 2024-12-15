// Changing the Store class
// can be a lot of work if we need to add
// a different payment type. Creating a
// payment processor for the different types
// of payments allows the Store to use the same
// functionality for all types of payments

class Store {
  constructor(paymentProcessor) {
    this.paymentProcessor = paymentProcessor;
  }

  purchaseBike(quantity) {
    this.paymentProcessor.pay(200 * quantity);
  }

  purchaseHelmet(quantity) {
    this.paymentProcessor.pay(15 * quantity);
  }
}

class StripePaymentProcessor {
  constructor(user) {
    this.strip = new Stripe(user);
  }

  pay(amoountInDollars) {
    this.stripe.makePayment(amoountInDollars * 100);
  }
}

class Stripe {
  constructor(user) {
    this.user = user;
  }

  makePayment(amountInCents) {
    console.log(
      `${this.user} made payment of $${amoountInCents / 100} with Stripe`
    );
  }
}

class PaypalPaymentProcessor {
  constructor(user) {
    this.user = user;
    this.paypal = new Paypal();
  }

  pay(amoountInDollars) {
    this.paypal.makePayment(this.user, amoountInDollars);
  }
}

class Paypal {
  makePayment(user, amoountInDollars) {
    console.log(`${user} made payment of $${amoountInDollars} with Paypal`);
  }
}

const store = new Store(new StripePaymentProcessor("John"));
store.purchaseBike(2);
store.makePayment(2);
