
//Essas duas variaveis (canvas e ctx) servem para pegar o id do elemento canvas, para poder atribuir mudanças ao canvas
var canvas = document.getElementById('canvinha');
var ctx = canvas.getContext('2d');
var cont = 0;


//Evento utilizado para carregar a função principal do programa no html
window.addEventListener("load", main, false);





// função para trocar as imagens no canvas
function main()
{	
	//a variavel pic é utilizada para adicionar o caminho das imagens, e reproduzi-las no canvas
	var pic = new Image();
	pic.src = "_imagens/inicio.png";
	pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
	cont++;
	
	

	//Evento click que serve para pegar a posição "x" e "y" no canvas, para então comparar com determinado x e y para poder ver se o usuario acertou ou errou
	canvas.addEventListener("click", function(evento)
{
	//principais variaveis para produzir as ações do código, na qual elas servem para pegar o x e o y do canvas quando o usuario clicar
	rect = canvas.getBoundingClientRect();
	var x = evento.clientX - rect.left;
	var y = evento.clientY - rect.top;
	
	
	
	

	
	
	//Como pode ver, os contadores são utilizados nas condições para determinar em qual imagem o canvas se encontra
	if(cont == 0)
	{
	var pic = new Image();
	pic.src = "_imagens/inicio.png";
	pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
	cont++;
	}

	
	else if(cont == 1)
	{
	var pic = new Image();
	pic.src = "_imagens/questao_1.png";
	pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
	cont++;
	}

	else if(cont == 2)
	{
		/*Com excessão da imagem inicial do canvas, que sempre adiciona um contador ao clicar nela, quando você clica na area correta da pergunta
		(indicada por x e y no if abaixo, assim como nas demais questões), a imagem é trocada para a próxima pergunta e é adicionado 1 ao contador,
		 caso contrário, entra no else, zerando o contador e trocando para uma imagem de erro, voltando ao inicio do jogo ao clicar novamente*/
		if((x >= 96 && x <= 179) && (y >= 173 && y <= 184))
		{
		var pic = new Image();
		pic.src = "_imagens/questao_2.png";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont++;
		}
		else
		{

		var pic = new Image();
		pic.src = "_imagens/errado.jpg";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont = 0;		

		}
	
	}

	else if(cont == 3)
	{
	
		if((x >= 209 && x <= 240) && (y >= 38 && y <= 69))
		{
		var pic = new Image();
		pic.src = "_imagens/questao_3.png";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont++;
		}
		else
		{

		var pic = new Image();
		pic.src = "_imagens/errado.jpg";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont = 0;		

		}
	
	}
	else if(cont == 4)
	{
	
		if((x >= 292 && x <= 434) && (y >= 163 && y <= 197))
		{
		var pic = new Image();
		pic.src = "_imagens/questao_4.png";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont++;
		}
		else
		{

		var pic = new Image();
		pic.src = "_imagens/errado.jpg";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont = 0;		

		}
	
	}
	else if(cont == 5)
	{
	
		if((x >= 221 && x <= 286) && (y >= 44 && y <= 56))
		{
		var pic = new Image();
		pic.src = "_imagens/questao_5.png";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont++;
		}
		else
		{

		var pic = new Image();
		pic.src = "_imagens/errado.jpg";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont = 0;		

		}
	
	}
	else if(cont == 6)
	{
	
		if((x >= 126 && x <= 152) && (y >= 237 && y <= 248))
		{
		var pic = new Image();
		pic.src = "_imagens/questao_6.png";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont++;
		}
		else
		{

		var pic = new Image();
		pic.src = "_imagens/errado.jpg";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont = 0;		

		}
	
	}
	else if(cont == 7)
	{
	
		if((x >= 325 && x <= 395) && (y >= 232 && y <= 246))
		{
		var pic = new Image();
		pic.src = "_imagens/questao_7.png";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont++;
		}
		else
		{

		var pic = new Image();
		pic.src = "_imagens/errado.jpg";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont = 0;		

		}
	
	}
	else if(cont == 8)
	{
	
		if((x >= 292 && x <= 434) && (y >= 163 && y <= 197))
		{
		var pic = new Image();
		pic.src = "_imagens/questao_8.png";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont++;
		}
		else
		{

		var pic = new Image();
		pic.src = "_imagens/errado.jpg";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont = 0;		

		}
	
	}
	else if(cont == 9)
	{
	
		if((x >= 93 && x <= 140) && (y >= 74 && y <= 83))
		{
		var pic = new Image();
		pic.src = "_imagens/questao_9.png";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont++;
		}
		else
		{

		var pic = new Image();
		pic.src = "_imagens/errado.jpg";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont = 0;		

		}
	
	}
	else if(cont == 10)
	{
	
		if((x >= 69 && x <= 209) && (y >= 225 && y <= 258))
		{
		var pic = new Image();
		pic.src = "_imagens/questao_10.png";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont++;
		}
		else
		{

		var pic = new Image();
		pic.src = "_imagens/errado.jpg";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont = 0;		

		}
	
	}
	else if(cont == 11)
	{
		
		if((x >= 15 && x <= 22) && (y >= 20 && y <= 29))
		{
		var pic = new Image();
		pic.src = "_imagens/certo.png";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont = 0;
		}
		else
		{

		var pic = new Image();
		pic.src = "_imagens/errado.jpg";
		pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		cont = 0;		

		}
		
	
	}

	
	

});


	/*O evento abaixo serve para pegar, constantemente, o valor x e y do mouse, diferente do evento click, que apenas funciona ao clicar, ja esse,
	como foi especificado no evento o mousemove, aonde o usuario passar o mouse, desde que seja dentro do canvas, ele vai pegar o x e o y. Isso serve
	 para que as imagens sejam trocadas, para o jogo parecer animado no canvas, grande parte é a animação dos botões, porém algumas questões exigem essa
	 animação para serem resolvidas, na qual, ou as respostas estão escondidas, ou estão implicitas*/

	canvas.addEventListener("mousemove", function(evt)
	{
	/*a função getBoundingClientRect serve para pegar a area ao redor do canvas, pois se utilizar apenas o clientX e clientY, que pegam as posições x e y ao passar o mouse,
	 ele funcionaria apenas no canvas, porém, a area do canvas faria parte da area total da janela, assim, subtraindo o x e o y dentro do canvas da area ao seu redor, que no caso
	  é apenas a esquerda(onde começa o x) e o topo(onde começa o y), é possivel limitar a area para apenas o canvas, fazendo com que o x e o y sejam = 0 no canto
	  superior esquerdo, e o seu valor maximo seja igual ao canto inferior direito*/

	rect = canvas.getBoundingClientRect();
	var x = evt.clientX - rect.left;
	var y = evt.clientY - rect.top;
	
	//Aqui também é utilizado o sistema de contadores para poder determinar em qual imagem o canvas está e assim fazer corretamente a troca de imagem
	//Basicamente, as primeiras condições, dentro de cada condição do contador, servem para trocar a aparência dos botões, com excessão da questão 3,5 e 10
	//A condição else, dentro de cada condição do contador, serve para deixar a imagem original
	if(cont == 2)
	{
		if((x >= 67 && x <= 215) && (y >= 159 && y <= 195))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_1.1.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 287 && x <= 438) && (y >= 157 && y <= 196))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_1.2.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 67 && x <= 212) && (y >= 221 && y <= 260))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_1.3.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 286 && x <= 435) && (y >= 220 && y <= 256))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_1.4.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else
		{
	
			var pic = new Image();
			pic.src = "_imagens/questao_1.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		
		}
	}
	
	else if(cont == 3)
	{
		if((x >= 67 && x <= 215) && (y >= 159 && y <= 195))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_2.1.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 287 && x <= 438) && (y >= 157 && y <= 196))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_2.2.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 67 && x <= 212) && (y >= 221 && y <= 260))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_2.3.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 286 && x <= 435) && (y >= 220 && y <= 256))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_2.4.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else
		{
	
			var pic = new Image();
			pic.src = "_imagens/questao_2.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		
		}
	}
	
	else if(cont == 4)
	{
		if((x >= 67 && x <= 215) && (y >= 159 && y <= 195))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_3.1.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 287 && x <= 438) && (y >= 157 && y <= 196))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_3.2.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 67 && x <= 212) && (y >= 221 && y <= 260))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_3.3.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 286 && x <= 435) && (y >= 220 && y <= 256))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_3.4.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 233 && x <= 270) && (y >= 204 && y <= 216))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_3.5.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else
		{
	
			var pic = new Image();
			pic.src = "_imagens/questao_3.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		
		}
	}
	
	else if(cont == 5)
	{
		if((x >= 67 && x <= 215) && (y >= 159 && y <= 195))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_4.1.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 287 && x <= 438) && (y >= 157 && y <= 196))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_4.2.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 67 && x <= 212) && (y >= 221 && y <= 260))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_4.3.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 286 && x <= 435) && (y >= 220 && y <= 256))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_4.4.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else
		{
	
			var pic = new Image();
			pic.src = "_imagens/questao_4.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		
		}
	}
	
	
	else if(cont == 6)
	{
		if((x >= 67 && x <= 215) && (y >= 159 && y <= 195))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_5.1.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 287 && x <= 438) && (y >= 157 && y <= 196))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_5.2.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 67 && x <= 212) && (y >= 221 && y <= 260))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_5.3.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 286 && x <= 435) && (y >= 220 && y <= 256))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_5.4.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		
		else if((x >= 80 && x <= 119) && (y >= 107 && y <= 138))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_5.5.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 184 && x <= 228) && (y >= 107 && y <= 138))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_5.6.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 291 && x <= 338) && (y >= 111 && y <= 132))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_5.7.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else
		{
	
			var pic = new Image();
			pic.src = "_imagens/questao_5.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		
		}
	}
	
	else if(cont == 7)
	{
		if((x >= 67 && x <= 215) && (y >= 159 && y <= 195))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_6.1.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 287 && x <= 438) && (y >= 157 && y <= 196))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_6.2.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 67 && x <= 212) && (y >= 221 && y <= 260))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_6.3.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 286 && x <= 435) && (y >= 220 && y <= 256))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_6.4.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else
		{
	
			var pic = new Image();
			pic.src = "_imagens/questao_6.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		
		}
	}
	
	else if(cont == 8)
	{
		if((x >= 67 && x <= 215) && (y >= 159 && y <= 195))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_7.1.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 287 && x <= 438) && (y >= 157 && y <= 196))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_7.2.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 67 && x <= 212) && (y >= 221 && y <= 260))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_7.3.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 286 && x <= 435) && (y >= 220 && y <= 256))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_7.4.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else
		{
	
			var pic = new Image();
			pic.src = "_imagens/questao_7.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		
		}
	}
	
	else if(cont == 9)
	{
		if((x >= 67 && x <= 215) && (y >= 159 && y <= 195))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_8.1.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 287 && x <= 438) && (y >= 157 && y <= 196))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_8.2.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 67 && x <= 212) && (y >= 221 && y <= 260))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_8.3.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 286 && x <= 435) && (y >= 220 && y <= 256))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_8.4.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else
		{
	
			var pic = new Image();
			pic.src = "_imagens/questao_8.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		
		}
	}
	
	else if(cont == 10)
	{
		if((x >= 67 && x <= 215) && (y >= 159 && y <= 195))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_9.1.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 287 && x <= 438) && (y >= 157 && y <= 196))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_9.2.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 67 && x <= 212) && (y >= 221 && y <= 260))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_9.3.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 286 && x <= 435) && (y >= 220 && y <= 256))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_9.4.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else
		{
	
			var pic = new Image();
			pic.src = "_imagens/questao_9.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		
		}
	}
	
	
	else if(cont == 11)
	{
		if((x >= 67 && x <= 215) && (y >= 159 && y <= 195))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_10.1.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 287 && x <= 438) && (y >= 157 && y <= 196))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_10.2.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 67 && x <= 212) && (y >= 221 && y <= 260))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_10.3.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else if((x >= 286 && x <= 435) && (y >= 220 && y <= 256))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_10.4.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		
		else if((x >= 15 && x <= 22) && (y >= 20 && y <= 29))
		{
			var pic = new Image();
			pic.src = "_imagens/questao_10.5.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
			
		}
		else
		{
	
			var pic = new Image();
			pic.src = "_imagens/questao_10.png";
			pic.addEventListener("load", function(){ctx.drawImage(pic,0,0,canvas.width, canvas.height)}, false);
		
		}
	}
	
	
	

	});	









}



	