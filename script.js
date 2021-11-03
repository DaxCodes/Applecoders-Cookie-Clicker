var cookies = document.getElementById("cookies");
var cookiesNum = 1000;
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

/* the grandma do be dien*/
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
/*dont kill the chefs either*/
/*actualy do kill the chefs and my grandmas*/
