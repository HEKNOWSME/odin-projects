const first_name = document.querySelector('#firstname');
const last_name = document.querySelector('#lastname');
const email= document.querySelector('#email');
const password = document.querySelector('#password');
const co_password = document.querySelector('#co-password');
const test = document.querySelector('.test')
const btn = document.querySelector('.btn')
btn.addEventListener('click', (e) => {
       e.preventDefault();
       if(first_name.value !== '')
              test.innerHTML = first_name.value;
})

