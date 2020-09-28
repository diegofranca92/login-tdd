const express = require('express')
// Utilizando classes
class AppController {
    constructor () {
        this.express = express();
        this.middlewares();
        this.routes();
    }

     middlewares(){
        this.express.use(express.json())
     }

     routes(){
        this.express.use(require('./routes'))
     }
}

modules.exports = new AppController().express;