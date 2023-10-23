"use strict";


const output = {
    home : (req, res) => {
        res.render("home/index")
    },
    
    login : (req, res) => {
        res.render("home/login")
    },
}

const users = {
    id : ["이재은", "손원진", "오은재"],
    psword : ["1234", "123", "12"],
};

const process = {
    login : (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;
            console.log(id, psword);
            if(users.id.includes(id)) {
               const idx = users.id.indexOf(id);
               if (users.psword[idx] === psword) {
                return res.json({
                    success : true,
                });
               }
            }
            return res.json({
                success : false,
                msg : "로그인에 실패하셨습니다.",
            })
    },
};
    


module.exports = {
    process,
    output,
}; 