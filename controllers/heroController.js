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

module.exports.updateHero = async (req, res, next) => {
  try {
    const { body, params: { id } } = req;

    const updatedHero = await Hero.update(body, {
      where: { id },
      returning: true 
    })

    res.send(updatedHero);
  } catch (error) {
    next(error)
  }
}

module.exports.deleteHero = async (req, res, next) => {
  try {
    const { params: { id } } = req;
    
    const deletedHero = await Hero.findByPk(id);
    
    await deletedHero.destroy();
    res.send(deletedHero)
  } catch (error) {
    next(error)
  }
}