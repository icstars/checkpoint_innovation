const config ={
    user : "Administrator",
    password: "123",
    server: "DESKTOP-OCC75TD",
    database: "DATA",
    options:{
        trustServerCertificate: true,
        trustedConnection: false,
        enableArithAbort: true,
        instancename: "SQLEXPRESS"

    },
    port: 1433
}
module.exports = config