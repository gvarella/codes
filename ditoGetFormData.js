// JavaScript Document

// Inserir no Header da página do form: <script src="ditoSendFormData.js" type="text/javascript">
// Inserir chamada de Função: ditoGetFormData() dentro da função Envia() do seu form.


function ditoFormatDate(date){
    date_array = date.split('/');
    return [date_array[2],date_array[1],date_array[0]].join('-');
}


function ditoGetFormData(){
	
	var nome = "";
	var nm_mail = "";
	var dt_nascimento = "";
	var telefone = "";
	var cidade = "";
	var estado = "";
	var optin = "";
	var ditoUser = {};
	var ditoCData = {};		

	nome = $('[name="nome"]').val();
	nm_mail = $('[name="nm_email"]').val();	
	dt_nascimento = ditoFormatDate($('[name="dt_nascimento"]').val());	
	telefone = $('[name="telefone"]').val();	
	cidade = $('[name="cidade"]').val();
	estado = $('[name="uf"]').val();
	optin = $('[name=recebe]').is(':checked');	
	
		if(nm_mail!=""){	
	
			ditoCData.telefone = telefone;
			ditoCData.estado = estado;
			ditoCData.optin1 = optin;
			
			ditoUser.name = nome;
			ditoUser.email = nm_mail;
			ditoUser.location = cidade;
			ditoUser.birthday = dt_nascimento;
			ditoUser.data = ditoCData;	
				
			//console.log(ditoUser);
			dito.identify(ditoUser);
		}	
	}
