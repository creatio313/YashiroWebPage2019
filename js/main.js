mdc.ripple.MDCRipple.attachTo(document.querySelector('.lng-button'));
mdc.ripple.MDCRipple.attachTo(document.querySelector('.mdc-fab'));

(function () {
    $(function () {
        setLang("ja");
        $('#ja_button').click(function(){
          setLang("ja")
        });
        $('#en_button').click(function(){
          setLang("en")
        });
    });

    function setLang(lang) {
        console.log('lang=' + lang);

        i18next.use(i18nextXHRBackend).init({
            backend: {
                loadPath: 'locales/{{lng}}/string.json'
            },
            debug: false,
            defaultLng: 'ja',
            fallbackLng: false,
            lng: lang,
        }, function (err, t) {
            jqueryI18next.init(i18next, $);
            $('[data-i18n]').localize();
        });
    }

})();
