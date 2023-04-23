


export default async function handler(req, res) {
  const { method, cookies } = req;

  



//   if (method === "GET") {
//     try {
//       const products = await Product.find();
//       res.status(200).json(products);
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   }

  if (method === "POST") {
 const url= "developers.flouci.com/api/generate_payment"
  const payload= {
    "app_token": "<APP_TOKEN>", 
    "app_secret": "<APP_SECRET>",
    "amount": "30500",
    "accept_card": "true",
    "session_timeout_secs": 1200,
    "success_link": "<https://example.website.com/success>",
    "fail_link": "<https://example.website.com/fail>",
    "developer_tracking_id": "<your_internal_tracking_id>"
  }
  res.send("ok")
  }
}