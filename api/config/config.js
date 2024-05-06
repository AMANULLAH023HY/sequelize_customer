module.exports = {
    HOST:"localhost",
    USER:"root",
    PASSWORD:"",
    DB:"sequelize_customer",
    dialect:"mysql",
    pool:{
        max:5,
        min:0,
        acuire:30000,
        idle:10000
    }

};


