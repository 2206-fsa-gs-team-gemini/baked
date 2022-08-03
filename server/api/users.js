const router = require('express').Router()
const { models: { User }} = require('../db')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the name and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['name', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    const userToken = await newUser.generateToken();
    res.send(userToken);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.send(user)
  } catch (err) {
    next(err)
  }
})

// router.post('/', async (req, res, next) => {
//   try {
//     const token = await User.authenticate(req.body);
//     res.send(token);
//   } catch (err) {
//     next(err);
//   }
// });

router.put(':/id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id)
    res.send(await user.update(req.body))
  } catch (err) {
    next(err)
  }
})