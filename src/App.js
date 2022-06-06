import { useState } from 'react';
import './App.css';
import Categories from './Categories';

import data from './data/data';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];

function App() {
  const [items, setItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setItems(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setItems(newItems);
  };

  return (
    <div className='App'>
      <Categories categories={categories} filterItems={filterItems} />
      <section className='items'>
        {items.map((item) => {
          return (
            <div className='item'>
              <div>{item.name}</div>
              <div>{item.price}</div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default App;
