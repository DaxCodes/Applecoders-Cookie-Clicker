var cookies = document.getElementById("cookies");
var cookiesNum = 0;
var cookieimg = document.getElementById("cookie");
var upgrade = 1;
var upgradebutton = document.getElementById("upgradebtn");
var cookieamount = 50;
var grandmaAmount = 100;
var grandmas = 0;
var grandmaInterval;
var body = document.getElementById("body");
var chefAmount = 200;
var chefs = 0;
var chefInterval;
var chefcookieAmount = 5;
var chefcookies = chefs * chefcookieAmount;
var factoryAmount = 1000;
var factories = 0;
var factoryInterval;
var factoryCookieAmount = 25;
var factoryCookies = factories * factoryCookieAmount;
var opacityScale = 0;
var upgradebtn = document.getElementById("upgradebtn");
var grandmabtn = document.getElementById("grandmalol");
var chefbtn = document.getElementById("chef");
var factorybtn = document.getElementById("factory");
var showUpgrades = document.getElementById("showUpgrades");
var highspeedbtn = document.getElementById("HighSpeedProcessor");
var processorAmount = 1500;
var processors = 0;
var processorInterval;
var processorCookieAmount = 50;
var processorCookies = processors * processorCookieAmount;
var hackerbtn = document.getElementById("CookieHacker");
var hackerAmount = 2000;
var hackers = 0;
var hackerInterval;
var hackerCookieAmount = 150;
var hackerCookies = hackers * hackerCookieAmount;
var halloweentheme = document.getElementById("halloweenbutton");
var thanksgivingtheme = document.getElementById("thanksgiving");


function addcookie()
{
  cookiesNum += upgrade;
  cookies.innerHTML = cookiesNum + " Cookies";
}

function upgradefunc()
{
  if (cookiesNum == cookieamount)
  {
    upgrade += 1;
    cookiesNum -= cookieamount;
    cookies.innerHTML = cookiesNum + " Cookies";
  }
/* dont kill the grandmas in the js factory*/ 
  if (cookiesNum >= cookieamount)
  {
    upgrade += 1;
    cookiesNum -= cookieamount;
    cookies.innerHTML = cookiesNum + " Cookies";
  }
}

function grandma() {

  if (cookiesNum == grandmaAmount) {
    cookiesNum -= grandmaAmount;
    grandmas += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    grandmaIntFunc()
  }
  if (cookiesNum >= grandmaAmount)
  {
    cookiesNum -= grandmaAmount;
    grandmas += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    grandmaIntFunc()
  }
}

function grandmaIntFunc() {
  grandmaInterval = setInterval(grandmaNum, 1000);
}

function grandmaNum() {
  cookiesNum += grandmas;
  cookies.innerHTML = cookiesNum + " Cookies";
}

function chef() {
  if (cookiesNum == chefAmount) {
    cookiesNum -= chefAmount;
    chefs += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    chefIntervalFunc()
  }
  if (cookiesNum >= chefAmount)
  {
    cookiesNum -= chefAmount;
    chefs += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    chefIntervalFunc()
  }
}

function chefIntervalFunc() {
  chefInterval = setInterval(chefNum, 1000);
}

function chefNum() {
  chefcookies = chefs * chefcookieAmount;
  cookiesNum += chefcookies;
  cookies.innerHTML = cookiesNum + " Cookies";
}

function factory() {
  if (cookiesNum == factoryAmount) {
    cookiesNum -= factoryAmount;
    factories += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    factoryIntervalFunc()
  }
  if (cookiesNum >= factoryAmount)
  {
    cookiesNum -= factoryAmount;
    factories += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    factoryIntervalFunc()
  }
}

function factoryIntervalFunc() {
  factoryInterval = setInterval(factoryNum, 1000)
}

function factoryNum() {
  factoryCookies = factories * factoryCookieAmount;
  cookiesNum += factoryCookies;
  cookies.innerHTML = cookiesNum + " Cookies";
}

function showAllUpgrades() {
  if (opacityScale == 0) {
    opacityScale = 1;
    upgradebtn.style.opacity = 1;
    grandmabtn.style.opacity = 1;
    chefbtn.style.opacity = 1;
    factorybtn.style.opacity = 1;
    highspeedbtn.style.opacity = 1;
    hackerbtn.style.opacity = 1;
    showUpgrades.innerHTML = "Close All Upgrades..";
  
  } else {
    opacityScale = 0;
    upgradebtn.style.opacity = 0;
    grandmabtn.style.opacity = 0;
    chefbtn.style.opacity = 0;
    factorybtn.style.opacity = 0;
    highspeedbtn.style.opacity = 0;
    hackerbtn.style.opacity = 0;
    showUpgrades.innerHTML = "Open All Upgrades...";
  }
}

function processor() {
  if (cookiesNum == processorAmount) {
    cookiesNum -= processorAmount;
    processors += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    processorIntervalFunc()
  }
  if (cookiesNum >= processorAmount)
  {
    cookiesNum -= processorAmount;
    processors += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    processorIntervalFunc()
  }
}

function processorIntervalFunc() {
  processorInterval = setInterval(processorNum, 1000)
}

function processorNum() {
  processorCookies = processors * processorCookieAmount;
  cookiesNum += processorCookies;
  cookies.innerHTML = cookiesNum + " Cookies";
}

function hacker() {
  if (cookiesNum == hackerAmount) {
    cookiesNum -= hackerAmount;
    hackers += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    hackerIntervalFunc()
  }
  if (cookiesNum >= hackerAmount)
  {
    cookiesNum -= hackerAmount;
    hackers += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    hackerIntervalFunc()
  }
}

function hackerIntervalFunc() {
  hackerInterval = setInterval(hackerNum, 1000)
}

function hackerNum() {
  hackerCookies = hackers * hackerCookieAmount;
  cookiesNum += hackerCookies;
  cookies.innerHTML = cookiesNum + " Cookies";
}

function halloweenbtn() {
  var answer = window.confirm("WARNING: Clicking OK will redirect you to the theme, but all your data will be lost!");
  if (answer) {
    window.location.replace("/assets/Themes/halloween.html");
  }
  else {
    console.log("Cancelled");
  }
}

function thanksgivingbtn() {
  var answer = window.confirm("WARNING: Clicking OK will redirect you to the theme, but all your data will be lost!");
  if (answer) {
    window.location.replace("/assets/Themes/thanksgiving.html");
  }
  else {
    console.log("Cancelled");
  }
}

function homebutton() {
  var answer = window.confirm("WARNING: Clicking OK will redirect you to the Regular Theme, but all your progress will be lost!");
  if (answer) {
    window.location.replace("https://Cookie-Clicker.applecoders.repl.co");
  }
  else {
    console.log("Cancelled");
  }
}