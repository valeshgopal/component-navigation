import React from 'react';

const Categories = ({ categories, filterItems }) => {
  console.log(categories);
  return (
    <div className='btns'>
      {categories.map((category) => {
        return (
          <button className='btn' onClick={() => filterItems(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
