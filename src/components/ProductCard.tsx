import React from 'react';
import Link from 'next/link';
import { Product } from '../types';
import styles from '../styles/components.module.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { id, imageUrl, title, price } = product;

  // Format price to Vietnamese currency
  const formattedPrice = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(price);

  return (
    <div className={styles.productCard}>
      <img src={imageUrl} alt={title} className={styles.productImage} />
      <h2 className={styles.productTitle}>{title}</h2>
      <span className={styles.productPrice}>{formattedPrice}</span>
      <Link href={`/products/${id}`} className={styles.productButton}>
        Xem thêm
      </Link>
    </div>
  );
};

export default ProductCard;