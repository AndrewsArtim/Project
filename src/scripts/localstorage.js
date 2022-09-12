if (document.getElementById('send_form') != null) {
    document.getElementById('send_form').onclick = function() {
        let inputName = document.getElementById("name");
        window.localStorage.setItem("name", inputName.value);
        let inputSurname = document.getElementById("surname");
        window.localStorage.setItem("surname", inputSurname.value);
        let inputEmail = document.getElementById("email");
        window.localStorage.setItem("email", inputEmail.value);
        let inputPhone = document.getElementById("phone");
        window.localStorage.setItem("phone", inputPhone.value);
        let inputLink = document.getElementById("link");
        window.localStorage.setItem("link", inputLink.value);
        let inputInfo = document.getElementById("info");
        window.localStorage.setItem("info", inputInfo.value);
        let answer = document.querySelector(".server_answer");
        function hidemessage(){
            answer.innerText = "";
            answer.classList.remove('active');
        }
        setInterval(hidemessage, 5000);
        answer.innerText = "Data now in localstorage";
        answer.classList.add('active');
    }
}
