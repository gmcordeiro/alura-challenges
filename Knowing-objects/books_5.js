let curYear = new Date().getFullYear()
const livro5 = {
	title: 'Livro 3',
	autor: 'Guilherme',
	publicationYear: 2019,
	gender: 'Horror',
	publicationAge: curYear - 2019
}
console.log(livro5)
livro5.gender = 'Adventure'
console.log(livro5)