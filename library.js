
class book{
    constructor(){
        this.books = [];
    }

    addBook(bookInfo){
        const book = {
            id: this.generateBookId(),
            ...bookInfo,
        };

        this.books.push(book);
        return book;
    }

    getBooks(){
        return this.books;
    }

    removeBookById(id){
        const index = this.books.findIndex((book) => book.id === id); // encontrar o id
        if (index !== -1){
            this.books.splice(index, 1)
            return true
        } else{
            return "Livro não encontrado"
        }
    }

    getBookById(id){
        const index = this.books.findIndex((book) => book.id === id);
        if (book){
            return book;
        }else{
            return null;
        }
    }
    updateBookById(id, info){
        const index = this.books.findIndex((book) => book.id === id);
        if (book){
            if (info.title){
                book.title = info.title;
            }
            if (info.description){
                book.description = info.description;
            }
            if (info.author){
                book.author = info.author;
            }
            return book;
        }else{
            return null;
        }

    }
    
}

const book = new book();

class descricao {
    constructor(title, description, author){
        this.id = 0;
        this.title = title;
        this.description = description;
        this.author = author;
    } 
}
// adicionar livro
const title = prompt("Digite o título do livro: ");
const description = prompt("Digite a descrição do livro: ");
const author = prompt ("Digite o autor do livro: ");

const bookInfo = {
    title: title,
    description: description,
    author: author,
};

const book = book.addBook(bookInfo);
console.log(book);

// remover livro
const IdToRemove = prompt("Digite o ID do livro que deseja remover: ");
const remocao = book.removeBookById(IdToRemove);

if(remocao === true){
    console.log("Livro removido");
}else{
    console.log(remocao);
}

// encontar livro pelo ID
const FindId = prompt("Digite o ID do livro que você deseja encontrar: ");
const book = book.getBookById(FindId);

if(book){
    console.log(book);
}else{
    console.log("Livro não encontrado.");
}

// atualizar livro
const IdUpdate = prompt("Digite o ID que voce deseja atualizar: ");
const titulo = prompt("Digite o novo titulo: ");
const descri = prompt("Digite a nova descrição do livro: ");
const updateBook = book.updateBookById(IdUpdate, {
    title: titulo,
    description: descri,
});

if (updateBook){
    console.log(updateBook);
}else{
    console.log("Livro não encontrado");
}