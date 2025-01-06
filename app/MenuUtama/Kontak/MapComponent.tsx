"use client";

const MapComponent: React.FC = () => {
  return (
    <iframe
      suppressHydrationWarning
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15932.569011315843!2d100.5998263!3d-0.220869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2fd54b9db660e727%3A0x859ac06513a12bca!2sCV.MULTIREJEKI%20SELARAS!5e0!3m2!1sen!2sid!4v1697123456789!5m2!1sen!2sid"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen={true}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

export default MapComponent;
