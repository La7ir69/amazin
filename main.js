function sendToTelegram(message) {
  const token = '7989289138:AAEeHZVWnWl6zVx3e08KEfdrJGCcAy7MFlY';
  const chat_id = '-1002429976015';
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      chat_id: chat_id,
      text: message,
      parse_mode: 'HTML'
    })
  }).catch(err => console.error("Telegram error:", err));
}