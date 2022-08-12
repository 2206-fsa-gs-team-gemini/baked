const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51LVr41ImfnPLPO1qb1VdlVGSaebHaVFV6bdDAfWFxyMVRylkSqiAlz1sc7E2pgWEVKKD9btLMlcayVaKTRgjFgdV00WygETMn6"
);
const uuid = require("uuid/v4");

router.get("/", (req, res) => {
  res.send("Add your Stripe Secret Key to the require('stripe') statement!");
});

router.post("/", async (req, res) => {
  console.log("Request: \n", req.body);
  let error;
  let status;
  try {
    const { product, token } = req.body;
    const customer = await stripe.customers.create({
      email: token.email,
      source: token.id,
    });

    const idempotency_key = uuid();
    const charge = await stripe.charges.create(
      {
        amount: product.price * 100,
        currency: "usd",
        customer: customer.id,
        receipt_email: token.email,
        description: `Purchased the ${product.name}`,
        shipping: {
          name: token.card.name,
          address: {
            line1: token.card.address_line1,
            line2: token.card.address_line2,
            postal_code: token.card.address_zip,
            city: token.card.address_city,
          },
        },
      },
      {
        idempotency_key,
      }
    );
    console.log("charge: \n", { charge });
    status = "success";
  } catch (error) {
    console.error('error: ', error);
    status = "failure";
  }
  res.json({ error, status })
});

module.exports = router;