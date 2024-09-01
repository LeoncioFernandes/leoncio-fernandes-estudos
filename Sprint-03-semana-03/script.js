
let lugaresVisistados = [];


function inciarPagina(){
    let nomeUsuario;
    let sairPrograma = false;

    while(true){
        nomeUsuario = prompt("Seja bem-vindo (a), qual é o seu nome?", "");
        if(nomeUsuario === ""){
            alert("É necessário um nome válido.");
        }else if(nomeUsuario === null){
            sairPrograma = true;
            break;
        }
        else break;
    }
    
    while(true){
        if(sairPrograma) break;
        let selecao = 0;
        selecao = Number(prompt(
            nomeUsuario + ", selecione uma opção no menu abaixo.\n\n" +
            "1 - Adicionar um lugar na lista de lugares já visitados.\n" +
            "2 - Remover um lugar da lista de lugares já visitados.\n" +
            "3 - Listar todos os lugares.\n" +
            "4 - Mostrar todos os lugares no documento HTML.\n" + 
            "5 - Sair"
        ));
    
        switch (selecao){
            case 0:
                sairPrograma = sairDoPrograma();
                break;
            case 1:
                adicionarLugar();
                break;
            case 2:
                removerLugar();
                break;
            case 3:
                listarLugares();
                break;
            case 4:
                sairPrograma = mostraLugares();
                break;
            case 5:
                sairPrograma = sairDoPrograma();
                break;
            default:
                alert("Selecione uma opção válida.")
        }
    }
}

function adicionarLugar(){
    while(true){
        let lugar = prompt("Qual é o nome do lugar que você gostaria de adicionar na lista de lugares já visitados?");
        if(lugar === ""){
            alert("Digite um lugar válido.")
        }else if(lugar === null){
            break;
        }
        else{
            if(confirm("Deseja salvar esse lugar?")){
                lugaresVisistados.push(lugar);
            }else{
                alert("Voltando ao menu...")
            }
            break;
        }
    }
}

function removerLugar(){
    if(lugaresVisistados.length == 0){
        alert("Você ainda não adicionou nenhum lugar na sua lista.")
    }
    else{
        let lugares = getLugaresVisitados()
        while(true){
            let index = Number(prompt("Qual o lugar que você gostaria de remover da lista da lugares que já visitou?\n" + lugares))
            if(index < 0 || index > lugaresVisistados.length){
                alert("Selecione um lugar válido.")
            }else if(index === 0){
                break;
            }else{
                if(confirm("Deseja realmente remover este lugar?")){
                    lugaresVisistados.splice((index - 1), 1);
                    alert("Lugar removido com sucesso!")
                }else{
                    alert("Voltando ao menu...")
                }
                break;
            }
        }
    }
}

function listarLugares(){
    let msgLugares = "";
    if(lugaresVisistados.length == 0){
        msgLugares = "0 lugares adicionados";
    }else{
        msgLugares = getLugaresVisitados();
    }
    alert("\nLugares já visitados:\n" + msgLugares);
}

function mostraLugares(){
    if(lugaresVisistados.length == 0){
        alert("Você ainda não adicionou nenhum lugar na sua lista.")
        return false;
    }
    else{
        const ol = document.getElementById("list");
        lugaresVisistados.forEach(lugar => {
            let li = document.createElement("li");
            li.textContent = lugar;
            ol.appendChild(li);
        })
        return true;
    }
}

function sairDoPrograma(){
    if(confirm("Deseja realmente sair do programa?")){
        alert("Saindo do programa...");
        return true;
    }else{
        return false;
    }

}

function getLugaresVisitados(){
    let lugares = "\n";
    lugaresVisistados.forEach((lugar, index) => lugares += (index + 1) + " - " + lugar + "\n");
    return lugares;
}
