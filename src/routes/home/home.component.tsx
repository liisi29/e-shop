import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/5841d1805016e1d55a21d349/1521226308181-3ELV1FTEGS2N0ETLZNCQ/15194455_1479052902123383_7773753667519325305_o.jpg',
    },
    {
      id: 2,
      title: 'boys',
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/5841d1805016e1d55a21d349/1521226259945-EOP0NRJUTSE1FZXRB0AX/10351076_946296592065686_836521635947665585_n.jpg',
    },
    {
      id: 3,
      title: 'girls',
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/5841d1805016e1d55a21d349/1521226269216-BPCM2NSJ2Y3IG95EK6JI/10801624_946295882065757_38718503841641221_n.jpg',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/5841d1805016e1d55a21d349/1521226269214-4LJXINYGI43WEFYHTHJS/11118982_1062169660478378_3833116620667344808_o.jpg',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl:
        'https://images.squarespace-cdn.com/content/v1/5841d1805016e1d55a21d349/1521226278993-WWNYECALUNC14ORLIRZ7/12402022_1193957887299554_1655054506993857390_o.jpg',
    },
  ];

  return (
    <div>
      <Directory categories={categories} />
      <Outlet />
    </div>
  );
};

export default Home;
