let url = "https://tt905-at8-jogadores-backend.herokuapp.com/jogadores/"

async function callFetchWithGet(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode: 'cors',
        headers: headers
    }
    const output = document.getElementById("json");
    const response = await fetch(url, options);

    if (response.status >= 200 && response.status <= 300){
        console.log("Funcionou");
        output.innerHTML = await response.text();
    } else {
        console.log("Deu errado");
    }
}

async function callFetchWithPost(jogadores,time,posição){
    const options = {
        method : 'POST',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body :JSON.stringify({
            'Jogador' : jogadores,
            'time' : time,
            'posição' : posição
        })
    }
    await fetch(url, options);
}


async function callFetchWithPut(id, jogadores,time,posição){
    const options = {
        method : 'PUT',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json'            
        }, 
        body :JSON.stringify({
            

            'Jogador' : jogadores,
            'time' : time,
            'posição' : posição
        })
    }
    await fetch(`${url}${id}`, options);
}

async function callFetchWithDelete(id){
    const options = {
        method : 'DELETE',
        mode: 'cors',
        headers: {
            'Accept' : 'application/json',
            'content-type' : 'application/json' 
        }
    }
    await fetch(`${url}${id}`, options);
}

function submitPost(){
    console.log("entrei na função");
    const form = document.forms['postForm'];    
    const jogadores = form["jogadores"].value;
    const time = form["time"].value;
    const posição = form["posição"].value;
   
    callFetchWithPost(jogadores,time,posição);
    return false; 
}

function submitPut(){
    const form = document.forms['putForm'];  
    const id = form["id"].value;  
    const jogadores = form["jogadores"].value;
    const time = form["time"].value;
    const posição = form["posição"].value;
    callFetchWithPut(id, jogadores,time,posição);
    return false; // Evitar o reload da tela.
}

function submitDelete(){
    const form = document.forms['deleteForm'];  
    const id = form["id"].value;  
    callFetchWithDelete(id);
    return false; // Evitar o reload da tela.
}