function simularCompra() {

    // Preços dos produtos
    const precoArroz = 25;
    const precoLeite = 6;
    const precoCafe = 16;
    const precoMacarrao = 5;

    // Função para perguntar a quantidade
    function perguntarQuantidade(produto) {

        let quantidade;
        let resposta;

        do {
            resposta = prompt(
                `Quantas unidades de ${produto} você deseja comprar?\n` +
                "Digite 0 se não quiser comprar."
            );

            // Verificar se o usuário cancelou
            if (resposta === null) {
                return null;
            }

            quantidade = Number(resposta);

            // Validar os dados informados
            if (
                resposta.trim() === "" ||
                !Number.isInteger(quantidade) ||
                quantidade < 0
            ) {
                alert(
                    "Digite uma quantidade inteira igual ou maior que zero."
                );
            }

        } while (
            resposta.trim() === "" ||
            !Number.isInteger(quantidade) ||
            quantidade < 0
        );

        return quantidade;
    }

    // Perguntar as quantidades dos produtos
    const arroz = perguntarQuantidade("Arroz");

    if (arroz === null) {
        alert("Compra cancelada.");
        return;
    }

    const leite = perguntarQuantidade("Leite");

    if (leite === null) {
        alert("Compra cancelada.");
        return;
    }

    const cafe = perguntarQuantidade("Café");

    if (cafe === null) {
        alert("Compra cancelada.");
        return;
    }

    const macarrao = perguntarQuantidade("Macarrão");

    if (macarrao === null) {
        alert("Compra cancelada.");
        return;
    }

    // Calcular os valores de cada produto
    const valorArroz = arroz * precoArroz;
    const valorLeite = leite * precoLeite;
    const valorCafe = cafe * precoCafe;
    const valorMacarrao = macarrao * precoMacarrao;

    // Calcular o subtotal
    const subtotal =
        valorArroz +
        valorLeite +
        valorCafe +
        valorMacarrao;

    // Verificar se algum produto foi selecionado
    if (
        arroz === 0 &&
        leite === 0 &&
        cafe === 0 &&
        macarrao === 0
    ) {
        alert("Nenhum produto foi selecionado.");
        return;
    }

    // Calcular o total da compra
    const totalFinal = subtotal;

    // Montar o resumo da compra
    let resultado = "===== SUPERMERCADO ECONOMIA =====\n\n";

    resultado += "ARROZ\n";
    resultado += "Quantidade: " + arroz + "\n";
    resultado += "Valor: " + formatarMoeda(valorArroz) + "\n\n";

    resultado += "LEITE\n";
    resultado += "Quantidade: " + leite + "\n";
    resultado += "Valor: " + formatarMoeda(valorLeite) + "\n\n";

    resultado += "CAFÉ\n";
    resultado += "Quantidade: " + cafe + "\n";
    resultado += "Valor: " + formatarMoeda(valorCafe) + "\n\n";

    resultado += "MACARRÃO\n";
    resultado += "Quantidade: " + macarrao + "\n";
    resultado += "Valor: " + formatarMoeda(valorMacarrao) + "\n\n";

    resultado += "----------------------------------\n";
    resultado += "TOTAL DA COMPRA: " + formatarMoeda(totalFinal) + "\n";
    resultado += "-----------------------------------\n";

    // Exibir o resultado da compra
    alert(resultado);
}

// Função para formatar o valor em reais
function formatarMoeda(valor) {

    return valor.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

}