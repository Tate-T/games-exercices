document.addEventListener("DOMContentLoaded", function () {
    const fortunes = [
        "Сьогодні твій день!",
        "Звісно день може бути поганим! Але точно завтра пощастить",
        "Готуйсь до змін!",
        "Треба зусилля для успіху!",
        "Сьогодні Біблія, завтра Кобзар!",
        "Йди вперед, але періодично зупиняйся!",
        "Час виконати неможливу мрію!",
        "Не гріши! Не сміти! Не заздри!",
        "Нічого гарного, нічого поганого не буде без ризику",
        "У чомусь потужному є Ахіллесова п’ята.",
        "-.. / .-.- / -.- / ..-- / --.. / .- / --. / .-. / ..- / -.-.--",
        "Сердечко + Україна + Стрілка + Сонце + Стрілка + Вітер + Трава + Вода"
    ];

    document.getElementById("cookieBtn").addEventListener("click", function () {
        let selectedFortunes = [];
        let usedIndexes = new Set();

        while (selectedFortunes.length < 3) {
            let randomIndex = Math.floor(Math.random() * fortunes.length);
            if (!usedIndexes.has(randomIndex)) {
                usedIndexes.add(randomIndex);
                selectedFortunes.push(fortunes[randomIndex]);
            }
        }

        let fortunesDiv = document.getElementById("fortunes");
        fortunesDiv.innerHTML = ""; 

        selectedFortunes.forEach((fortune) => {
            let div = document.createElement("div");
            div.textContent = fortune;
            div.style.padding = "8px";
            div.style.margin = "10px 0"; 
            div.style.border = "1px solid #d4b600";
            div.style.borderRadius = "5px";
            div.style.textAlign = "center";
            div.style.fontSize = "14px"; 
            div.style.fontWeight = "bold";

            fortunesDiv.appendChild(div);
        });
    });
});
