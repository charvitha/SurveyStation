const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

const requireLogIn = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogIn, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      source: req.body.id,
      description: '$5 for 5 credits'
    });
    req.user.credits += 5;
    const user = await req.user.save();
    //console.log(charge);

    res.send(user);
  });
};
