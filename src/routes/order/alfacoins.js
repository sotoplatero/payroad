import crypto from 'crypto';

const key = process.env.ALFACOINS_KEY;
const pass = process.env.ALFACOINS_PASS;
const passMD5 = crypto.createHash('md5').update(pass).digest("hex").toUpperCase();

export async function get({ params }) {
	// the `slug` parameter is available because this file
	// is called [slug].json.js
	console.log(key)
	const res = await fetch(`https://www.alfacoins.com/api/create.json`,{
		method: 'POST',
		headers: { 'Content-Type': 'application/json'},
		body:  JSON.stringify({ 
			 "name": "Bitcoin shop",
			 "secret_key": key,
			 "password": passMD5,
			 "type": "bitcoin",
			 "amount": 0.0003456,
			 "order_id": "Order10001",
			 "currency": "USD",
			 "description": "Payment for t-shirt ALFAcoins size XXL",
			 "options": {
				 "notificationURL": "https://www.alfacoinshop.com/notification.php",
				 "redirectURL": "https://www.alfacoinshop.com/my/orders/success",
				 "payerName": "Victor",
				 "payerEmail": "no_reply@alfacoins.com",
				 "test": 1,
				 "status": "completed"
			 }
		 })
	})

	const order = await res.json();

	return {
		body: {
			order
		}
	};
}