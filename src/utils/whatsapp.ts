const phoneNumber: string = "+8801843566251"; // Replace with your desired phone number
const message: string = "Hello,WelCome to WeeroDigital.  let's chat!";

export const generateWhatsAppLink = (): string => {
  const url: string = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;
  return url;
};
