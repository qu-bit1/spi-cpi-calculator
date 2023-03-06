var x = 0, y = 0;

let sem2 = document.forms['grp2']
let mth3 = sem2.MTH3
let mth4 = sem2.MTH4
let phy2 = sem2.PHY2
let chm1 = sem2.CHM1
let esc1 = sem2.ESC1
let esc2 = sem2.ESC2
let lif = sem2.LIF

let mth3val = 10
let mth4val = 10
let phy2val = 10
let chm1val = 10
let esc1val = 10
let esc2val = 10
let lifval = 10

mth3.onchange = function () {
    mth3val = this.value
}
mth4.onchange = function () {
    mth4val = this.value
}
phy2.onchange = function () {
    phy2val = this.value
}
chm1.onchange = function () {
    chm1val = this.value
}
esc1.onchange = function () {
    esc1val = this.value
}
esc2.onchange = function () {
    esc2val = this.value
}
lif.onchange = function () {
    lifval = this.value
}

function calcsem2() {
    y = (6 * parseInt(mth3val) + 6 * parseInt(mth4val) + 11 * parseInt(phy2val) + 3 * parseInt(chm1val) + 7 * parseInt(esc1val) + 7 * parseInt(esc2val) + 6 * parseInt(lifval)) / 46;
    document.getElementById('sem2spi').value = y.toFixed(2);
}