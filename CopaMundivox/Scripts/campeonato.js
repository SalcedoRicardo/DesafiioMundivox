$("#btnAtualizar").on('click', function () {
    var timesev1 = [];
    var resultadoJogosFase1 = [];

    // Evento 1
    for (var d = 0; d < $(".ev1").length; d++) {
        resultadoJogosFase1.push({
            Nome: $(".ev1")[d].innerHTML,
            Pontos: $(".txt-ev1").eq(d).val(),
            Torneio: parseInt(0) + 1
        })
    }

    if (parseInt(resultadoJogosFase1[0]["Pontos"]) > parseInt(resultadoJogosFase1[1]["Pontos"])) {
        $("#vencedor1-t1").text(resultadoJogosFase1[0]["Nome"]);
    } else if (parseInt(resultadoJogosFase1[0]["Pontos"]) < parseInt(resultadoJogosFase1[1]["Pontos"])) {
        $("#vencedor1-t1").text(resultadoJogosFase1[1]["Nome"]);
    }


    // Evento 2
    resultadoJogosFase1 = [];
    for (var d = 0; d < $(".ev2").length; d++) {
        resultadoJogosFase1.push({
            Nome: $(".ev2")[d].innerHTML,
            Pontos: $(".txt-ev2").eq(d).val(),
            Torneio: parseInt(0) + 1
        })
    }

    if (parseInt(resultadoJogosFase1[0]["Pontos"]) > parseInt(resultadoJogosFase1[1]["Pontos"])) {
        $("#vencedor2-t2").text(resultadoJogosFase1[0]["Nome"]);
    } else if (parseInt(resultadoJogosFase1[0]["Pontos"]) < parseInt(resultadoJogosFase1[1]["Pontos"])) {
        $("#vencedor2-t2").text(resultadoJogosFase1[1]["Nome"]);
    }

    // Evento 3
    resultadoJogosFase1 = [];
    for (var d = 0; d < $(".ev3").length; d++) {
        resultadoJogosFase1.push({
            Nome: $(".ev3")[d].innerHTML,
            Pontos: $(".txt-ev3").eq(d).val(),
            Torneio: parseInt(0) + 1
        })
    }

    if (parseInt(resultadoJogosFase1[0]["Pontos"]) > parseInt(resultadoJogosFase1[1]["Pontos"])) {
        $("#vencedor3-t3").text(resultadoJogosFase1[0]["Nome"]);
    } else if (parseInt(resultadoJogosFase1[0]["Pontos"]) < parseInt(resultadoJogosFase1[1]["Pontos"])) {
        $("#vencedor3-t3").text(resultadoJogosFase1[1]["Nome"]);
    }

    // Evento 4
    resultadoJogosFase1 = [];
    for (var d = 0; d < $(".ev4").length; d++) {
        resultadoJogosFase1.push({
            Nome: $(".ev4")[d].innerHTML,
            Pontos: $(".txt-ev4").eq(d).val(),
            Torneio: parseInt(0) + 1
        })
    }

    if (parseInt(resultadoJogosFase1[0]["Pontos"]) > parseInt(resultadoJogosFase1[1]["Pontos"])) {
        $("#vencedor4-t4").text(resultadoJogosFase1[0]["Nome"]);
    } else if (parseInt(resultadoJogosFase1[0]["Pontos"]) < parseInt(resultadoJogosFase1[1]["Pontos"])) {
        $("#vencedor4-t4").text(resultadoJogosFase1[1]["Nome"]);
    }

    // Evento 5
    resultadoJogosFase1 = [];
    for (var d = 0; d < $(".ev4").length; d++) {
        resultadoJogosFase1.push({
            Nome: $(".ev4")[d].innerHTML,
            Pontos: $(".txt-ev4").eq(d).val(),
            Torneio: parseInt(0) + 1
        })
    }

    if (parseInt(resultadoJogosFase1[0]["Pontos"]) > parseInt(resultadoJogosFase1[1]["Pontos"])) {
        $("#vencedor4-t4").text(resultadoJogosFase1[0]["Nome"]);
    } else if (parseInt(resultadoJogosFase1[0]["Pontos"]) < parseInt(resultadoJogosFase1[1]["Pontos"])) {
        $("#vencedor4-t4").text(resultadoJogosFase1[1]["Nome"]);
    }

    // Evento 6
    resultadoJogosFase1 = [];
    for (var d = 0; d < $(".ev6").length; d++) {
        resultadoJogosFase1.push({
            Nome: $(".ev6")[d].innerHTML,
            Pontos: $(".txt-ev6").eq(d).val(),
            Torneio: parseInt(0) + 1
        })
    }

    if (parseInt(resultadoJogosFase1[0]["Pontos"]) > parseInt(resultadoJogosFase1[1]["Pontos"])) {
        $("#vencedor6-t6").text(resultadoJogosFase1[0]["Nome"]);
    } else if (parseInt(resultadoJogosFase1[0]["Pontos"]) < parseInt(resultadoJogosFase1[1]["Pontos"])) {
        $("#vencedor6-t6").text(resultadoJogosFase1[1]["Nome"]);
    }



    // Evento 7
    resultadoJogosFase1 = [];
    for (var d = 0; d < $(".ev7").length; d++) {
        resultadoJogosFase1.push({
            Nome: $(".ev7")[d].innerHTML,
            Pontos: $(".txt-ev7").eq(d).val(),
            Torneio: parseInt(0) + 1
        })
    }

    if (parseInt(resultadoJogosFase1[0]["Pontos"]) > parseInt(resultadoJogosFase1[1]["Pontos"])) {
        $("#vencedor7-t7").text(resultadoJogosFase1[0]["Nome"]);
    } else if (parseInt(resultadoJogosFase1[0]["Pontos"]) < parseInt(resultadoJogosFase1[1]["Pontos"])) {
        $("#vencedor7-t7").text(resultadoJogosFase1[1]["Nome"]);
    }


    //var finalista1 = parseInt($("#vencedor6-t6").val());

    var finalista1 = {
        Nome: $("#vencedor6-t6").text(),
        Pontos: $("#txtfin1").val()
    }

    var finalista2 = {
        Nome: $("#vencedor7-t7").text(),
        Pontos: $("#txtfin2").val() 
    }

    if (parseInt(finalista1["Pontos"]) > parseInt(finalista2["Pontos"])) {
        swal("Temos um vencedor...", "O vencedor é " + finalista1["Nome"], "success");
    } else if (parseInt(finalista1["Pontos"]) < parseInt(finalista2["Pontos"])) {
        swal("Temos um vencedor...", "O vencedor é " + finalista2["Nome"], "success");
    }

    console.log(resultadoJogosFase1);
})

