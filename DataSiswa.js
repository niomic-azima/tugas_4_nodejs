// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
  res.json({
      status: 'API Its Working',
      message: 'Welcome to Big Data siswa crafted with love!',
  });
});
// Import contact controller
var siswaController = require('./siswaController');
// Contact routes
router.route('/siswam')
  .get(siswaController.index)
  .post(siswaController.new);
router.route('/siswam/:siswa_id')
  .get(siswaController.view)
  .patch(siswaController.update)
  .put(siswaController.update)
  .delete(siswaController.delete);
// Export API routes
module.exports = router;
