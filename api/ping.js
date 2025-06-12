const urls = [
  'https://telegram-chatbot-bbe6.onrender.com',
  'https://vidu-srp6.onrender.com'
];

export default async function handler(req, res) {
  const results = [];

  for (const url of urls) {
    try {
      const response = await fetch(url);
      const text = await response.text();
      results.push({ url, status: '✅ Success', response: text });
    } catch (error) {
      results.push({ url, status: '❌ Failed', error: error.message });
    }
  }

  return res.status(200).json({
    time: new Date().toISOString(),
    results
  });
}
