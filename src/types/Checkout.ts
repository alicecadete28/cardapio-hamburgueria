export interface CheckoutForm {
  nome: string;
  telefone: string;
  cep: string;
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  observacoes: string;
  metodoPagamento: "dinheiro" | "cartao" | "pix";
  troco?: string;
}
