function oblicz() {
    for (let i = 1; i <= 20; i++) {
        let matematyka = document.getElementById("uczen" + [i])
            .getElementsByClassName("matematyka")[0];
        let polski = document.getElementById("uczen" + [i])
            .getElementsByClassName("polski")[0];
        let biologia = document.getElementById("uczen" + [i])
            .getElementsByClassName("biologia")[0];
        let geografia = document.getElementById("uczen" + [i])
            .getElementsByClassName("geografia")[0];
        let fizyka = document.getElementById("uczen" + [i])
            .getElementsByClassName("fizyka")[0];
        let chemia = document.getElementById("uczen" + [i])
            .getElementsByClassName("chemia")[0];
        let informatyka = document.getElementById("uczen" + [i])
            .getElementsByClassName("informatyka")[0];
        let dodatkowe = document.getElementById("uczen" + [i])
            .getElementsByClassName("zajecia-dodatkowe")[0];

        if (matematyka.value == 1 ||
            polski.value == 1 ||
            biologia.value == 1 ||
            geografia.value == 1 ||
            fizyka.value == 1 ||
            chemia.value == 1 ||
            informatyka.value == 1
        ) {
            document.getElementById("uczen" + [i])
                .getElementsByClassName("uczen")[0].style.backgroundColor = "red";
        }
        if (!dodatkowe.value == "") {
            if (dodatkowe.value.includes("matematyka")) {
                if (matematyka.value < 6) {
                    let x = parseFloat(matematyka.value) + parseFloat(0.5);
                    matematyka.value = x;
                }
            }
            if (dodatkowe.value.includes("polski")) {
                if (polski.value < 6) {
                    let x = parseFloat(polski.value) + parseFloat(0.5);
                    polski.value = x;
                }
            }
            if (dodatkowe.value.includes("biologia")) {
                if (biologia.value < 6) {
                    let x = parseFloat(biologia.value) + parseFloat(0.5);
                    biologia.value = x;
                }
            }
            if (dodatkowe.value.includes("geografia")) {
                if (geografia.value < 6) {
                    let x = parseFloat(geografia.value) + parseFloat(0.5);
                    geografia.value = x;
                }
            }
            if (dodatkowe.value.includes("fizyka")) {
                if (fizyka.value < 6) {
                    let x = parseFloat(fizyka.value) + parseFloat(0.5);
                    fizyka.value = x;
                }
            }
            if (dodatkowe.value.includes("chemia")) {
                if (chemia.value < 6) {
                    let x = parseFloat(chemia.value) + parseFloat(0.5);
                    chemia.value = x;
                }
            }
            if (dodatkowe.value.includes("informatyka")) {
                if (informatyka.value < 6) {
                    let x = parseFloat(informatyka.value) + parseFloat(0.5);
                    informatyka.value = x;
                }
            }
        }
        let sum = eval((
            parseFloat(matematyka.value) +
            parseFloat(polski.value) + parseFloat(biologia.value) +
            parseFloat(geografia.value) + parseFloat(fizyka.value) +
            parseFloat(chemia.value) + parseFloat(informatyka.value)) / 7
        );
        let sum_r = Math.round(sum * 100) / 100;
        document.getElementById("uczen" + [i])
            .getElementsByClassName("srednia")[0].innerHTML = sum_r;
        if (sum_r >= 4.75) {
            document.getElementById("uczen" + [i])
                .getElementsByClassName("uczen")[0].style.backgroundColor = "green";
        }
    }
}
let form = document.getElementById('oblicz');
form.addEventListener('click', oblicz);