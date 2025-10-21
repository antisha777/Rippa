window.addEventListener('scroll',(event) => {
  const elem = document.getElementById('bar');
  const y = scrollY;
  if (y<100) { elem.style.display = "none"}
  else { elem.style.display = "block"};
});