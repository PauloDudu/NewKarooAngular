export interface destaque {
    id: number,
    descricao: string,
    link: string
}

export interface funcionario {
    id: Number,
    nome: string,
    email: string,
    senha: string
}

export interface Assunto {
    codigoCliente: string,
    email: string,
    nomeCliente: string,
    conteudo: string,
    atendido: boolean
}

export interface Message {
    user: string,
    content: string
}

export interface Chat {
    id: string,
    messages: Message[],
}

export interface Funcionario {
    email: string,
    id: number,
    nome: string,
    senha: string
}