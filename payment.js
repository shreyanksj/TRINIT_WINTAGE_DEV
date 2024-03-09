// Initialize Stripe
const stripe = Stripe('YOUR_STRIPE_PUBLIC_KEY');

// Add event listener for pay button
document.getElementById('payButton').addEventListener('click', async () => {
  const plan = document.getElementById('subscriptionPlan').value;

  // Create a payment intent on the server
  const response = await fetch('/create-payment-intent', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ plan }),
  });

  const { clientSecret } = await response.json();

  // Confirm the payment with Stripe.js
  const result = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {
      card: elements.getElement('card'),
    },
  });

  if (result.error) {
    console.error(result.error.message);
    // Display error message to the user
  } else {
    // Payment succeeded, update user's subscription status
    // Redirect to a thank you page or display a success message
  }
});
