document.querySelectorAll('.il-plus-svg-logo').forEach((card) => {
  card.parentElement.parentElement.parentElement.remove();
});

document.querySelectorAll('.list-image-container+.list-image-container').forEach((card) => {
  card.parentElement.parentElement.parentElement.remove();
});
