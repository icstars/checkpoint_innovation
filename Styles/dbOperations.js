const config= require('./dbConfig.js')
const sqlServer = require('mssql')

async function getData(){
    let pool = await sqlServer.connect(Config)
    let DATA = pool.request().query('SELECT* FROM DATA' )
    return DATA
}

module.exports =(getData)