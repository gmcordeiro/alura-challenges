let currentYear = new Date().getFullYear()
const livro3 = {
	title: 'Livro 3',
	autor: 'Guilherme',
	publicationYear: 2019,
	gender: 'Horror'
}
livro3.publicationAge = currentYear - livro3.publicationYear

console.log(`Detalhes do livro: 
	Título: ${livro3['title']}
	Autor: ${livro3['autor']}
	Ano de Publicação: ${livro3['publicationYear']}
	Gênero: ${livro3['gender']},
	Idade de publicação: ${livro3['publicationAge']}\n`
)