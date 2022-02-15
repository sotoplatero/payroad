import crypto from 'crypto';

// 0653d04ddcafefec14c87452b49b7ff5
const key = process.env.ALFACOINS_KEY;
const pass = process.env.ALFACOINS_PASS;

export async function post({ request }) {

	const passMD5 = crypto.createHash('md5').update(pass).digest("hex").toUpperCase();
	const { price, email, title, currency } = await request.json()

	// const urlLimits = 'https://www.alfacoins.com/api/limits.json?base=USD'
	// const limits = await fetch(urlLimits).then(res=>res.json())
	// const types = Object.keys(limits)
	// 	.filter( currency => limits[currency].min_fiat_amount <= price && currency != 'litecointestnet')
	// 	.join()
	// console.log(types)

	const res = await fetch(`https://www.alfacoins.com/api/create.json`,{
		method: 'POST',
		headers: { 'Content-Type': 'application/json'},
		body:  JSON.stringify({ 
			 "name": "PAYROAD",
			 "secret_key": key,
			 "password": passMD5,
			 "type": currency,
			 "amount": price,
			 "order_id": "Order" + Date.now(),
			 "currency": "USD",
			 "description": title,
			 "options": {
				 "notificationURL": "https://payroad.click/order/notification",
				 "redirectURL": "https://payroad.click/order/success",
				 "payerName": "Victor",
				 "payerEmail": email,
				 // "test": 1,
				 "status": "completed"
			 }
		 })
	})

	if (!res.ok) return {
		status: 500,
	}

	const order = await res.json();

	return {
		body: order
	};
}