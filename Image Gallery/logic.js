window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("topBtn").style.display = "block";
  } else {
    document.getElementById("topBtn").style.display = "none";
  }
}

function goToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImage");
var images = document.querySelectorAll(".container a img");
var currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", function (event) {
    event.preventDefault();
    openModal(index);
  });
});

function openModal(index) {
  modal.style.display = "block";
  modalImg.src = images[index].src;
  currentIndex = index;
}

function closeModal() {
  modal.style.display = "none";
}

function changeImage(step) {
  currentIndex += step;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  modalImg.src = images[currentIndex].src;
}
window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};
