const button = document.getElementById('button1');
button.addEventListener('mouseover', () => {
  button.style.backgroundColor = ' #FBBB62';
});
button.addEventListener('mouseout', () => {
  button.style.backgroundColor = 'tomato';
});

button.addEventListener('click', () => {
    window.location.href = 'forms.html';
  });
