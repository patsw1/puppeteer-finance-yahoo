const puppeteer = require('puppeteer');
async function start() {
  const url = 'https://finance.yahoo.com/quote/TSLA?p=TSLA&.tsrc=fin-srch';
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();
  await page.goto(url);
  var element = await page.waitForXPath("/html/body/div[1]/div/div/div[1]/div/div[2]/div/div/div[5]/div/div/div/div[3]/div[1]/div[1]/span[1]")
  var price = await page.evaluate(element => element.textContent, element);
  console.log(price);
}
start()