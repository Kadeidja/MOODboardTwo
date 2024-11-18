const expressModule = require('express');
const expressRouter = expressModule.Router();

const authLoginUserCtrl = require('../controllers/authLoginUserControllers');


expressRouter.post('/subscription',authLoginUserCtrl.subscripting);
expressRouter.post('/login',authLoginUserCtrl.longingIn);

module.exports = expressRouter;