const first_name = document.querySelector('#firstname');
const last_name = document.querySelector('#lastname');
const email= document.querySelector('#email');
const password = document.querySelector('#password');
const co_password = document.querySelector('#co-password');
const phone = document.querySelector('#phone');
const test = document.querySelector('.test')
const btn = document.querySelector('.btn')
btn.addEventListener('click', (e) => {
       e.preventDefault();
       checkInputs(first_name)
       checkInputs(last_name)
       checkInputs(email)
       checkInputs(phone)
       checkInputs(password)
       checkInputs(co_password)
       checkPassword(password, co_password)
       if(checkInputs(first_name) && checkInputs(last_name) &&   checkInputs(email) && checkInputs(phone) &&  checkInputs(password) && checkPassword(password, co_password) && checkPassword) {
              alert('are you sure to submit ?')
       }
})

function checkInputs(input) {
       const input_control = input.parentElement
       if (input.value.trim() !== '') {
              input_control.className = 'input-controls success';
              return true
       }
       else {
              const message = input_control.querySelector('.message')
              message.innerHTML = 'Don`t use empty';
              input_control.className = 'input-controls error';
              return false
       }
}

function checkPassword(input1, input2) {
       const input_control = input2.parentElement
       if (input1.value.trim() === '') {
              const input_control = input1.parentElement
              message.innerHTML = 'Don`t use empty';
              input_control.className = 'input-controls error';
              return false
       }
       if(input1.value.trim() == input2.value.trim()) {
              input_control.className = 'input-controls success';
              return true
       }
       else {
              const message = input_control.querySelector('.message')
              message.innerHTML = 'It does not match';
              input_control.className = 'input-controls error';
              return false
       }
}
