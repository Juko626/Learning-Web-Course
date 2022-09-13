const puppeteer = require("puppeteer");

const main = async () => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.goto("https://www.naver.com");
  await page.screenshot({ path: "screenshot.jpg",fullPage: true});// jpg 스크린 샷
  //await page.pdf({ path: "test.pdf", format: "A4" }); //pdf

  await browser.close();
};

main();
