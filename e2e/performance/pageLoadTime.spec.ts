import { chromium } from 'playwright';

(async () => {
   const browser = await chromium.launch();
   const page = await browser.newPage();

   // Enable request interception to capture load event timing
   await page.route('**/*', route => {
       route.continue().then(response => {
           const res = response as any; // Type assertion to 'any' to access the 'request' property
        //    if (response && response.request().frame() === page.mainFrame()) {
           if (res.request().frame() === page.mainFrame()) {
               const loadEventTimePromise = page.evaluate(() => window.performance.timing.loadEventEnd);
               const navigationStartTimePromise = page.evaluate(() => window.performance.timing.navigationStart);

               Promise.all([loadEventTimePromise, navigationStartTimePromise]).then(([loadEventTime, navigationStartTime]) => {
                   const pageLoadTime = loadEventTime - navigationStartTime;
                   console.log(`Page load time: ${pageLoadTime} ms`);
               }).catch(error => {
                   console.error('Error in Promise.all:', error);
               });
           }
       }).catch(error => {
           console.error('Error in route:', error);
       });
   });

   // Navigate to a webpage
   await page.goto('/');

   await browser.close();
})();