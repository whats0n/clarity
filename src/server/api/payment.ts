import Stripe from 'stripe'

export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()

  const stripe = new Stripe(runtimeConfig.stripeSk)

  const query = getQuery<{ amount: number }>(event)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: +query.amount * 100,
    currency: 'usd',
  })

  return {
    clientSecret: paymentIntent.client_secret,
  }
})
