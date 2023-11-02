"use strict";

const fs = require("fs").promises


class UserStorage {
    static getUserInfo(id) {
        return fs.readFile("./src/databases/users.json")
       .then((data) => {
        return this.#getUserInfo(data, id)

       })
       .catch(console.error);

    }

    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
          const userInfo =usersKeys.reduce((newUsers, Info) => {
            newUsers[Info] = users[Info][idx];
            return newUsers;
        }, {});
        return userInfo;
    }

    static save(userInfo) {
        // const users = this.#users
        users.id.push(userInfo.id); 
        users.name.push(userInfo.name); 
        users.psword.push(userInfo.psword); 
        return {success : true} ;
    }
}


module.exports = UserStorage;
