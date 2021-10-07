const router = require('express').Router();
const stripeAuthKey = process.env.STRIPE_KEY;
const stripe = require('stripe')(
  'sk_test_51Jc487JcfoFicAXjIVlOwIZswHQabBgiJ4q0tFPhj2txktK0KY1gb3dZbIbucgYktA3t798pR2aXujkvvcFRFcfu00ZnIn8ptH'
);

router.post('/payment', (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'usd',
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
