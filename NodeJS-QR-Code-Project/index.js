import { input } from '@inquirer/prompts';
import { writeFile } from 'fs';
import { createWriteStream } from 'fs';
import qr from 'qr-image';


const qrLink = await input({ message: 'Enter your URL' });
console.log(`Generating QR code for: ${qrLink}`);

const qr_png = qr.image(qrLink, { type: 'png' });
qr_png.pipe(createWriteStream("qr_img.png"));

writeFile('URL.txt', qrLink, (err) => {
    if (err) throw err;
    console.log('The URL has been saved to URL.txt!');
});
