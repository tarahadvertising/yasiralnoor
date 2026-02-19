import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+971582365647";
  const message =
    "Hello! I would like to inquire about your construction services.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </button>
  );
};

export default WhatsAppButton;
