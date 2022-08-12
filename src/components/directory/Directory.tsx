import './directory.scss';

import DirectoryItem from '../directory-item/DirectoryItem';

export default function Directory({ categories }: { categories: any[] }) {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
