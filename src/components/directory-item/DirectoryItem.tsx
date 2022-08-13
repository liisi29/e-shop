import './directoryItem.scss';

import { Link } from 'react-router-dom';

export default function DirectoryItem({ category }: { category: IDirectory }) {
  const { imageUrl, title, id } = category;
  return (
    <Link className='directory-item-container' to={`shop/${id}`}>
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

export interface IDirectory {
  id: number;
  title: string;
  imageUrl: string;
}
