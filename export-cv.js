import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const viteUrl = "http://localhost:5173";

  console.log(`Accès à ${viteUrl}...`);
  await page.goto(viteUrl, { waitUntil: "networkidle0" });

  const pdfPath = "cv.pdf";
  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    margin: {
      top: "0mm",
      bottom: "0mm",
    },
  });

  console.log(`CV exporté avec succès dans ${pdfPath}`);
  await browser.close();
})();
