function count() {
    
    let start = document.getElementById('start')
    let finish = document.getElementById('finish')
    let step = document.getElementById('step')
    var res = document.getElementById('res')

    if (start.value.length == 0 || finish.value.length == 0 || step.value.length == 0) {
        window.alert("Erro! Faltam dados.")
    } 

    else {
        res.innerHTML = ''
        res.innerHTML += 'Contando... <br>'
        let i = Number(start.value)
        let f = Number(finish.value)
        let s = Number(step.value)
        if (s <= 0) {
            alert('Passo inválido! Considerando passo 1.')
            s = 1
        }

        
        if (i < f) {
            // count up
            for (let c = i ; c <= f ; c += s) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // countdown
            for (let c = i; c >= f; c -= s)
                res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
