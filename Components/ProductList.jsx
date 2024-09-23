import React from 'react';
import './ProductList.css';
import ProductItem from './ProductItem';

const products = {
  Frutas: [
    { id: 1, name: 'Banana', price: 'R$ 3,00', description: 'Banana madura', imageUrl: 'https://static.wixstatic.com/media/53e8bb_a1e88e551162485eb4ff962437300872~mv2.jpeg/v1/crop/x_0,y_105,w_1024,h_919/fill/w_560,h_560,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Banana.jpeg' },
    { id: 2, name: 'Maçã', price: 'R$ 4,00', description: 'Maçã vermelha', imageUrl: 'https://mercadoorganico.com/6314-large_default/maca-gala-organica-400g-a-500g-osm.jpg' },
    { id: 3, name: 'Laranja', price: 'R$ 2,50', description: 'Laranja suculenta', imageUrl: 'https://www.quitandatomio.com.br/upload/24003020-beneficios-da-laranja-bahia-para-a-saude.jpg' },
    { id: 4, name: 'Manga', price: 'R$ 5,00', description: 'Manga doce', imageUrl: 'https://www.quitandatomio.com.br/upload/1085343213-beneficios-da-manga-palmer-para-a-saude.jpg' },
    { id: 5, name: 'Uva', price: 'R$ 7,00', description: 'Uva sem semente', imageUrl: 'https://coopsp.vtexassets.com/arquivos/ids/232186-800-auto?v=638152831486870000&width=800&height=auto&aspect=true' }
  ],
  Bebidas: [
    { id: 6, name: 'Suco de Laranja', price: 'R$ 8,00', description: 'Suco 100% natural', imageUrl: 'https://naturalone.vteximg.com.br/arquivos/ids/157673/SUCO_DE_LARANJA_INTEGRAL_2L_REFRIGERADO_GARRAFA_RECICLAVEL_-_NATURAL_ONE-01.jpg?v=638210558436300000' },
    { id: 7, name: 'Refrigerante', price: 'R$ 5,50', description: 'Refrigerante de cola', imageUrl: 'https://www.drogariaminasbrasil.com.br/media/product/619/refrigerante-coca-cola-pet-2l-927.jpg' },
    { id: 8, name: 'Água Mineral', price: 'R$ 2,00', description: 'Água mineral sem gás', imageUrl: 'https://drogariamoderna.vtexassets.com/arquivos/ids/251997-800-auto?v=638151218022670000&width=800&height=auto&aspect=true' },
    { id: 9, name: 'Suco de Uva', price: 'R$ 9,00', description: 'Suco de uva integral', imageUrl: 'https://a-static.mlcdn.com.br/450x450/suco-de-uva-300ml-integral-puro-mini-caixa-c-6-garrafinhas-eg-atacado-distribuidora/egatacadodistribuidora/7775fb06e55011ed82324201ac185033/4e0eba01a799e808ddbef447b5e78942.jpeg' },
    { id: 10, name: 'Cerveja', price: 'R$ 4,00', description: 'Cerveja artesanal', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ttm84y1fb0HhdWZw48TYSQLhPtlXPzIwSg&s' }
  ],
  Doces: [
    { id: 11, name: 'Chocolate', price: 'R$ 6,00', description: 'Chocolate ao leite', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9KluaympypKNAS7NtFM2B5s4NsuaCwad8bw&s' },
    { id: 12, name: 'Bala de Goma', price: 'R$ 3,50', description: 'Bala de goma sortida', imageUrl: 'https://docemalu.vtexassets.com/arquivos/ids/5355878-800-auto?v=638573610861200000&width=800&height=auto&aspect=true' },
    { id: 13, name: 'Pé de Moleque', price: 'R$ 5,00', description: 'Doce tradicional de amendoim', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA0qf-o60yo2ddJut-9QLy10_SvOkdTh1AUw&s' },
    { id: 14, name: 'Doce de Leite', price: 'R$ 7,00', description: 'Doce de leite cremoso', imageUrl: 'https://mercantilnovaera.vtexassets.com/arquivos/ids/200828/Doce-de-Leite-Tradicional-ITALAC-Pote-400g.jpg?v=637958459807230000' },
    { id: 15, name: 'Paçoca', price: 'R$ 3,00', description: 'Paçoca de amendoim', imageUrl: 'https://docemalu.vtexassets.com/arquivos/ids/5336165/118402-2.jpg?v=638421624547200000' }
  ]
};
  


function ProductList({ category }) { 
  return (
    <div className="product-list">
      {products[category].map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
