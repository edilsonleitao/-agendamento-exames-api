 const Exame = require('../models/Exame');

module.exports = {
  async index(req, res) {
    const exame = await Exame.find();
    return res.json(exame);
  },
  async show(req, res) {
    const exame = await Exame.findById(req.params.id);
    return res.json(exame);
  },
  async showCliente(req, res) {
    const {cliente} = req.query;
    const exame = await Exame.find({
      cliente: {
        $eq: cliente
      }
    });
    return res.json(exame);
  },    
  async store(req, res) {
    const exame = await Exame.create(req.body);
    return res.json(exame);
  },
  async update(req, res) {
    const exame = await Exame.findByIdAndUpdate(req.params.id, req.body, {new: true});
    return res.json(exame);
  },
  async destroy(req, res) {
    await Exame.findByIdAndDelete(req.params.id);
    return res.send('Exame deletado!');
  }
};