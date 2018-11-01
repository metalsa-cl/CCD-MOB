/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* 
 Sinaliza cartão de segurança
 */
function sinalCartao() {   
   var tipoCartao = document.getElementById('tipoCard').value;
   if (tipoCartao == "SEGURANÇA") {
    $("#tipoCard").css("background-color","red");
    $("#tipoCard").css("color","white");
}else { 
    $("#tipoCard").css("background-color","white");
    $("#tipoCard").css("color","black");
}
}


/* 
 Validação acesso tl
 */
function validaLoginTl() {   
   var emailTl = document.getElementById('emailTl').value;
    var senhaTl = document.getElementById('senhaTl').value;
   if (emailTl == "henrique.vieira@metalsa.com" && senhaTl == 123) {
    document.getElementById('bem-vindo').value = "BEM-VINDO HENRIQUE WESLEY VIEIRA LIMA";
    $("#bntLoginTl").css("visibility","visible");
}else { 
    document.getElementById('bem-vindo').value = "OPS... ALGO DEU ERRADO...";
}
}

/* 
 Atualiza tabela ENN1-L1 TL
 */
function atualizaTabelaENN1L1TL() {
    var iframe = document.getElementById('tabelaENN1L1TL');
    iframe.src = iframe.src;
   
}


/* 
 Validação acesso tl
 */
function validaLoginEQE() {   
   var emailEQE = document.getElementById('emailEQE').value;
    var senhaEQE = document.getElementById('senhaEQE').value;
   if (emailEQE == "henrique.vieira@metalsa.com" && senhaEQE == 123) {
    document.getElementById('bem-vindo').value = "BEM-VINDO HENRIQUE WESLEY VIEIRA LIMA";
    $("#bntLoginEQE").css("visibility","visible");
}else { 
    document.getElementById('bem-vindo').value = "OPS... ALGO DEU ERRADO...";
}
}


