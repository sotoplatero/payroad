import crypto from 'crypto';

const key = process.env.ALFACOINS_KEY;
const pass = process.env.ALFACOINS_PASS;

export async function post({ request }) {

	const passMD5 = crypto.createHash('md5').update(pass).digest("hex").toUpperCase();
	const { price, email, title } = await request.json()

	const res = await fetch(`https://www.alfacoins.com/api/create.json`,{
		method: 'POST',
		headers: { 'Content-Type': 'application/json'},
		body:  JSON.stringify({ 
			 "name": "PAYROAD",
			 "secret_key": key,
			 "password": passMD5,
			 "type": 'bitcoin',
			 "amount": price,
			 "order_id": "Order" + Date.now(),
			 "currency": "USD",
			 "description": title,
			 "options": {
				 "notificationURL": "https://payroad.click/order/notification",
				 "redirectURL": "https://payroad.click/order/success",
				 "payerName": "Victor",
				 "payerEmail": email,
				 "test": 1,
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