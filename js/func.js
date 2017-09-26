//botao.onclick = document.getElementById('form').innerHTML=evento;

function novoEvento(){
	var novoDiv = document.createElement("div");
	novoDiv.setAttribute("id", "evento"+numEventos);
	novoDiv.setAttribute("class", "row");
	
	var pai = document.getElementById("form");
	pai.appendChild(novoDiv);
	
	var novoAtributo = document.createElement("div");
	novoAtributo.setAttribute("id", "eventoDate"+numEventos);
	novoAtributo.setAttribute("class", "col-lg-3");
	
	pai = document.getElementById("evento"+numEventos);
	pai.appendChild(novoAtributo);
	
	novoAtributo = document.createElement("div");
	novoAtributo.setAttribute("id", "eventoText"+numEventos);
	novoAtributo.setAttribute("class", "col-lg-8");
	
	pai.appendChild(novoAtributo);
	
	novoAtributo = document.createElement("div");
	novoAtributo.setAttribute("id", "eventoCheckbox"+numEventos);
	novoAtributo.setAttribute("class", "col-lg-1");
	
	pai.appendChild(novoAtributo);
	
	var novoCampo = document.createElement("input");
	novoCampo.setAttribute("type", "date");
	
	pai = document.getElementById("eventoDate"+numEventos);
	pai.appendChild(novoCampo);
	
	novoCampo = document.createElement("input");
	novoCampo.setAttribute("type", "text");
	novoCampo.setAttribute("size", "63");
	novoCampo.setAttribute("placeholder", "Digite o evento.");
	
	pai = document.getElementById("eventoText"+numEventos);
	pai.appendChild(novoCampo);
	
	novoCampo = document.createElement("input");
	novoCampo.setAttribute("type", "checkbox");
	
	pai = document.getElementById("eventoCheckbox"+numEventos);
	pai.appendChild(novoCampo);
	
	numEventos++;
};

var botaoNovo = document.getElementById("botaoAdd");
var botaoConf = document.getElementById("botaoConf");
var numEventos = 0;
