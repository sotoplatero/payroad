import crypto from 'crypto';
const password = process.env.ALFACOINS_PASSWORD;
const passMd5 = crypto.createHash('md5').update(password).toUpperCase();
