function count() {
    
    let start = document.getElementById('start')
    let finish = document.getElementById('finish')
    let step = document.getElementById('step')
    let res = document.getElementById('res')
    res.innerHTML = ''

    let i = Number(start.value)
    let f = Number(finish.value)
    let s = Number(step.value)

    for (let c = i ; c <= f ; c += s) {
        res.innerHTML += `&#x1F449; ${c}`
    }
}
