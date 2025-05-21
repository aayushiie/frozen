let yes = document.querySelector('.yes')
const no = document.querySelector('.no')
const img = document.getElementById('img')
const text = document.querySelector('.text')

yes.addEventListener('click', () => {
    img.src = './assets/yes.jpeg'
    text.textContent = "mwahhhh<3"
    text.style.color = "pink"
    alert("let's do it tonight?")
})

const change = () => {
    let currentWidth = yes.offsetWidth;
    let currentHeight = yes.offsetHeight;
    yes.style.width = currentWidth + 40 + "px"
    yes.style.height = currentHeight + 20 + "px"

    let i = Math.floor(Math.random() * 100)
    let j = Math.floor(Math.random() * 100)
    no.style.right = i + "px"
    no.style.top = j + "px"

    text.style.color = "black"

    let noTexts = ["how rudeeeeeeeeeee", "wtf are you upto bruh", "meanie", "okie bye...", "i hate you", "why you like this", "excuseee you???"]
    let randomTextIndex = Math.floor(Math.random() * noTexts.length)
    let images = ['./assets/no1.jpeg', './assets/no2.jpeg', './assets/no3.jpeg', './assets/no4.jpeg', './assets/no5.png', './assets/no6.png']
    let randomImageIndex = Math.floor(Math.random() * images.length)

    img.src = images[randomImageIndex]
    text.textContent = noTexts[randomTextIndex]
}

no.addEventListener('click', change)
