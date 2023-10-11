let pessoas = new Array(
    {
        itsMe: false,
        admin: true,
        nome: "Talisson"
    },
    {
        itsMe: false,
        admin: false,
        nome: "Hazy"
    },
    {
        itsMe: false,
        admin: false,
        nome: "Lyan"
    },
    {
        itsMe: true,
        admin: false,
        nome: "Michel"
    }
);

function faxina() {

    let eu = new Array();
    let adm = new Array();
    let usuarios = new Array();


    for (i = 0; i < pessoas.length; i++) {

        if (pessoas[i].itsMe == true) {
            eu.push(pessoas[i].nome);
        } else if (pessoas[i].admin == true) {
            adm.push(pessoas[i].nome);
        } else {
            usuarios.push(pessoas[i].nome);
        }
    }

    console.log("Eu: " + eu + " Nome: " + adm + " Usuarios: " + usuarios)


    console.log(eu)
    console.log(adm)
    console.log(usuarios)

}

faxina();


//[array (guarda o obejto)]
//{obejto (guarda as informacoes)}

/*
    let eu = new Array();
    let adm = new Array();
    let usuarios = new Array();


    for (i = 0; i < pessoas.length; i++) {

        if (pessoas[i].itsMe == true) {
            eu.push(pessoas[i].nome)
        } else if (pessoas[i].admin == true) {
            adm.push(pessoas[i].nome)
        } else {
            usuarios.push(pessoas[i].nome)
        }
    }

    console.log("Eu: " + eu + " Nome: " + adm + " Usuarios: " + usuarios)


    console.log(eu)
    console.log(adm)
    console.log(usuarios)

*/

