// contactController.js
// Import contact model
Siswa = require('./siswaModel');
// Handle index actions
exports.index = function (req, res) {
   Siswa.get(function (err, siswam) {
       if (err) {
           res.json({
               status: "error",
               message: err,
           });
       }
       res.json({
           status: "success",
           message: "Siswa retrieved successfully",
           data: siswam
       });
   });
};
// Handle create contact actions
exports.new = function (req, res) {
   var siswa = new Siswa();
   siswa.name = req.body.name ? req.body.name : siswa.name;
   siswa.birthday = req.body.birthday;
   siswa.gender = req.body.gender;
   siswa.hobby = req.body.hobby;
// save the contact and check for errors
   siswa.save(function (err) {
       // if (err)
       //     res.json(err);
res.json({
           message: 'Siswa Berhasi Ditambahkan',
           data: siswa
       });
   });
};
// Handle view contact info
exports.view = function (req, res) {
   Siswa.findById(req.params.siswa_id, function (err, siswa) {
       if (err)
           res.send(err);
       res.json({
           message: 'Siswa masih mencari..',
           data: siswa
       });
   });
};
// Handle update contact info
exports.update = function (req, res) {
Siswa.findById(req.params.siswa_id, function (err, siswa) {
       if (err)
           res.send(err);
siswa.name = req.body.name ? req.body.name : siswa.name;
       siswa.birthday = req.body.birthday;
       siswa.gender = req.body.gender;
       siswa.hobby = req.body.hobby;
// save the contact and check for errors
       siswa.save(function (err) {
           if (err)
               res.json(err);
           res.json({
               message: 'Siswa Berhasil di Update',
               data: siswa
           });
       });
   });
};
// Handle delete contact
exports.delete = function (req, res) {
   Siswa.remove({
       _id: req.params.siswa_id
   }, function (err, contact) {
       if (err)
           res.send(err);
res.json({
           status: "success",
           message: 'Siswa Berhasil di Hapus'
       });
   });
};
