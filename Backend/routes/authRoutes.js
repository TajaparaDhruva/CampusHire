const express = require('express');
const router = express.Router();
const { login, studentLogin, companyLogin, studentRegister, companyRegister } = require('../controllers/authController');

router.post('/login', login);
router.post('/student-login', studentLogin);
router.post('/company-login', companyLogin);
router.post('/student-register', studentRegister);
router.post('/company-register', companyRegister);

module.exports = router;
