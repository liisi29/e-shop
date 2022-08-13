import './directory.scss';

import DirectoryItem, { IDirectory } from '../directory-item/DirectoryItem';

export default function Directory({
  categories,
}: {
  categories: IDirectory[];
}) {
  return (
    <div className='directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
}
