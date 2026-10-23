import { test, chromium, firefox } from "@playwright/test";

test("Launch Edge and Firefox", async () => {

    const browser = await chromium.launch({
        channel: "msedge",
        headless: false
    });

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("https://www.redbus.in");

    console.log("RedBus Title:", await page.title());
    console.log("RedBus URL:", page.url());

    const firefoxbrowser = await firefox.launch({
        headless: false
    });

    const firefoxcontext = await firefoxbrowser.newContext();

    const firefoxpage = await firefoxcontext.newPage();

    await firefoxpage.goto("https://www.flipkart.com");

    console.log("Flipkart Title:", await firefoxpage.title());
    console.log("Flipkart URL:", firefoxpage.url());

    await page.waitForTimeout(5000);

    await browser.close();
    await firefoxbrowser.close();

});