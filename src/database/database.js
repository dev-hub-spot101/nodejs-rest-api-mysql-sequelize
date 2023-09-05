import Sequlize from 'sequelize';

export const sequelize = new Sequlize('restapinodejs', 'root', '88571288', {
    host:'localhost',
    dialect:'mysql',
    login:false,
    logginf:false
})

sequelize.authenticate().then(()=>{
    console.log("Connection has been established successfully.");
}).catch(err =>{
    console.log("Unable to connect to the database", err);
})