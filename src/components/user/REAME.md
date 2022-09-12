//////////////////////////////////////////

- Test thử JS , HTML và CSS

<script>
        const registerBtn = document.querySelector(".registerBtn"); 
        const loginBtn = document.querySelector(".loginBtn"); 
        const moveBtn = document.querySelector(".moveBtn");
        const register = document.querySelector(".register");
        const login = document.querySelector(".login");
         

        loginBtn.addEventListener("click", () => {
            moveBtn.classList.add("rightBtn");
            login.classList.add("loginForm");
            register.classList.remove("registerForm");
            moveBtn.innerHTML = "Login";
            })

        registerBtn.addEventListener("click", () => {
            moveBtn.classList.remove("rightBtn");
            login.classList.remove("loginForm");
            register.classList.add("registerForm");
            moveBtn.innerHTML = "Register";
            })
</script>
