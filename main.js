const body = document.body
const range = document.getElementById('_range')
const number = document.getElementById('range-value')

const updateStyle = () => {
    const value = Number(number.innerText)

    if (value >= 90) applyStyles('#000','#f5d300')
    if (value >= 70) applyStyles('#333','#fe53bb')
    if (value >= 50) applyStyles('#555', '#09fbd3')
    if (value >= 25) applyStyles('#fff', '#08f7fe')
    if (value === 0) applyStyles('red', '#333')
}

const applyStyles = (color, backgroundColor) => {
    number.style.color = color;
    body.style.backgroundColor = backgroundColor;
}

range.addEventListener('input', () => {
    const sliderValue = Math.min(range.value, 100)
    number.innerText = sliderValue
    updateStyle()
})
