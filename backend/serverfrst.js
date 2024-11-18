//PORT CONNEXION
const expressRequire = require('express');
const expressApp = expressRequire();
const mongoose = require('mongoose');
const dotenvApp = require('dotenv').config();
const cors = require('cors');
const bodyParser = require("body-parser");

const BDDFRST = encodeURIComponent(process.env.BDD_OWNER)
const BDDSCND = encodeURIComponent(process.env.BDD_PSWD)
const BDDTHRD = process.env.BDD_CLUSTER

expressApp.use(bodyParser.json());
//PORT CONNEXION
expressApp.use(cors());


//CONNEXION BACKEND ET AUTHENTIFICATION
expressApp.use('/',require('./backroutes/authRoutes'))


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

expressApp.listen(
    port,() =>{
        console.log(`Server is running on port ${port}`);
    }
);







//BDD CONNEXION FOR USERS

mongoose.connect(`mongodb+srv://${BDDFRST}:${BDDSCND}@${BDDTHRD}.wnujc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));
  
    expressApp.get((req,res) =>{res.send( 'Votre requête a bien été reçue !'
  );});
  
  expressApp.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
      next();
    });
//BDD CONNEXION
//json parsing
