const loginFormRef = document.querySelector('.login-form')
loginFormRef.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const{
        elements: {email, password}
    } = evt.currentTarget
    if (email.value ==="" || password.value === "") {
        alert ("Fill in all the fields!")
        return
    }
    const loginData = {
        email: email.value,
        password: password.value,
      }
      console.dir(loginData);
      evt.currentTarget.reset();
}
)
