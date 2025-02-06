document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript çalışıyor...");
    console.log("nav-home öğesi:", document.getElementById("nav-home")); // Konsolda ID’yi test et

    const languageItems = document.querySelectorAll(".dropdown-menu a");
    let currentLang = localStorage.getItem("selectedLanguage") || "tr"; 

    function loadLanguage(lang) {
        console.log(`Dil yükleniyor: ${lang}`); // Konsolda hangi dil yüklendiğini kontrol et

        const pathPrefix = window.location.pathname.includes('index.html') || window.location.pathname === '/' ? '' : '../';

        fetch(`${pathPrefix}assets/lang/${lang}.json`)
            .then(response => response.json())
            .then(data => {
                if (!data) return;

                console.log("JSON başarıyla yüklendi:", data); // JSON’un yüklenip yüklenmediğini kontrol et

                // Navbar (ID'ler varsa değiştir, yoksa hata alma)
                if (document.getElementById("nav-home")) {
                    document.getElementById("nav-home").textContent = data.navbar.home;
                }
                if (document.getElementById("nav-about")) {
                    document.getElementById("nav-about").textContent = data.navbar.about;
                }
                if (document.getElementById("nav-events")) {
                    document.getElementById("nav-events").textContent = data.navbar.events;
                }
                if (document.getElementById("nav-contact")) {
                    document.getElementById("nav-contact").textContent = data.navbar.contact;
                }
                if (document.getElementById("nav-sdg")) {
                    document.getElementById("nav-sdg").textContent = data.navbar.sdg;
                }

                // Hero Bölümü
                if (document.getElementById("hero-title")) {
                    document.getElementById("hero-title").textContent = data.hero.title;
                }
                if (document.getElementById("hero-subtitle")) {
                    document.getElementById("hero-subtitle").textContent = data.hero.subtitle;
                }
                if (document.getElementById("hero-button")) {
                    document.getElementById("hero-button").textContent = data.hero.button;
                }

                // Footer
                if (document.getElementById("footer-rights")) {
                    document.getElementById("footer-rights").textContent = data.footer.rights;
                }

                // About Page
                if (document.getElementById("about-title")) {
                    document.getElementById("about-title").textContent = data.about.title;
}

            })
            .catch(error => console.error("Dil dosyası yüklenemedi:", error));

        localStorage.setItem("selectedLanguage", lang);
    }

    // Dil seçimi yapıldığında
    languageItems.forEach(item => {
        item.addEventListener("click", function (event) {
            event.preventDefault();
            let selectedLang = this.getAttribute("data-lang");
            loadLanguage(selectedLang);
        });
    });

    // Sayfa açıldığında dili yükle
    setTimeout(() => {
        loadLanguage(currentLang);
    }, 100); 
});
