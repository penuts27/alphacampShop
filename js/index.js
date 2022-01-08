// menu-btn
const menuBtn = document.querySelector('.menu-btn')
const body = document.querySelector('body')
const html = document.querySelector('html')

menuBtn.addEventListener('click', () => {
    body.classList.toggle('active')
    html.classList.toggle('active')
})

// cart 
const amountControls = document.querySelectorAll('.amount-control')
const amounyNums = document.querySelectorAll('.num')

amountControls.forEach(amountControls => amountControls.addEventListener('click', (e) => {
    const targerCircle = e.target.closest('.circle')
    const targerControl = targerCircle.parentElement
    const targetNums = targerControl.children[1].firstElementChild
    const targetPrice = targerCircle.parentElement.parentElement.children[2]
    if (targerCircle.matches('.plus')) {
        if (targetNums.innerText <= 0) {
            targetNums.innerText = 1
            return targerControl.classList.remove('disable')
        }
        targetNums.innerText++
        targetPrice.innerText = targetNums.innerText * 3999
    }
    if (targerCircle.matches('.minus')) {
        if (targetNums.innerText <= 1) {
            targetNums.innerText = 0
            return targerControl.classList.add('disable')
        }
        targetNums.innerText--
        targetPrice.innerText = targetNums.innerText * 3999
    }
}))

// form 
let step = 0;
const steps = document.querySelectorAll('.step')
const btnControls = document.querySelector('.btn-control')
const prevBtn = document.querySelector('.button.prev')
const nextBtn = document.querySelector('.button.next')
const formPart = document.querySelectorAll('form .part')
function handleBtnVlicked(e) {
    e.preventDefault;
    const nowStep = steps[step]
    if (e.target.matches('.next') && e.target.innerText === '下一步') {
        const nextStep = steps[step + 1]
        nowStep.classList.remove('active')
        nextStep.classList.add('active')
        nowStep.classList.add('focus')
        formPart[step].classList.toggle('d-none')
        formPart[step + 1].classList.toggle('d-none')
        step++
    }
    if (e.target.matches('.prev')) {
        const prevStep = steps[step - 1]
        nowStep.classList.remove('active')
        prevStep.classList.add('active')
        nowStep.classList.remove('focus')
        formPart[step].classList.toggle('d-none')
        formPart[step - 1].classList.toggle('d-none')
        step--
    }
    setBtnDisable()
}
function setBtnDisable() {
    console.log(step)
    if (step <= 0) {
        prevBtn.style.opacity = 0
        prevBtn.style.visibility = 'hidden'
    } else {
        prevBtn.style.opacity = 1
        prevBtn.style.visibility = 'visible'
    }
    if (step >= 2) {
        nextBtn.innerText = '送出表單'
    } else {
        nextBtn.innerHTML = '下一步<img src="./alphacamp-shop_img/arrow.svg" alt="next">'
    }
}

btnControls.addEventListener('click', handleBtnVlicked)

