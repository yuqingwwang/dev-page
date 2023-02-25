const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

const content = document.getElementById('content');
const answer = document.getElementById('answer');

button1.addEventListener('click', function() {
  content.classList.toggle('hidden');
});

button2.addEventListener('click', function() {
  answer.classList.toggle('hidden');
});
