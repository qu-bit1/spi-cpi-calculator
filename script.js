let cpi = document.forms['choice']
let k = cpi.semch
let semval = "first"
k.onchange = function () {
    semval = this.value
    if (semval == "first") {
        let flink = document.getElementById('firstsem')
        let slink = document.getElementById('secondsem')
        let clink = document.getElementById('cumsem')
        flink.href = "sem1g1.html"
        slink.href = "sem2g2.html"
        clink.href = "cpi1.html"
    }
    else {
        let flink = document.getElementById('firstsem')
        let slink = document.getElementById('secondsem')
        let clink = document.getElementById('cumsem')
        flink.href = "sem1g2.html"
        slink.href = "sem2g1.html"
        clink.href = "cpi2.html"
    }
}
