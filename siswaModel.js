// contactModel.js
var mongoose = require('mongoose');
// Setup schema
var siswaSchema = mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  birthday: {
      type: String,
      required: true
  },
  gender: String,
  hobby: String,
  create_date: {
      type: Date,
      default: Date.now
  }
});
// Export Contact model
var Siswa = module.exports = mongoose.model('siswa', siswaSchema);
module.exports.get = function (callback, limit) {
  Siswa.find(callback).limit(limit);
}
