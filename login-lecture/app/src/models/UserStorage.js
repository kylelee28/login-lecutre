"use strict";

class UserStorage {
    static #users = {
    id : ["이재은", "손원진", "오은재"],
    psword : ["1234", "123", "12"],
    name : ["시대", "강대", "이투스"],
    };


    static getUserInfo(id) {
        const users = this.#users
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);
        console.log(usersKeys)
        const userInfo =usersKeys.reduce((newUsers, Info) => {
            newUsers[Info] = users[Info][idx];
            return newUsers;
        }, {});
        return userInfo;
    }
}


module.exports = UserStorage;
