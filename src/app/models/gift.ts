export interface Gift {
  id: number;
  nome: string;
  descricao: string;
  categoria: string;
  preco: number;
  imagem: string;
  linkShopee: string;
  escolhido: boolean;
  nomeConvidado: string | null;
}
