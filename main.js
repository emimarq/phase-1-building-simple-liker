// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const articleHearts = document.querySelectorAll('.like-glyph')

function fn(e) {
  const heart = e.target
  mimicServerCall('url')
    .then(function () {
      if (heart.innerHTML === EMPTY_HEART) {
        heart.innerHTML === FULL_HEART
        heart.className = 'activated-heart';
      } else if(heart.innerHTML === FULL_HEART) {
        heart.innerHTML === EMPTY_HEART
        heart.className = '';
      }
    }).catch(function () {
      const modal = document.querySelector('#modal')
      modal.className = ''
      modal.innerHTML = error
      setTimeout(() => {
        modal.className = 'hidden', 3000
      })
    })
}

for(const heart of articleHearts) {
  heart.addEventListener('click', fn)
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
