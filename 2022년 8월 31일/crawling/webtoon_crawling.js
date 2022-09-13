const puppeteer = require("puppeteer")

const main = async () => {
  const browser = await puppeteer.launch({
    headless: true
  });
  const page = await browser.newPage();

  await page.goto('https://comic.naver.com/webtoon/weekdayList?week=mon');

  const data = await page.evaluate(() => {
    const webToonLists = document.querySelectorAll('ul.img_list > li dl>dt>a');

    const titles = Array.from(webToonLists).map(li => li.textContent.trim())
    
    return titles;
  })

  console.log(data);

  await browser.close();
}


main();