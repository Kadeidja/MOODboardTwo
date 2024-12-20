const expressRequire = require('express');
//const expressApp = expressRequire();
const mongoose = require('mongoose');
const dotenvApp = require('dotenv').config();
const cors = require('cors');
const bodyParser = require("body-parser");
const httpModule = require('http');
const expressAppMiddlewareImport = require('./middlewares/authLoginUserMiddlewares')

const BDDFRST = encodeURIComponent(process.env.BDD_OWNER)
const BDDSCND = encodeURIComponent(process.env.BDD_PSWD)
const BDDTHRD = process.env.BDD_CLUSTER


//IMPORT FICHIER 
const userLoggedinRoutes = require('./routes/authLoginUserRoute');

//expressApp.use(bodyParser.json());
//expressApp.use(cors());


//PORT CONNEXION-------------------------------------------------------------------------------------
const normalizePort = val => {
    const port = parseInt(val, 10);
  
    if (isNaN(port)) {
      return val;
    }
    if (port >= 0) {
      return port;
    }
    return false;
  };
const port = normalizePort(process.env.MY_BCK_PORT || 4000)
//HANDLING SERVER ERROR
expressAppMiddlewareImport.set('port', port);
const errorHandler = error => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  const address = server.address(expressAppMiddlewareImport);
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges.');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use.');
      process.exit(1);
      break;
    default:
      throw error;
  }
};

const portServer = httpModule.createServer()
portServer.on('error', errorHandler);
portServer.on('listening', () => {
  const address = portServer.address();
  const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
  console.log('Listening on ' + bind);
});

portServer.listen(port);


//BDD CONNEXION------------------------------------------------------------------------------------------
mongoose.connect(`mongodb+srv://${BDDFRST}:${BDDSCND}@${BDDTHRD}.wnujc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
  
    expressAppMiddlewareImport.get((req,res) =>{res.send( 'Votre requête a bien été reçue !'
  );});
  
  expressAppMiddlewareImport.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
      next();
    });
//json parsing
expressAppMiddlewareImport.use('/subscription', userLoggedinRoutes);