import Sequelize from "sequelize";

import { sequelize } from '../database/database';

const User = sequelize.define("users", {
    id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING
    },
    email:{
        type: Sequelize.STRING,
    },
    mobile:{
        type: Sequelize.STRING,
    },
    password:{
        type: Sequelize.STRING,
    }
}, {
    timestamps: true
});

export default User;
