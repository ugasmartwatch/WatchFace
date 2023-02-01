var SunCalc = require("https://raw.githubusercontent.com/mourner/suncalc/master/suncalc.js");
const LOCATION_FILE = "mylocation.json";
let location;

var sunrise_img = 
require("heatshrink").decompress(atob("8PhgP/ADXAHTVoDbW3KbXbDbXtDbX2DbX7v4bZ/u/DbP+75Uat4bacH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7g/cH7gKoEAADEFwAbZgGAA="));
var sunset_img = require("heatshrink").decompress(atob("oFAgP/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4AWz4ml/kfE8vgn4nlwAnl/kAv4nk+Anm4EAT0sAE8qeBE8qeBgKemE8uAgEDE0f+TwInkYwUHY0onl8AnmYwMAh4njEwInkdwUAj4ni/AnmdwQnkdwUAn4ni4AnmwAnmEwQnj/gnDv4n/ABPwE83gE9bui4AnmwAnmEwYni/wnm/gnm/AmDgInh+An/AB3gE83AE82AE/4AOEwYni/wn/AB38E834E/4AO+Anm8An/AB3AE/4AOwAn/ABwmEE/4AJ/wn/AB38E/4AO/An/E+3wE4sAE/4AH8An/E+3AE41/E/4nuwAn/E60/E7wmGE/4nQj4n/AAv+E/4nXh4n/AAv8E48HE/4n2gYn/E50BE7v4E98AE/4n3v4n/E50/E/4nOj4nmh4nc+Anwg4n/E50DE80BE/4nOgAnnv4n/E50/E80fE7f4E5MPE/4nOg4nmgYnmgInmgAnnv4nmn4nmj4nmh4na/gnKg4nmgYnmgInmgAnnv4nmn4nZ/wnLh4nmg4nmgYnmgLwaE5bwbE5jwaE5jwaE5jwawDImE5jIaE5sfDJWfE5nAZC/+GZYnPgYYJ/E/E7SgK4AncNhMAE5vgE5sHC4/8fZwnOgAXJE5vwE5x4HVRYnTeI34LJInVIwzeCE5o4CKCQVCgInegEPTognPf4IARdYInlaBYnv/wnXg4n1bQYAUewYnzwAnWj4n24AnWn4nO8An+v4nO+An+Ex3//AmVgInP/gn9gYnP/wnVg4nP/4n9h4nQwAnUj4nQ4An8n4nQ8AnUv4nQ+AnUEyH//Anm/gmTgInmgYnR/wnTg4nR/4nTh4nSwAnSj4nS4AnSn4nS8AnSv4nS+AnSEyX//Anm/gmRgInT/wnRg4nT/4nRh4nUwAnQj4nU4AnQn4nU8AnQv4nU/AnQEyn//gmPgInV/wnPg4nV/4nPh4nWeB8fE6zwPdyrwREyzwPgYnXZBzuXAAOAY0jIPYy7IPEzDINYzLINh4na4AnKn4naUBYma//+T0oABwAnIj4nc+AnIv4nc/h2leJJ2deJImeZI8PE8BQFE0AAB8AmCn4niKIQljAH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/AH4A/ABw"));

var drawCount = 0;
var sideBar = 0;
var sunRise = "00:00";
var sunSet = "00:00";

function log_debug(o) {
}

function loadLocation() {
  location = require("Storage").readJSON(LOCATION_FILE,1)||
/*{"lat":33.7488,"lon":-84.3877,"location":"Atlanta"};
} */

 {"lat":37.5665,"lon":126.9780,"location":"Seoul"};
} 


function extractTime(d){
  var h = d.getHours(), m = d.getMinutes();
  return(("0"+h).substr(-2) + ":" + ("0"+m).substr(-2));
}

function updateSunRiseSunSet(lat, lon){
  var times = SunCalc.getTimes(new Date(), lat, lon);

  sunRise = extractTime(times.sunrise);
  sunSet = extractTime(times.sunset);
}

function draw() {
  log_debug("draw()");
  let date = new Date();
  let da = date.toString().split(" ");
  let hh = da[4].substr(0,2);
  let mm = da[4].substr(3,2);
  
  if (drawCount % 60 == 0)
    updateSunRiseSunSet(location.lat, location.lon);

    if (parseInt(hh) > parseInt(sunRise.substr(0, 2)) && parseInt(hh) < parseInt(sunSet.substr(0,2))) 
    g.drawImage(sunrise_img, 180, 0, { scale: 100 });
    else  (
    g.drawImage(sunset_img, 0, 0, { scale: 10 }));

}

var drawTimeout;

function queueDraw() {
  if (drawTimeout) clearTimeout(drawTimeout);
  drawTimeout = setTimeout(function() {
    drawTimeout = undefined;
    nextSidebar();
    draw();
  }, 60000 - (Date.now() % 60000));
}

log_debug("starting..");
g.clear();
Bangle.loadWidgets();

for (let wd of WIDGETS) {wd.draw=()=>{};wd.area="";}
loadLocation();
draw();






