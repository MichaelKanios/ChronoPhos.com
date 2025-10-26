import { useEffect, useState } from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { Link } from "react-router-dom";

export default function CookieBanner() {
  const [isClient, setIsClient] = useState(false);
  const GA_ID = "G-F6BW9RQR6M"; // βάλε το δικό σου

  useEffect(() => {
    // Βεβαιώσου ότι τρέχει μόνο στον browser
    setIsClient(true);

    const consent = Cookies.get("CookieConsent");
    if (consent === "true") {
      loadGoogleAnalytics();
    }
  }, []);

  function loadGoogleAnalytics() {
    if (document.querySelector(`script[src*="${GA_ID}"]`)) return;

    const gaScript = document.createElement("script");
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    gaScript.async = true;
    document.head.appendChild(gaScript);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", GA_ID);
  }

  if (!isClient) return null; // για SSR συμβατότητα

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Reject"
      cookieName="CookieConsent"
      enableDeclineButton
      onAccept={loadGoogleAnalytics}
      style={{
        background: "#111",
        color: "#fff",
        fontSize: "14px",
        padding: "1rem",
      }}
      buttonStyle={{
        background: "#16a34a",
        color: "white",
        fontSize: "13px",
        borderRadius: "6px",
      }}
      declineButtonStyle={{
        background: "#555",
        color: "white",
        fontSize: "13px",
        borderRadius: "6px",
      }}
      expires={365}
    >
      <span className="text-sm">
        We use cookies to analyze website traffic and improve your experience.{" "}
        <Link to="./terms" className="underline hover:text-gray-300">
          Terms and Conditions
        </Link>
      </span>
    </CookieConsent>
  );
}
