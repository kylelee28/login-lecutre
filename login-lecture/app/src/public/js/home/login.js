"use strict"

// DOM -> Document object module
// java에서 html 내용을 제어한다. 

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

// id에 들어가서 태그의 value에 접근

function login() {
    const req = {
        id : id.value,
        psword : psword.value,
    };


    fetch("./login", {
        method : "POST",
        header : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringyfy(req),
    });
}



