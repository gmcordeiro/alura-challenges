let curYear = new Date().getFullYear()
const livro4 = {
	title: 'Livro 3',
	autor: 'Guilherme',
	publicationYear: 2019,
	gender: 'Horror',
	publicationAge: curYear - 2019,
	rating: null,
}

if (livro4.rating == null){
	livro4.rating = 5.0
} else {
	console.log(`O livro já possuí uma avaliação`)
}

console.log(`Detalhes do livro: 
	Título: ${livro4.title}
	Autor: ${livro4.autor}
	Ano de Publicação: ${livro4.publicationYear}
	Gênero: ${livro4.gender}
	Idade: ${livro4.publicationAge}
	Avaliação: ${livro4.rating}\n`)
