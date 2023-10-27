import React, { useState } from 'react';
import './App.css';

const options = ['Recent', 'Popular', 'Latest'];

const data = {
  products: [
    {
      "id": 1,
      "title": "Featured Service",
      "url": "./images/f.png",
      "category": "Announcement"
    },
    {
      "id": 2,
      "title": "Weekly Newsletter",
      "url": "./images/w.png",
      "category": "Announcement"
    },
    {
      "id": 3,
      "title": "New Product/Service Announcement",
      "url": "./images/n.png",
      "category": "Announcement"
    },
    {
      "id": 4,
      "title": "New Product/Service Announcement",
      "url": "./images/n.png",
      "category": "Educate & Inform"
    },
    {
      "id": 5,
      "title": "Weekly Newsletter",
      "url": "./images/w.png",
      "category": "Educate & Inform"
    },
    {
      "id": 6,
      "title": "Editorial Newletter",
      "url": "./images/e.png",
      "category": "Educate & Inform"
    },
    {
      "id": 7,
      "title": "Featured Service",
      "url": "./images/f.png",
      "category": "Invitations"
    },
    {
      "id": 8,
      "title": "Weekly Newsletter",
      "url": "./images/w.png",
      "category": "Invitations"
    },
    {
      "id": 9,
      "title": "New Product/Service Announcement",
      "url": "./images/n.png",
      "category": "Invitations"
    },
    {
      "id": 10,
      "title": "Editorial Newletter",
      "url": "./images/e.png",
      "category": "Ocassions"
    },
    {
      "id": 11,
      "title": "Featured Service",
      "url": "./images/f.png",
      "category": "Ocassions"
    },
    {
      "id": 12,
      "title": "New Product/Service Announcement",
      "url": "./images/n.png",
      "category": "Ocassions"
    },
  ],
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const categories = [...new Set(data.products.map((product) => product.category))];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setSearchText('');
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const resetCheckboxes = (selectedCategory) => {
    setSelectedCategory(selectedCategory);
  };

  const filteredProducts = data.products.filter(
    (product) =>
      selectedCategory === 'all' || product.category === selectedCategory
  );

  const displayedProducts = searchText
    ? filteredProducts.filter((product) =>
        product.title.toLowerCase().includes(searchText.toLowerCase())
      )
    : filteredProducts;

  const getCategoryProducts = (category) =>
    displayedProducts.filter((product) =>
      category === 'all' ? true : product.category === category
    );

  return (
    <div className="container">
      <div className="categories">
        <p>Categories</p>
        <ul id="categoryList">
          <li>
            <input
              type="checkbox"
              id="all"
              name="category"
              value="all"
              checked={selectedCategory === 'all'}
              onChange={() => resetCheckboxes('all')}
            />
            <label htmlFor="all" style={{ paddingLeft: '5px'}}><b>All</b></label>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <input
                type="checkbox"
                id={category}
                name="category"
                value={category}
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
              />
              <label htmlFor={category} style={{ paddingLeft: '5px'}}><b>{category}</b></label>
            </li>
          ))}
        </ul>
      </div>
      <div className="products">
      <div className="search-sort-container">
        <input
          type="text"
          id="searchBar"
          placeholder="Search email templates"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{   paddingLeft: '15px', fontSize: '13px'}}
        />
      <div className="sort-select">
      <div className="selected-option" onClick={() => setIsOpen(!isOpen)}>
            <b>Sort by :</b> <span className="s">{selectedOption}</span>
          </div>
      {isOpen && (
        <div className="options">
          {options.map((option) => (
            <div key={option} className="option" onClick={() => handleOptionClick(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
    </div>

    <div id="productList" className="product-container">
  {selectedCategory === 'all' ? (
    categories.map((category) => (
      <div key={category} className="category-div">
        <h2>{category}</h2>
        <div className="product-container">
          {getCategoryProducts(category).map((product) => (
            <div key={product.id} className="product-div">
              <img src={product.url} alt={product.title} />
            </div>
          ))}
        </div>
      </div>
    ))
  ) : (
    getCategoryProducts(selectedCategory).map((product) => (
      <div key={product.id} className="product-div">
        <img src={product.url} alt={product.title} />
      </div>
    ))
  )}
</div>

      </div>
    </div>
  );
}

export default App;
