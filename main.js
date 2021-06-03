const signupForm=document.querySelector('#furmulario');
signupForm.addEventListener('submit', (e) => {
e.preventDefault();
const email=document.querySelector('#email').value;
const password=document.querySelector('#contraseña').value;


auth
.createUserWithEmailAndPassword(email, password)
.then(userCredential => {
    console.log('regitrado')
  });









});




