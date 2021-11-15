const { Hero } = require('../models')

// module.exports.getHeros = async (req, res, next) => {
//   try {
//     const heros = await Hero.findAll({
//       attributes: ['nickname', 'real_name']
//     })
//   } catch (error) {
//     next(error)
//   }
// }

module.exports.createHero = async (req, res, next) => {
  try {
    const { body } = req;

    const newHero = await Hero.create(body);

    res.send(newHero);
    
  } catch (error) {
    next(error)
  }
}