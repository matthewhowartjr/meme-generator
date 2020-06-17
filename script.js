let imgURL = document.querySelector("#meme-url");
let memeTopInput = document.querySelector("#meme-top-input");
let memeBottomInput = document.querySelector("#meme-bottom-input");
let memeFontSize = document.querySelector("#meme-font-size");
let memeFontColor = document.querySelector("#meme-font-color");

let memeTopText = document.querySelector("#top-text");
let memeBottomText = document.querySelector("#bottom-text");
let memeImg = document.querySelector("#meme");
let meme = document.querySelector("#meme-display");
let savedMemes = document.querySelector("#meme-saved")

let saveButton = document.querySelector("#save-meme");

imgURL.addEventListener("keyup", function(e) {
    memeImg.src = imgURL.value;
});

memeTopInput.addEventListener("keyup", function(e) {
    memeTopText.innerHTML = memeTopInput.value;
});

memeBottomInput.addEventListener("keyup", function(e) {
    memeBottomText.innerHTML = memeBottomInput.value;
});

memeFontSize.addEventListener("change", function(e) {
    memeTopText.style.fontSize = `${memeFontSize.value}px`;
    memeBottomText.style.fontSize = `${memeFontSize.value}px`;
});

memeFontColor.addEventListener("change", function(e) {
    memeTopText.style.color = memeFontColor.value;
    memeBottomText.style.color = memeFontColor.value;
});

saveButton.addEventListener("click", function(e) {
    e.preventDefault();

    if (imgURL.value == "" || memeBottomInput.value == "" || memeTopInput.value == "") {
        alert("You need to complete the form before submitting!");
    } else {
        let copy = meme.cloneNode(true);
        copy.classList.add("delete");

        copy.addEventListener("click", function(e) {
            savedMemes.removeChild(copy);
        });
        savedMemes.appendChild(copy);


        imgURL.value = "";
        memeBottomInput.value = "";
        memeTopInput.value = "";
    }
});