/*
const X = 140, Y = 40;
var ang = 0;

Graphics.prototype.setFontPTSerif = function(scale) {
  this.setFontCustom(
    atob('AAAAAAAAAAAAAD44P7g/uD84AAAgADgAOAA4ADgAOAAAAABgBvAP8B/gHHAP8B/gHkAUABw4Pjg/OH/8f/x//DH4MfAA8BwAPgg+GDZ4PvA/wD/wD/gO+Bz4OPgw+BD4AGAAAADwAfA/+D/4P5g/yD/4PPgE+Af4B/gHGAQIIAA4ADgAMAAD4A/4H/w//ngPYANgA3APP/4f/g/4B+A8ADwAfgB+AH4APAA8AAEAAQABAA/gD+AP4AEAAQABAAAZADsAPwA+ABgAgACAAIAAgACAAIAAAAAQADgAOAA4AAgAPgD8A/APwD4AOAAP4B/wP/g/+CAIP/g/+B/wD+AAABAIEAgf+D/4P/g/+AAIAAAYGDwYPHgw+DHYP5g/+B54CHgwGDg4OTgzGDcIP/g9+DHwIPAAwAHAB8APSB/4P/g/+D/4AEgAOB84Pzg/CDOYM/hz+HHwQMAD4AfwD/gf+BsIM/gj+CP4AfA4ADgAOBgw+DP4N/g/ADwAMAAMcB74P/g/+COIP/g/+D74HPAPAB+IP4g/mCC4P/A/8B/gH4AAAAc4BzgHOAc4AAAHGQc/Bz8HPgAAAQADAAeAB4ANwA3AGOAYYAhgBIAEgASABIAEgASABIAEgASACAAYYBxgHOAOwAeAB4ADAAMAEAA4ADm4I7g/uD44PgAcAAAAA/gP/B4eGfYz+zf7J9kmOSf5J/k3+T+YHDgP8AfgAYAAGAB4AfgP6D+IPoA/yB/4B/gA+AA4AAggCD/4P/g/+D/4Iwg/uD/4P/gc8AfAH/Af8D/4ODgwGCAIODg8eDx4IAg/+D/4P/g/+CAIMBg8eD/4H/AP4AfAIAg/+D/4P/g/+CEIM4g7uDg4IDggCD/4P/g/+D/4IQgzgDuAOAAHwB/wH/A/+Dg4MBggiDD4PPg8+BDwIAg/+D/4P/g/+CEIIQg/+D/4P/g/+CAIIAg/+D/4P/g/+CAIIAE//z//P/4//CAAIAg/+D/4P/g/+CfIL/A++Dx4MDggGCAIP/g/+D/4P/ggCAAIAHgAeCAIP/g/+D/4P4g/8Af4APgD8B/IP/g/+D/4P/ggCCAIP/g/+D/4PggfgAfAI/A/+D/4P/gwAAfAH/Af8D/4ODggCCAIODg/+B/wH/AHwCAIP/g/+D/4P/ggiD+AP4A/gB8AD4A/4D/mf/ZwdkAWQBZwd3/zP+M/4w+DIAg/+D/4P/g/+CHIP/A/+D/4HjgAGBx4Png/eD8IJ4gz+Dn4OfAw8DwAPAA4CD/4P/g/+D/4IAg4CDwAPAAgAD/wP/A/+D/4IAgACCAYP/g/8D/gMAA8AD8AP+A/+Cf4APgj+D/gPwA8ACAAMAA+AD/AP/g/+CH4A/gfwD8AP+Af+AP4I/g/8D+APAAgACAIMDg8eD74P8gvwCfoP/g8+Dh4MBggCCAAOAA8CD8IP/gn+CP4L/g+CDgAMAA4GDg4OPgh+CfoL8g/CD4YODgwOH//f/9//3//QAE8AB8AB8AB8AB8AB5AAX//f/9//3//'),
    32,
    atob("BAYHCQkODgQGBgcJBQcFBgkJCQkJCQkJCQkFBgkJCQgRDAoKDAoJCwwGBgsJDwwMCgwLCQsLDBEMCwoFBgU="),
    16+(scale<<8)+(1<<16)
  );
  return this;
};

function getImage() {
  return
require("heatshrink").decompress(atob("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"));
}

function draw() {
  ang += 0.1;
  g.drawImage(getImage(), 90, 25, {scale:1, rotate:ang});
  var d = new Date();
  var h = d.getHours(), m = d.getMinutes();
  var time = (" "+h).substr(-2) + " : " + m.toString().padStart(2,0);
  g.reset();
  g.setFont("PTSerif", 2);
  g.setFontAlign(1,1);
  g.drawString(time, X, Y, true);
  g.setFont("PTSerif");
  g.setFontAlign(0,1);
  var dateStr = "    "+require("locale").date(d)+"    ";
  g.drawString(dateStr, g.getWidth()/2, Y+12, true);
}
setInterval(draw, 950);


g.clear();
draw();
var secondInterval = setInterval(draw, 1000);
Bangle.on('lcdPower',on=>{
  if (secondInterval) clearInterval(secondInterval);
  secondInterval = undefined;
  if (on) {
    secondInterval = setInterval(draw, 1000);
    draw(); 
  }
});

Bangle.setUI("clock");
Bangle.loadWidgets();
Bangle.drawWidgets();
*/
