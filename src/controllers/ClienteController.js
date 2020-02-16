 const Cliente = require('../models/Cliente');

module.exports = {
  async index(req, res) {
    const cliente = await Cliente.find();
    return res.json(cliente);
  },
  async show(req, res) {
    const cliente = await Cliente.findById(req.params.id);
    return res.json(cliente);
  },
  async show(req, res) {
    const {nome} = req.query;
    const cliente = await Cliente.find({
      nome: {
        $eq: nome
      }
    });
    return res.json(cliente);
  },  
  async store(req, res) {
    const cliente = await Cliente.create(req.body);
    return res.json(cliente);
  },
  async update(req, res) {
    const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.json(cliente);
  },
  async destroy(req, res) {
    await Cliente.findByIdAndDelete(req.params.id);
    return res.send('Cliente deletado!');
  }
};