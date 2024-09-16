const fructoseContent = {
    "awokado": 0.2, "avocado": 0.2,
    "cytryna": 0.6, "lemon": 0.6,
    "limonka": 0.6, "lime": 0.6,
    "rabarbar": 0.5, "rhubarb": 0.5,
    "kokos": 0.5, "coconut": 0.5,
    "acerola": 1.2,
    "truskawka": 2, "strawberry": 2,
    "pigwa": 2, "quince": 2,
    "grejpfrut": 2, "grapefruit": 2,
    "zielony banan": 2, "green banana": 2,
    "kaktus": 2, "cactus": 2,
    "żurawina": 2, "cranberry": 2,
    "agrest": 2, "gooseberry": 2,
    "rokitnik": 2.2, "sea buckthorn": 2.2,
    "malina": 2.4, "raspberry": 2.4,
    "jeżyna": 2.3, "blackberry": 2.3,
    "poziomka": 2.5, "wild strawberry": 2.5,
    "mandarynka": 2.5, "mandarin": 2.5,
    "pomelo": 2.5,
    "borówka": 3, "blueberry": 3,
    "jagoda": 3, "berry": 3,
    "kiwi": 3,
    "nektarynka": 3, "nectarine": 3,
    "czarna porzeczka": 3, "black currant": 3,
    "morela": 3, "apricot": 3,
    "arbuz": 4, "watermelon": 4,
    "papaja": 4, "papaya": 4,
    "śliwka": 4, "plum": 4,
    "ananas": 4, "pineapple": 4,
    "brzoskwinia": 4, "peach": 4,
    "pomarańcza": 4, "orange": 4,
    "banan": 5, "banana": 5,
    "figa": 5, "fig": 5,
    "wiśnia": 6, "cherry": 6,
    "jabłko": 6, "apple": 6,
    "gruszka": 7, "pear": 7,
    "czereśnia": 8, "sweet cherry": 8,
    "winogrono": 8, "grape": 8,
    "rodzynki": 30, "raisins": 30,
    "daktyle": 32, "dates": 32
};

//translation
const translations = {
    pl: {
        title: "zawartość fruktozy w owocach (w 100g)",
        hint: "ⓘ użyj liczby pojedynczej, np. zamiast \"gruszki\" ➔ \"gruszka\"",
        placeholder: "nazwa owocu",
        button: "sprawdź",
        noInfo: "brak info lub to nie owoc",
        low: "mało",
        high: "dużo",
        footer: "by kalafioreg"
    },
    en: {
        title: "fructose content in fruits (per 100g)",
        hint: "ⓘ use singular form, e.g. instead of \"pears\" ➔ \"pear\"",
        placeholder: "fruit name",
        button: "check",
        noInfo: "no info or not a fruit",
        low: "low",
        high: "high",
        footer: "by kalafioreg"
    }
};

//languages
function updateLanguage(language) {
    document.getElementById('mainTitle').textContent = translations[language].title;
    document.getElementById('subTitle').textContent = translations[language].hint;
    document.getElementById('fruitInput').placeholder = translations[language].placeholder;
    document.getElementById('checkButton').textContent = translations[language].button;

    document.getElementById('flagPl').classList.remove('selected-flag');
    document.getElementById('flagEn').classList.remove('selected-flag');

    if (language === 'pl') {
        document.getElementById('flagPl').classList.add('selected-flag');
    } else if (language === 'en') {
        document.getElementById('flagEn').classList.add('selected-flag');
    }
}

document.getElementById('flagPl').addEventListener('click', function() {
    updateLanguage('pl');
});

document.getElementById('flagEn').addEventListener('click', function() {
    updateLanguage('en');
});

//fructose
function checkFructose() {
    const fruit = document.getElementById("fruitInput").value.toLowerCase();
    const resultElement = document.getElementById("result");
    const fructose = fructoseContent[fruit];

    const currentLanguage = document.getElementById('checkButton').textContent === "sprawdź" ? 'pl' : 'en';

    if (fructose === undefined) {
        resultElement.textContent = translations[currentLanguage].noInfo;
        resultElement.style.color = "black";
    } else {
        const type = fructose <= 3 ? translations[currentLanguage].low : translations[currentLanguage].high;
        const color = fructose <= 3 ? "#78c93e" : "red";
        resultElement.textContent = `${type} (${fructose} g)`;
        resultElement.style.color = color;
    }
}

document.getElementById("fruitInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        checkFructose();
    }
});
