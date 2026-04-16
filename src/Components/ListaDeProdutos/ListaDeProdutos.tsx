import React, { useEffect, useState } from 'react';
import { CardProduto} from '../CardProduto/CardProduto';
import * as S from './stylesListaProdutos';

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;

  rating: {
      rate: number; //nota dada ao produto
      count: number; //quantidade de avaliações que o produto recebeu
    }
};

export const ListaDeProdutos: React.FC = () => {

  const [product, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
      });
  }, []);

  if (!product) return <p>Carregando...</p>;

  return (
    <S.Container>
        {product.map((product) => (
        <CardProduto key={product.id} product={product} />
      ))}
    </S.Container>
    );
};