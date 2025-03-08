const slider = document.querySelector(".team__slider")
const nextButton = document.getElementById("next")
const prevButton = document.getElementById("prev")

nextButton.onclick = () => {
    slider.append(slider.querySelector('div:first-child'))
}

prevButton.onclick = () => {
    slider.prepend(slider.querySelector('div:last-child'))
}

