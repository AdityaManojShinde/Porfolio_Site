import profileData from "@/data/profile.json"

export default function WhatsAppButton() {
  if (!profileData.phone) return null

  // Remove any spaces or non-numeric characters for the link, but keep '+'
  const formattedPhone = profileData.phone.replace(/[^\d+]/g, "")
  const whatsappUrl = `https://wa.me/${formattedPhone.replace('+', '')}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full text-white shadow-xl transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-500/50"
    >
      <img src={`${import.meta.env.BASE_URL}icons/whatsapp.png`} alt="WhatsApp" className="h-full w-full object-cover rounded-full" />
    </a>
  )
}
