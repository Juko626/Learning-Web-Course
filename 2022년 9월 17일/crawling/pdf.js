const puppeteer =require('puppeteer')

const main = async() => {
    const browswer = await puppeteer.launch({
        headless:true
    });
    const page =await browswer.newPage();
    

    await page.goto('http://www.naver.com');
    await page.pdf({path: 'test.pdf',format:'A4'})
    
    await browswer.close();
}

main();