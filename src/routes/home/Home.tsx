import { Outlet } from 'react-router-dom';

import { CATS } from '../../admin/categories-data.mjs';
import Directory from '../../components/directory/Directory';

export default function Home() {
  return (
    <div>
      <Directory categories={CATS} />
      <Outlet />
    </div>
  );
}
