window.onload = function () {
    letöltés();
};

var viccek;

function letöltés(l) {
    fetch('/jokes.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(k))


    function letöltésBefejeződött(k) {
        console.log("Sikeres letöltés")
        console.log(k)
        viccek = k;

    }

};

//A letöltésBefejeződött(d) függvényben for ciklussal járd be a viccek tömböt, és hozz létre egy-egy DOM elemet minden vicchez!


