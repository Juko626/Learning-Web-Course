const puppeteer = require("puppeteer")

const main = async () => {
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();

  await page.goto('https://news.daum.net/digital#1');

  const data = await page.evaluate(() => {
    const webToonLists = document.querySelectorAll('.tit_g  a');

    const titles = Array.from(webToonLists).map((li)=> li.textContent);
    
    return titles;
  })

  console.log(data);

  await browser.close();
}


main();