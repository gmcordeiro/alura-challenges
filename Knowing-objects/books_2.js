const livro2 = {
	title: 'Livro 2',
	autor: 'Guilherme',
	publicationYear: 2020,
	gender: 'Horror'
}

let currentYear = new Date().getFullYear()
livro2.publicationAge = currentYear - livro2.publicationYear
let mostrarDetalhes = (`Detalhes do livro: 
	Título: ${livro2.title}
	Autor: ${livro2.autor}
	Ano de Publicação: ${livro2.publicationYear}
	Gênero: ${livro2.gender}
	Idade: ${livro2.publicationAge}\n`)
console.log(mostrarDetalhes)
