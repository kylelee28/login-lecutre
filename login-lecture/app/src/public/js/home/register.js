"use strict"

// DOM -> Document object module
// java에서 html 내용을 제어한다.


const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button");


registerBtn.addEventListener("click", register);

function register () {
    if (!id.value) return alert ("아이디를 입력해주십시오.")
    if (psword.value !== confirmPsword.value) {
        return alert("비밀번호가 일치하지 않습니다.");
    }
    
    const req = {
        id : id.value,
        name : name.value,
        psword : psword.value,
        confirmPsword : confirmPsword.value,
        
    }



// 모든 각 언어마다 지원하고 있는 데이터 타입이 다르다.
// 모두 호환할 수 있는 데이터 체계 => json
// 문자열로 전송되기 때문에 데이터 크기 줄어들음.
// 이해도 쉬움. 예전엔 XML이용.

     fetch("/register", {
         method : "POST",
         headers : {
             "Content-Type" : "application/json"
         },
         body : JSON.stringify(req),
     })

     .then((res) => res.json())
     .then((res) => {
         if(res.success) {
             location.href = "/login";
         } else {
             alert(res.msg);
         }
     })
     .catch((err) =>{
         console.error(new Error("회원가입 중 에러 발생"))
     })

    }




