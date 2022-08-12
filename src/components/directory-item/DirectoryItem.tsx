import './directoryItem.scss';

import { Link } from 'react-router-dom';

import { ICategory } from '../../dto/firebase';

export default function DirectoryItem({ category }: { category: ICategory }) {
  const { imageUrl, title } = category;
  return (
    <Link className='directory-item-container' to={`shop/${title}`}>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='body'>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </Link>
  );
}
