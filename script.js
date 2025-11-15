const translations = {
  en: {
    navHome: "Home",
    navPlay: "Play",
    navBand: "Teddy Band",
    navAbout: "About",
    navMerchandise: "Merchandise",
    navParents: "Parental Zone",
    footer: "Made with ❤️ for kids in Kolkata, India"
  },
  bn: {
    navHome: "ঘর",
    navPlay: "খেলা",
    navBand: "টেডি'র-বাদ্য",
    navAbout: "আমাদের-সম্পর্কে",
    navMerchandise:"কেনাকাটা",
    navParents: "অভিভাবকদের-জন্য",
    footer: "ভালোবাসা দিয়ে তৈরি কলকাতার বাচ্চাদের জন্য ❤️"
  }
};

let currentLang = localStorage.getItem("lang") || "en";

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);

  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  const langBtn = document.getElementById("langBtn");
  if (langBtn) langBtn.innerText = lang === "en" ? "বাংলা" : "English";
}

function toggleLanguage() {
  const newLang = currentLang === "en" ? "bn" : "en";
  setLanguage(newLang);
}

document.addEventListener("DOMContentLoaded", () => setLanguage(currentLang));
