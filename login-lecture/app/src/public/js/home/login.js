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

// 모든 각 언어마다 지원하고 있는 데이터 타입이 다르다.
// 모두 호환할 수 있는 데이터 체계 => json
// 문자열로 전송되기 때문에 데이터 크기 줄어들음.
// 이해도 쉬움. 예전엔 XML이용.

    fetch("./login", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if(res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) =>{
        console.error(new Error("로그인 중 에러 발생"))
    })
};



