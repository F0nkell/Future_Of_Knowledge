export const sendBookingNotification = async (data: {
  name: string;
  contact: string;
  topic: string;
  time: string;
}) => {
  // In a real app, this would call a backend endpoint which uses the Telegram Bot API
  // const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  // const CHAT_ID = process.env.ADMIN_CHAT_ID;
  
  console.log("Sending to Telegram...", data);
  
  // Simulating network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: "Заявка отправлена F0nkell!" });
    }, 1500);
  });
};