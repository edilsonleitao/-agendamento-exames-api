const {Schema, model} = require('mongoose');

const ExameSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  tipo: {
    type: String,
    required: true
  },
  cliente: {
    type: Number,
    required: true
  },

}, {
  timestamps: true
});

module.exports = model('Exame', ExameSchema);