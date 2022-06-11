
function addfunc(){
    const addinput1 = document.querySelector("#add-input-1");
    const addinput2 = document.querySelector("#add-input-2");
    const addresult = parseInt(addinput1.value) + parseInt(addinput2.value);

    document.getElementById("add-result").value = addresult;
}

function subfunc(){
    const subinput1 = document.querySelector("#sub-input-1");
    const subinput2 = document.querySelector("#sub-input-2");
    const subresult = parseInt(subinput1.value) - parseInt(subinput2.value);

    document.getElementById("sub-result").value = subresult;
}

function multfunc(){
    const multinput1 = document.querySelector("#mult-input-1");
    const multinput2 = document.querySelector("#mult-input-2");
    const multresult = parseInt(multinput1.value) * parseInt(multinput2.value);

    document.getElementById("mult-result").value = multresult;
}

function divfunc(){
    const divinput1 = document.querySelector("#div-input-1");
    const divinput2 = document.querySelector("#div-input-2");
    const divresult = parseInt(divinput1.value) / parseInt(divinput2.value);

    document.getElementById("div-result").value = divresult;
}

