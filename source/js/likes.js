let likes = document.querySelectorAll('.gallery-card__button');
// let like = document.querySelector('.gallery-card__button');
let counterLikes = document.querySelectorAll('.gallery-card__like-counter');

likes.forEach((like) => {
  like.addEventListener('click', function () {
    if (like.classList.contains('gallery-card__button--add')) {
      counterLike.textContent--;
    } else {
      counterLike.textContent++;
    }

    like.classList.toggle('gallery-card__button--add');
  });
});

