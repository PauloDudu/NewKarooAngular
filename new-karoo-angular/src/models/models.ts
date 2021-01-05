export interface destaque {
    descricao: String,
    link: String
}

export interface funcionario {
    id: Number,
    nome: String,
    email: String,
    senha: String
}

export interface Assunto {
    codigoCliente: String,
    email: String,
    nomeCliente: String,
    conteudo: String
}

export interface Message {
    user: String,
    content: String
}

export interface Chat {
    id: String,
    messages: Message[],
}