const Users = require("../models/users.model");

class AuthService {
    static async Login(email, password){
        try {
           const result = await Users.findOne({
            where : {email},
           });
           if(result){
               return password === result.password ? {isValid : true, result} : {isValid : false}
           }
           return {isValid : false}
        } catch (error) {
            throw error
        }
    }
}

module.exports = AuthService;