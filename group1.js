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