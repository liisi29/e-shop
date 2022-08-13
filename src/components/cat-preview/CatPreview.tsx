import { Link } from 'react-router-dom';
import { ICategory, ICategoryItem } from '../../dto/firebase';

import ProductCard from '../product-card/ProductCard';

import './catPreview.scss';

// You should never make fun with function or variable names
// This is not clean code. But I couldn't resist :)
export default function CatPreview({ title, products }: ICatPreviewProps) {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link className='title' to={title}>
          {title.toUpperCase()}
        </Link>
      </h2>
      <div className='preview'>
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export interface ICatPreviewProps {
  title: string;
  products: ICategoryItem[];
}
