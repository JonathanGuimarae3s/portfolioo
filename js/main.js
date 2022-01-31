onload = () => {
	inserir();
};



// Projetos
const projects = {
	imagem: [
		"https://jonathanguimarae3s.github.io/vitrine/imagens/logos/logo-oficial-1.png",
	],
	nome: ["Vitrine", ],

	introducao: [
		"Este projeto está sendo feito no intuito de ajudar a vendedora ter um controle de onde vem os clientes e na melhor experiência do cliente.",
	],

	resolucao: [
		"Para conseguir resolver esses problemas, pensei em criar uma vitrine que quando o cliente clicasse no produto escolhido ele seria reedirecionado para o chat da vendedora para saber mais sobre o vestido e a forma de pagamentos . Para isso utilizei o	JavaScript com o método <code>.open() </code>e a API do whatsapp.",
	],

	linkCode: ["https://github.com/JonathanGuimarae3s/vitrine"],
	link: ["https://jonathanguimarae3s.github.io/vitrine/"],
};



inserir = () => {
	let containerProjects = document.getElementById("container_projects");

	containerProjects.innerHTML = `
				<div class='project item'>
					<div class='project_images'>
						<img
							src='https://jonathanguimarae3s.github.io/vitrine/imagens/logos/logo-oficial-1.png'
							alt=''
							width='100%'
						/>
					</div>
					<div class='project_description'>
						<h4> Vitrine </h4>
						<p>
							Este projeto está sendo feito no intuito de ajudar a vendedora ter um controle de onde vem os clientes e na melhor experiência do cliente.
						</p>
						<p>
						Para conseguir resolver esses problemas, pensei em criar uma vitrine que quando o cliente clicasse no produto escolhido ele seria reedirecionado para o chat da vendedora para saber mais sobre o vestido e a forma de pagamentos . Para isso utilizei o	JavaScript com o método <code>.open() </code>e a API do whatsapp
						</p>
					</div>
					<div class='project_buttons'>
						<button class='button mg'>Conferir o código fonte</button>
						<button class='button'>Acessar o site</button>
					</div>
				</div>`;
};
