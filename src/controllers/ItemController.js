const Item = require('../models/Item');

module.exports = {
  async store(req, res) {
    const {nome, precoUnidade} = req.body;
    try {
      const newItem = await Item.create({nome, precoUnidade});
      return res.json(newItem);
    } catch (e) {
      return res
          .status(400)
          .json({name: e.name, message: e.errors[0].message});
    }
  },

  async list(req, res) {
    const listedItens = await Item.findAll();

    return res.json(listedItens);
  },
};
