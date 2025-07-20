var addPopupButton = document.getElementById("add-popup-button");
var popupOverlay = document.querySelector(".popup-overlay");
var popupBox = document.querySelector(".popup-box");
var cancelButton = document.getElementById("cancel-popup");
var addBookButton = document.getElementById("add-book");
var container = document.querySelector(".container");


addPopupButton.addEventListener("click", function () {
  popupOverlay.style.display = "block";
  popupBox.style.display = "block";
});


cancelButton.addEventListener("click", function (e) {
  e.preventDefault();
  popupOverlay.style.display = "none";
  popupBox.style.display = "none";
  clearInputs();
});

addBookButton.addEventListener("click", function (e) {
  e.preventDefault();

  // Get input values
  var title = document.getElementById("book-title-input").value;
  var author = document.getElementById("book-author-input").value;
  var description = document.getElementById("book-description-input").value;

  if (title.trim() === "" || author.trim() === "" || description.trim() === "") {
    alert("Please fill in all fields.");
    return;
  }

  // Create book card
  var bookCard = document.createElement("div");
  bookCard.classList.add("container-book");

  bookCard.innerHTML = `
    <h2>${title}</h2>
    <h4>${author}</h4>
    <p>${description}</p>
    <button class="delete-button">Delete</button>
  `;

  // Append to container
  container.appendChild(bookCard);

  // Close popup
  popupOverlay.style.display = "none";
  popupBox.style.display = "none";

  // Clear inputs
  clearInputs();
});

// Event delegation for delete buttons
container.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-button")) {
    e.target.parentElement.remove();
  }
});

// Utility function
function clearInputs() {
  document.getElementById("book-title-input").value = "";
  document.getElementById("book-author-input").value = "";
  document.getElementById("book-description-input").value = "";
}
