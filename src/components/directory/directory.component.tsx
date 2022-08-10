import CategoryItem from "../category-item/category-item.component";
import { CategoryItemType } from "../category-item/category-item.type";

import "./directory.styles.scss";

const Directory = ({ categories }: { categories: CategoryItemType[] }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
