const button = document.getElementById('button1');
button.addEventListener('mouseover', () => {
  button.style.backgroundColor = ' #FBBB62';
});
button.addEventListener('mouseout', () => {
  button.style.backgroundColor = 'tomato';
});

button.addEventListener('click', () => {
    alert('You have selected flowers:');
  });

  const button1 = document.getElementById('button2');
button1.addEventListener('mouseover', () => {
  button1.style.backgroundColor = '#FBBB62';
});
button1.addEventListener('mouseout', () => {
  button1.style.backgroundColor = 'tomato';
});

button1.addEventListener('click', () => {
  alert('You have selected lightsaber:');
});