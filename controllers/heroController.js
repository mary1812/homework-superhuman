const { Hero, Superpower } = require("../models");
const createHttpError = require("http-errors");

module.exports.getHero = async (req, res, next) => {
  try {
    const heroes = await Hero.findAll({
      include: [
        {
          model: Superpower,
          attributes: ["id", "power"],
          as: "Superpowers",
        },
      ],
    });

    if(!heroes.length){
      return next(createHttpError(404));
    }
    res.send({data: heroes});

  } catch (error) {
    next(error);
  }
};

// module.exports.getHero = async (req, res, next) => {
//   try {
//     const heros = await Hero.findAll({
//       attributes: ['id','nickname', 'real_name']
//     })
//     res.send({data: heros});
//   } catch (error) {
//     next(error)
//   }
// }


module.exports.createHero = async (req, res, next) => {
  try {
    const { body } = req;

    const newHero = await Hero.create(body);

    if (!newHero) {
      return next(createHttpError(400));
    }

    if (body.superPowers.length) {
      const powers = body.superPowers.map((power) => ({
        power: power,
        heroId: newHero.id,
      }));

      await Superpower.bulkCreate(powers, {
        returning: true,
      });
    }
    res.send(newHero);
  } catch (error) {
    next(error);
  }
};

module.exports.updateHero = async (req, res, next) => {
  try {
    const {
      body,
      params: { id },
    } = req;

    const updatedHero = await Hero.update(body, {
      where: { id },
      returning: true,
    });

    res.send(updatedHero);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteHero = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const deletedHero = await Hero.findByPk(id);

    await deletedHero.destroy();
    res.send(deletedHero);
  } catch (error) {
    next(error);
  }
};
