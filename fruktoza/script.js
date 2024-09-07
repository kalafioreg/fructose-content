const fructoseContent = {
    "awokado": 0.2,
    "cytryna": 0.6, "limonka": 0.6,
    "rabarbar": 0.5, "kokos": 0.5, "acerola": 1.2, 
    "truskawka": 2, "pigwa": 2,"grejpfrut": 2, "zielony banan": 2, "kaktus": 2, "żurawina": 2, "agrest": 2,
    "rokitnik": 2.2,"malina": 2.4, "jeżyna": 2.3,
    "poziomka": 2.5, "mandarynka": 2.5, "pomelo": 2.5,
    "borówka": 3, "jagoda": 3, "kiwi": 3, "nektarynka": 3, "kiwano": 3,"czarna porzeczka": 3, "porzeczka": 3, "morela": 3, "miechunka": 3, "pitaja": 3, "smoczy owoc": 3,
    "arbuz": 4, "papaja": 4, "liczi": 3.4, "śliwka": 4, "ananas": 4, "brzoskwinia": 4, "morwa": 4, "pomarańcza": 4,
    "banan": 5, "dojrzały banan": 5, "figa": 5, "mirabelka": 5,
    "mango": 5.4,
    "wiśnia": 6,
    "jabłko": 6, "gruszka": 7,
    "czereśnia": 8, "winogrono": 8,
    "rodzynki": 30, "daktyle": 32
};
function checkFructose() {
    const fruit = document.getElementById("fruitInput").value.toLowerCase();
    const resultElement = document.getElementById("result");
    const fructose = fructoseContent[fruit];

    if (fructose === undefined) {
        resultElement.textContent = "brak info lub to nie owoc";
        resultElement.style.color = "black";
    } else {
        const type = fructose <= 3 ? "mało" : "dużo";
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
