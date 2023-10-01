// SHUT DOWN FOR GOOD SRRY! \\
// it doesnt work anymore, and its way too hard to fix with 1k+ lines \\

window.location.replace("https://cookieclicker.applecoders.repl.co/assets/other/broken.html");


//---- LocalStorage ----\\
if(localStorage.getItem('cookies') == undefined) {
  localStorage.setItem('cookies', 0);
}
if(localStorage.getItem('name') == undefined) {
  localStorage.setItem('name', 'User');
}
document.getElementById('bakeryName').innerHTML = localStorage.getItem('name') + "'s Bakery!"

    
notifyMe("Welcome to Cookie Clicker")
var cookies = document.getElementById("cookies");
var codeText = document.getElementById("codeText");
var cookiesNum = localStorage.getItem('cookies'); /* Use this for Changing Cookie Value! */
cookies.innerHTML = cookiesNum + " Cookies";
localStorage.setItem("lead", 12333)
var lead = localStorage.getItem("lead")
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
var robotbtn = document.getElementById("robot");
var robotAmount = 5000;
var robots = 0;
var robotInterval;
robotCookieAmount = 500;
var robotCookies = robots * robotCookieAmount;
var robot2btn = document.getElementById("robot2");
var robot2Amount = 10000;
var robots2 = 0;
var robot2Interval;
robot2CookieAmount = 1000;
var robot2Cookies = robots2 * robot2CookieAmount;
var bakery = document.getElementById("bakery")

var thanosAmount = 15000;
var thanos = 0;
var thanosInterval;
thanosCookieAmount = 15000;
var thanosCookies = robots2 * robot2CookieAmount;
var thanosbtn = document.getElementById("thanos");


// Mystery Button (Bug Fixed!) \\
var mysteryAmount = 100000;
var mysteries = 0;
var mysteryInterval;
var mysteryCookieAmount = 150000;
var mysteryCookies = mysteries * mysteryCookieAmount;
var mysterybtn = document.getElementById("mystery");

// Legend Button (Bug Fixed!) \\
var legendAmount = 1000000;
var legends = 0;
var legendInterval;
var legendCookieAmount = 1000000;
var legendCookies = legends * legendCookieAmount;
var legendbtn = document.getElementById("legendbtn");

// BitCookie Button (Bug Fixed!) \\
var bitAmount = 10000000;
var bits = 0;
var bitInterval;
var bitCookieAmount = 5000000;
var bitCookies = bits * bitCookieAmount;
var bitbtn = document.getElementById("bitbtn");

// Laser Cutter Button (Bug Fixed by SQcodes!) \\
var laserAmount = 1000000000;
var lasers = 0;
var laserInterval;
var laserCookieAmount = 500000000;
var laserCookies = lasers * laserCookieAmount;
var laserbtn = document.getElementById("laserbtn");
// New Realm 🌍 Button (Bug Fixed by SQcodes!) \\
var realmAmount = 10000000000;
var realms = 0;
var realmInterval;
var realmCookieAmount = 1000000000;
var realmCookies = bits * realmCookieAmount;
var realmbtn = document.getElementById("realmbtn");

// Cookie Malware Button (Bug Fixed!) \\
var malwareAmount = 100000000;
var malwares = 0;
var malwareInterval;
var malwareCookieAmount = 50000000;
var malwareCookies = malwares * malwareCookieAmount;
var malwarebtn = document.getElementById("malwarebtn");

// Legend Cutter Button (Bug Fixed by DaxCodes!) \\
var LegendCutterAmount = 50000000000;
var LegendCutters = 0;
var LegendCutterInterval;
var LegendCutterCookieAmount = 50000000000;
var LegendCutterCookies = LegendCutters * LegendCutterCookieAmount;
var LegendCutterbtn = document.getElementById("legendcookiecutterbtn");

// GOD TIER LASER CUTTER BUTTON (Bug Fixed by DaxCodes!) \\
var GodTLaserAmount = 150000000000;
var GodTLasers = 0;
var GodTLaserInterval;
var GodTLaserCookieAmount = 125000000000;
var GodTLaserCookies = GodTLasers * GodTLaserCookieAmount;
var GodTLaserbtn = document.getElementById("godtlaserbtn");

