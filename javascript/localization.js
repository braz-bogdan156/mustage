document.getElementById('language-switcher').addEventListener('click', () => {
    const currentLanguage = document.documentElement.lang;
    const newLang = currentLanguage === 'uk' ? 'ru' : 'uk';
    document.documentElement.lang = newLang;

    fetch(`jsons/${newLang}.json`)
      .then(response => response.json())
      .then(translations => {
        document.querySelectorAll('[data-translate]').forEach(element => {
          const key = element.getAttribute('data-translate');
          element.textContent = translations[key];
        });
      });

})