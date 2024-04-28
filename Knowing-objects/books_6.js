let curYear = new Date().getFullYear()
const livro6 = {
	title: 'Livro 3',
	autor: 'Guilherme',
	publicationYear: 2019,
	gender: 'Horror',
	publicationAge: curYear - 2019,
	rating: null
}
console.log(livro6)
delete livro6.rating
console.log(livro6)