//////////////////////////////
    // End of Buttons \\
//////////////////////////////

// Code Values \\
var eggdexValue = false
var fireValue = false
var dinoValue = false

// More DevTools & Other
var goldencookie = document.getElementById("GoldCookie")
var newCode = document.getElementById("newCode")
var homeopen = document.getElementById("openhomepage")

// DevTools Variables \\
var cookiegiver = document.getElementById("cookiegiver");

//if(window.location.href == 'https://cookie-clicker.applecoders.repl.co/'{window.location.replace("https://cookieclicker.applecoders.repl.co/assets/other/down.html");}

  

// Functions \\
var leaders = document.getElementById("leaders")
function addcookie() {
  localStorage.setItem('cookies', parseInt(localStorage.getItem('cookies')) + upgrade);
  cookiesNum = localStorage.getItem('cookies');
  cookies.innerHTML = cookiesNum + " Cookies";
}

function upgradefunc() {
  if (cookiesNum == cookieamount) {
    upgrade += 1;
    cookiesNum -= cookieamount;
    cookies.innerHTML = cookiesNum + " Cookies";
    codeText.innerHTML = "Success";
  }
   
  /* dont kill the grandmas in the js factory*/
  if (cookiesNum >= cookieamount) {
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
     codeText.innerHTML = "Success";
  }
  if (cookiesNum >= grandmaAmount) {
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
  if (cookiesNum >= chefAmount) {
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
  if (cookiesNum >= factoryAmount) {
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



function processor() {
  if (cookiesNum == processorAmount) {
    cookiesNum -= processorAmount;
    processors += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    processorIntervalFunc()
  }
  if (cookiesNum >= processorAmount) {
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
  if (cookiesNum >= hackerAmount) {
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

function robot() {
  if (cookiesNum == robotAmount) {
    cookiesNum -= robotAmount;
    robots += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    robotIntervalFunc()
  }
  if (cookiesNum >= robotAmount) {
    cookiesNum -= robotAmount;
    robots += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    robotIntervalFunc()
  }
}

function robotIntervalFunc() {
  robotInterval = setInterval(robotNum, 1000)
}

function robotNum() {
  robotCookies = robots * robotCookieAmount;
  cookiesNum += robotCookies;
  cookies.innerHTML = cookiesNum + " Cookies";
}

function robot2() {
  if (cookiesNum == robot2Amount) {
    cookiesNum -= robot2Amount;
    robots2 += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    robot2IntervalFunc()
  }
  if (cookiesNum >= robot2Amount) {
    cookiesNum -= robot2Amount;
    robots2 += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    robot2IntervalFunc()
  }
}

function robot2IntervalFunc() {
  robot2Interval = setInterval(robot2Num, 1000)
}

function robot2Num() {
  robot2Cookies = robots2 * robot2CookieAmount;
  cookiesNum += robot2Cookies;
  cookies.innerHTML = cookiesNum + " Cookies";
}

function infinitecookies() {
  cookiesNum += 99999999999999;
  cookies.innerHTML = cookiesNum + " Cookies";
}
function messageText(message) {
  codeText.innerHTML = message;
  setTimeout(() => { codeText.innerHTML = "" }, 2500);
}

// CC Codes Below! \\

function verifyLogin() {
  if (bakery.value == "corn mod") {
    codeText.innerHTML = "Code Accepted: will expire soon i swear :/";
    setTimeout(() => { codeText.innerHTML = "" }, 2500);
    bakery.value = "yellow squishy stuff in a corn";
    cookie.src = "assets/images/snot-sick.gif";
  }
  if (bakery.value == "dev tools") {
    codeText.innerHTML = "Code Accepted: Developer Tools Added!";
    setTimeout(() => { codeText.innerHTML = "" }, 2500);
    cookies.innerHTML = cookiesNum + " Cookies";
    opendev()
  }
  if (bakery.value == "AppleCoders") {
    codeText.innerHTML = "Message: AppleCoders is cool!";
    setTimeout(() => { codeText.innerHTML = "" }, 2500);
    
    
  }
  if (bakery.value == "devtools") {
    messageText("DeveloperTools Added!")
    cookies.innerHTML = cookiesNum + " Cookies";
    dev.style.opacity = 1;
    opendev()
  }

  if (bakery.value == "dev") {
    codeText.innerHTML = "Code Invalid: Expired or Invalid.";
    setTimeout(() => { codeText.innerHTML = "" }, 2500);
  }
  if (bakery.value == "creeper") {
    codeText.innerHTML = "Code Accepted: Creeper Mode Activated!";
    setTimeout(() => { codeText.innerHTML = "" }, 2500);
    body.style.background = "url(assets/images/creeper.jpg)"
  }
  if (bakery.value == "rootbeer") {
    codeText.innerHTML = "Code Invalid: Expired or Invalid.";
    setTimeout(() => { codeText.innerHTML = "" }, 2500);

  }
  if (bakery.value == "100key") {
    codeText.innerHTML = "Code Accepted: Gave 100 of Each Upgrade!";
    setTimeout(() => { codeText.innerHTML = "" }, 2500);
    thanos = 100
    thanosIntervalFunc()
    robots2 = 100
    robot2IntervalFunc()
    robots = 100
    robotIntervalFunc()
    grandmas = 100
    grandmaIntFunc()
    chefs = 100
    chefIntervalFunc()
    hackers = 100
    hackerIntervalFunc()
    processors = 100
    processorIntervalFunc()
    factories = 100
    factoryIntervalFunc()
  }

  if (bakery.value == "suskey10i") {
    codeText.innerHTML = "Code Accepted: Gave 1000 of Each Upgrade!";
    setTimeout(() => { codeText.innerHTML = "" }, 2500);
    thanos = 1000
    thanosIntervalFunc()
    robots2 = 1000
    robot2IntervalFunc()
    robots = 1000
    robotIntervalFunc()
    grandmas = 1000
    grandmaIntFunc()
    chefs = 1000
    chefIntervalFunc()
    hackers = 1000
    hackerIntervalFunc()
    processors = 1000
    processorIntervalFunc()
    factories = 1000
    factoryIntervalFunc()
  }
  if (bakery.value == "one") {
    codeText.innerHTML = "Code Accepted: Gave 10000 of Each Upgrade!";
    setTimeout(() => { codeText.innerHTML = "" }, 2500);
    thanos = 10000
    thanosIntervalFunc()
    robots2 = 10000
    robot2IntervalFunc()
    robots = 10000
    robotIntervalFunc()
    grandmas = 10000
    grandmaIntFunc()
    chefs = 10000
    chefIntervalFunc()
    hackers = 10000
    hackerIntervalFunc()
    processors = 10000
    processorIntervalFunc()
    factories = 10000
    factoryIntervalFunc()
  }
  if (bakery.value == "suskey1000i") {
    codeText.innerHTML = "Code Accepted: Gave 100000 of Each Upgrade!";
    setTimeout(() => { codeText.innerHTML = "" }, 2500);
    thanos = 100000
    thanosIntervalFunc()
    robots2 = 100000
    robot2IntervalFunc()
    robots = 100000
    robotIntervalFunc()
    grandmas = 100000
    grandmaIntFunc()
    chefs = 100000
    chefIntervalFunc()
    hackers = 100000
    hackerIntervalFunc()
    processors = 100000
    processorIntervalFunc()
    factories = 100000
    factoryIntervalFunc()
  }
  if (bakery.value == "suskey1000000i") {
    messageText("Code Accepted: Gave 1000000 of Each Upgrade!");
    thanos = 1000000
    thanosIntervalFunc()
    robots2 = 1000000
    robot2IntervalFunc()
    robots = 1000000
    robotIntervalFunc()
    grandmas = 1000000
    grandmaIntFunc()
    chefs = 1000000
    chefIntervalFunc()
    hackers = 1000000
    hackerIntervalFunc()
    processors = 10000000
    processorIntervalFunc()
    factories = 1000000
    factoryIntervalFunc()
  }
  if (bakery.value == "suskeyi") {
    messageText("DevCode Accepted: Gave 100M of every upgrade!")
    thanos = 100000000
    thanosIntervalFunc()
    robots2 = 100000000
    robot2IntervalFunc()
    robots = 100000000
    robotIntervalFunc()
    grandmas = 100000000
    grandmaIntFunc()
    chefs = 100000000
    chefIntervalFunc()
    hackers = 100000000
    hackerIntervalFunc()
    processors = 100000000
    processorIntervalFunc()
    factories = 100000000
    factoryIntervalFunc()
    legends = 100000000
    legendIntervalFunc()
    mysteries = 100000000
    mysteryIntervalFunc()
    bits = 100000000
    bitIntervalFunc()
  }
  
  if (bakery.value == "eggdex") {
    if (eggdexValue == true) {
      messageText("Code Already Redeemed!")
    } else {
      eggdexValue = true;
      messageText("Code Accepted: E G G D E X");
      cookiesNum += 100000;
      cookies.innerHTML = cookiesNum + " Cookies";
    }
  }
  if (bakery.value == "suskey1") {
    codeText.innerHTML = "Code Accepted: Hi supreme member.";
    thanos += 10000000000000000000000000000000000000000000000
    thanosIntervalFunc()
    robots2 += 10000000000000000000000000000000000000000000000
    robot2IntervalFunc()
    robots += 10000000000000000000000000000000000000000000000
    robotIntervalFunc()
    grandmas += 10000000000000000000000000000000000000000000000
    grandmaIntFunc()
    chefs += 10000000000000000000000000000000000000000000000
    chefIntervalFunc()
    hackers += 10000000000000000000000000000000000000000000000
    hackerIntervalFunc()
    processors += 10000000000000000000000000000000000000000000000
    processorIntervalFunc()
    factories += 10000000000000000000000000000000000000000000000
    factoryIntervalFunc()
  }
  if (bakery.value == "fire") {
    if (fireValue == true) {
      messageText("Code Already Redeemed!")
    } else {
      fireValue = true;
      messageText("Code Accepted: Good job on all the fire alarms the class has done!");
      cookiesNum += 85000;
      cookies.innerHTML = cookiesNum + " Cookies";
    }
  }
  if(bakery.value == "dino") {
      if(dinoValue == true) {
        messageText("Code Already Redeemed!")
      } else {
        dinoValue = true;
        messageText("Code Accepted: bean said it.");
        cookiesNum += 50000;
        cookies.innerHTML = cookiesNum + " Cookies";
      }
  }
}
function thanosgo() {
  if (cookiesNum == thanosAmount) {
    cookiesNum -= thanosAmount;
    thanos += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    thanosIntervalFunc()
  }
  if (cookiesNum >= thanosAmount) {
    cookiesNum -= thanosAmount;
    thanos += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    thanosIntervalFunc()
  }
}

function thanosIntervalFunc() {
  thanosInterval = setInterval(thanosNum, 1000)
}

function thanosNum() {
  thanosCookies = thanos * thanosCookieAmount;
  cookiesNum += thanosCookies;
  cookies.innerHTML = cookiesNum + " Cookies";
}
function x10() {
  cookiesNum *= 10;
  cookies.innerHTML = cookiesNum + " Cookies";
}
function x100() {
  cookiesNum *= 100;
  cookies.innerHTML = cookiesNum + " Cookies";
}

function x1000() {
  cookiesNum *= 1000;
  cookies.innerHTML = cookiesNum + " Cookies";
}

function x10000() {
  cookiesNum *= 10000;
  cookies.innerHTML = cookiesNum + " Cookies";
}
function x100000() {
  cookiesNum *= 100000;
  cookies.innerHTML = cookiesNum + " Cookies";
}

function wipedev() {
  cookiesNum = 0;
  cookies.innerHTML = cookiesNum + " Cookies";
  thanos = 0
  robots2 = 0
  robots = 0
  processors = 0
  factories = 0
  grandmas = 0
  chefs = 0
  hackers = 0
  legends = 0
  mysteries = 0
  bits = 0
}

function ruinfun() {
  cookiesNum = 99999999999999999999999999999999999999;
  cookies.innerHTML = cookiesNum + " Cookies";
  thanos = 9999999999999999999999999999999999
  thanosIntervalFunc()
  robots2 = 9999999999999999999999999999999999999
  robot2IntervalFunc()
  robots = 9999999999999999999999999999999999999999
  robotIntervalFunc()
  grandmas = 999999999999999999999999999999999999999999
  grandmaIntFunc()
  chefs = 999999999999999999999999999999999999999999999999999999999999
  chefIntervalFunc()
  hackers = 99999999999999999999999999999999999999999999999999999999
  hackerIntervalFunc()
  processors = 999999999999999999999999999999999999999999999999999999999999999
  processorIntervalFunc()
  factories = 99999999999999999999999999999999999999999999999999999999999999999999999999999
  factoryIntervalFunc()
  legends = 99999999999999999999999999999999999999999999999999999999999999999999999999999
  legendIntervalFunc()
  mysteries = 99999999999999999999999999999999999999999999999999999999999999999999999999999
  mysteryIntervalFunc()
  bits = 99999999999999999999999999999999999999999999999999999999999999999999999999999
  bitIntervalFunc()
}

function closedev() {
  dev.style.opacity = 0;
  devopen.style.opacity = 1;
  devopen.style.pointerEvents = "all";
  dev.style.pointerEvents = "none";
}

function opendev() {
  dev.style.opacity = 1;
  devopen.style.opacity = 0;
  devopen.style.pointerEvents = "all";
  dev.style.pointerEvents = "all";
}

function goldcookiess() {
  goldencookie.style.pointerEvents = 'all';
  goldencookie.style.opacity = 1;
}

function goldclick() {
  cookiesNum += 1000;
  cookies.innerHTML = cookiesNum + " Cookies";
  goldencookie.style.opacity = 0;
  goldencookie.style.pointerEvents = 'none';
  // Golden Cookie Fixed on May 10, 2021 
}

function newestCode() {
  newCode.innerHTML = "Code: fire";
  setTimeout(() => { newCode.innerHTML = "" }, 2500);
}

function buyeveryupgrade() {
  thanos += 100
  thanosIntervalFunc()
  robots2 += 100
  robot2IntervalFunc()
  robots += 100
  robotIntervalFunc()
  grandmas += 100
  grandmaIntFunc()
  chefs += 100
  chefIntervalFunc()
  hackers += 100
  hackerIntervalFunc()
  processors += 100
  processorIntervalFunc()
  factories += 100
  factoryIntervalFunc()
  legends += 100
  legendIntervalFunc()
  mysteries += 100
  mysteryIntervalFunc()
  bits += 100
  bitIntervalFunc()

  console.log("Gave x100 of every upgrade!")
}


function giveCookiesdev() {
  var cookiesDev = cookiegiver.value;
  var devCookieAmount = parseInt(cookiesDev);
  cookiesNum += devCookieAmount;
  cookies.innerHTML = cookiesNum + " Cookies";
  codeText.innerHTML = "Gave " + devCookieAmount + " Cookies Succesfully!";
  setTimeout(() => { codeText.innerHTML = "" }, 2500);
}
function developerTools() {
  // Only used for Console Triggers //
  codeText.innerHTML = "DeveloperTools Added";
  setTimeout(() => { codeText.innerHTML = "" }, 2500);
  dev.style.opacity = 1
  dev.style.pointerEvents = "all";

  console.log("Opened Developer Tools!")
  console.log("CC DevTools created by DaxCodes, sqcodes")
}
function giveCookies(ccamount) {
  console.log("Gave " + ccamount + " Cookies!")
  cookiesNum += ccamount
  cookies.innerHTML = cookiesNum + " Cookies";
  codeText.innerHTML = "Gave " + ccamount + " Cookies Succesfully!";
  setTimeout(() => { codeText.innerHTML = "" }, 2500);
}

function closehomeopen() {
  homeopen.style.opacity = 0;
  homeopen.style.pointerEvents = "none";

}

function mysterymode() {
  if (cookiesNum == mysteryAmount) {
    cookiesNum -= mysteryAmount;
    mysteries += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    mysteryIntervalFunc()
  }
  if (cookiesNum >= mysteryAmount) {
    cookiesNum -= mysteryAmount;
    mysteries += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    mysteryIntervalFunc()
  }
}

function mysteryIntervalFunc() {
  mysteryInterval = setInterval(mysteryNuma, 1000)
}

function mysteryNuma() {
  mysteryCookies = mysteries * mysteryCookieAmount;
  cookiesNum += mysteryCookies;
  cookies.innerHTML = cookiesNum + " Cookies";
}

function legendminer() {
  if (cookiesNum == legendAmount) {
    cookiesNum -= legendAmount;
    legends += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    legendIntervalFunc()
  }
  if (cookiesNum >= legendAmount) {
    cookiesNum -= legendAmount;
    legends += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    legendIntervalFunc()
  }
}

function legendIntervalFunc() {
  legendInterval = setInterval(legendNum, 1000)
}

function legendNum() {
  legendCookies = legends * legendCookieAmount;
  cookiesNum += legendCookies;
  cookies.innerHTML = cookiesNum + " Cookies";
}

function bitminer() {
  if (cookiesNum == bitAmount) {
    cookiesNum -= bitAmount;
    bits += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    bitIntervalFunc()
  }
  if (cookiesNum >= bitAmount) {
    cookiesNum -= bitAmount;
    bits += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    bitIntervalFunc()
  }
}

function bitIntervalFunc() {
  bitInterval = setInterval(bitNum, 1000)
}

function bitNum() {
  bitCookies = bits * bitCookieAmount;
  cookiesNum += bitCookies;
  cookies.innerHTML = cookiesNum + " Cookies";
}

function malware() {
  if (cookiesNum == malwareAmount) {
    cookiesNum -= malwareAmount;
    malwares += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    malwareIntervalFunc()
  }
  if (cookiesNum >= malwareAmount) {
    cookiesNum -= malwareAmount;
    malwares += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    malwareIntervalFunc()
  }
}

function malwareIntervalFunc() {
  malwareInterval = setInterval(malwareNum, 1000)
}

function malwareNum() {
  malwareCookies = malwares * malwareCookieAmount;
  cookiesNum += malwareCookies;
  cookies.innerHTML = cookiesNum + " Cookies";
}

function lasercutter() {
  if (cookiesNum == laserAmount) {
    cookiesNum -= laserAmount;
    lasers += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    laserIntervalFunc()
  }
  if (cookiesNum >= laserAmount) {
    cookiesNum -= laserAmount;
    lasers += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    laserIntervalFunc()
  }
}

function laserIntervalFunc() {
  laserInterval = setInterval(laserNum, 1000)
}

function laserNum() {
  laserCookies = lasers * laserCookieAmount;
  cookiesNum += laserCookies;
  cookies.innerHTML = cookiesNum + " Cookies";
}
function newrealm() {
  if (cookiesNum == realmAmount) {
    cookiesNum -= realmAmount;
    realms += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    realmIntervalFunc()
  }
  if (cookiesNum >= realmAmount) {
    cookiesNum -= realmAmount;
    reamls += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    realmIntervalFunc()
  }
}

function realmIntervalFunc() {
  realmInterval = setInterval(realmNum, 1000)
}

function realmNum() {
  realmCookies = realm * realmCookieAmount;
  cookiesNum += realmCookies;
  cookies.innerHTML = cookiesNum + " Cookies";
}
function notifyMe(msg) {
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    alert(msg);
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification(msg);
  }

  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification(msg);
      }
    });
  }
}

function legendcutter() {
  // 1000 LINES OF JS  :OOOOOOOo \\
  if (cookiesNum == LegendCutterAmount) {
    cookiesNum -= LegendCutterAmount;
    LegendCutters += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    legendcutterIntervalFunc()
  }
  if (cookiesNum >= LegendCutterAmount) {
    cookiesNum -= LegendCutterAmount;
    LegendCutters += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    legendcutterIntervalFunc()
  }
}

function legendcutterIntervalFunc() {
  LegendCutterInterval = setInterval(legendcutterNum, 1000)
}

function legendcutterNum() {
  LegendCutterCookies = LegendCutters * LegendCutterCookieAmount;
  cookiesNum += LegendCutterCookies;
  cookies.innerHTML = cookiesNum + " Cookies";
}
// God Tier Laser Function \\
function godtlaser() {
  if (cookiesNum == GodTLaserAmount) {
    cookiesNum -= GodTLaserAmount;
    GodTLasers += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    godtlaserIntervalFunc()
  }
  if (cookiesNum >= GodTLaserAmount) {
    cookiesNum -= GodTLaserAmount;
    GodTLasers += 1;
    cookies.innerHTML = cookiesNum + " Cookies";
    godtlaserIntervalFunc()
  }
}

function godtlaserIntervalFunc() {
  GodTLaserInterval = setInterval(godtlaserNum, 1000)
}

function godtlaserNum() {
  GodTLaserCookies = GodTLasers * GodTLaserCookieAmount;
  cookiesNum += GodTLaserCookies;
  cookies.innerHTML = cookiesNum + " Cookies";
}

function devtools() {
  opendev()
  console.log('devtools by daxcodes and sqcodes.')
}
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
upgradebtn.style.opacity = 1;
    grandmabtn.style.opacity = 1;
    chefbtn.style.opacity = 1;
    factorybtn.style.opacity = 1;
    highspeedbtn.style.opacity = 1;
    hackerbtn.style.opacity = 1;
    robotbtn.style.opacity = 1;
    robot2btn.style.opacity = 1;
    thanosbtn.style.opacity = 1;
    mysterybtn.style.opacity = 1;
    legendbtn.style.opacity = 1;
    bitbtn.style.opacity = 1;
    malwarebtn.style.opacity = 1;
    laserbtn.style.opacity = 1;
    LegendCutterbtn.style.opacity = 1;
    GodTLaserbtn.style.opacity = 1;
    upgradebtn.style.pointerEvents = "all";
    grandmabtn.style.pointerEvents = "all";
    chefbtn.style.pointerEvents = "all";
    factorybtn.style.pointerEvents = "all";
    highspeedbtn.style.pointerEvents = "all";
    hackerbtn.style.pointerEvents = "all";
    robotbtn.style.pointerEvents = "all";
    robot2btn.style.pointerEvents = "all";
    thanosbtn.style.pointerEvents = "all";
    mysterybtn.style.pointerEvents = "all";
    legendbtn.style.pointerEvents = "all";
    bitbtn.style.pointerEvents = "all";
    malwarebtn.style.pointerEvents = "all";
    laserbtn.style.pointerEvents = "all";
    LegendCutterbtn.style.pointerEvents = "all";
    GodTLaserbtn.style.pointerEvents = "all";
var dark = false;
function darkmode(){
  var body = document.getElementById("bodything")
  if(dark == false) {
    document.body.style.background = "linear-gradient(to bottom, grey, black)"
    document.getElementById("dark").innerHTML = "🌞";
    dark = true;
  } else {
    document.body.style.background = "linear-gradient(to bottom, rgb(0, 238, 255), rgb(0, 17, 255))"
    document.getElementById("dark").innerHTML = "🌙";
    dark = false;
  }
  
}
var fullscreenA = false;
function fullscreenMode(){
  if(fullscreenA == false) {
    document.documentElement.requestFullscreen();
    fullscreenA = true;
    document.getElementById("fullscreen").innerHTML = "Exit Fullscreen";
  } else {
    document.exitFullscreen();
    document.getElementById("fullscreen").innerHTML = "Fullscreen";
    fullscreenA = false;
  }
}
function resetstats() {
  var a = prompt('Are you sure you want to reset? (yes/no)');
  if(a == 'yes') {
    localStorage.setItem('cookies', 0);
    cookiesNum = localStorage.getItem('cookies');
    localStorage.setItem('name', 'User');
    cookies.innerHTML = cookiesNum + ' Cookies';
    alert('Successfully Wiped!');
    location.reload();
  } else {
    alert('Reset Cancelled!');
  }
}
function saveName() {
  localStorage.setItem('name', document.getElementById('bakery1').value);
  alert('Bakery Name Saved!');
}