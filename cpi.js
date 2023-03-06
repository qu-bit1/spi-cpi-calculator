var x = 0, y = 0;

let sem1 = document.forms['grp1']
let elc = sem1.ELC
let mth1 = sem1.MTH1
let mth2 = sem1.MTH2
let phy = sem1.PHY
let phy1 = sem1.PHY1
let ta = sem1.TA
let chm2 = sem1.CHM2
let chm3 = sem1.CHM3

let elcval = 10
let mth1val = 10
let mth2val = 10
let phyval = 10
let phy1val = 10
let taval = 10
let chm2val = 10
let chm3val = 10

elc.onchange = function () {
    elcval = this.value
    console.log(elcval)
}
mth1.onchange = function () {
    mth1val = this.value
}
mth2.onchange = function () {
    mth2val = this.value
}
phy.onchange = function () {
    phyval = this.value
}
phy1.onchange = function () {
    phy1val = this.value
}
ta.onchange = function () {
    taval = this.value
}
chm2.onchange = function () {
    chm2val = this.value
}
chm3.onchange = function () {
    chm3val = this.value
}

function calcsem1() {
    x = (9 * parseInt(elcval) + 6 * parseInt(mth1val) + 6 * parseInt(mth2val) + 11 * parseInt(phyval) + 3 * parseInt(phy1val) + 9 * parseInt(taval) + 4 * parseInt(chm2val) + 4 * parseInt(chm3val)) / 52;
    document.getElementById('sem1spi').value = x.toFixed(2);
}

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

function calccpi() {
    document.getElementById('cpi').value = ((x + y) / 2).toFixed(2);
}