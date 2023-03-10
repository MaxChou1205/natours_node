/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe('pk_test_51MWg1nKFCvcp5rqwjxkVCXKCgYv1VExxAOELEcs5tXoR8V0stwEAefV4LGtjhG3gMemC7DQpOWe9zuoMYLim9oBc00YlCfZ2Tu');

export const bookTour = async tourId => {
  try {
    // 1) Get checkout session from API
    const session = await axios(
      `/api/v1/bookings/checkout-session/${tourId}`
    );

    // 2) Create checkout form + chanre credit card
    await stripe.redirectToCheckout({
      sessionId: session.data.session.id
    });
  } catch (err) {
    console.error(err);
    showAlert('error', err);
  }
};
