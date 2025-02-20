const slider = document.querySelector(".team__slider")
const nextButton = document.getElementById("next")
const prevButton = document.getElementById("prev")

// nextButton.addEventListener('click', (event) => {
//     slider.append(slider.querySelector("div:first-child"))
//     console.log(event.target)
// })

nextButton.onclick = () => {
    slider.append(slider.querySelector('div:first-child'))
}

prevButton.onclick = () => {
    slider.prepend(slider.querySelector('div:last-child'))
}

