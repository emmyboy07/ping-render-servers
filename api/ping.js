export default async function handler(req, res) {
  const url = 'https://telegram-chatbot-bbe6.onrender.com';
  
  try {
    const response = await fetch(url);
    const text = await response.text();
    return res.status(200).json({
      status: 'Pinged successfully',
      response: text
    });
  } catch (error) {
    return res.status(500).json({
      status: 'Failed to ping',
      error: error.message
    });
  }
}
