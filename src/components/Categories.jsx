import React from 'react';

const Categories = ({categories,activeIndex,setactiveIndex }) => {
    return (
        <div className="categories">
            <ul>
                {categories.map((value, index) => (
                    <li
                        key={index}
                        onClick={() => setactiveIndex(index)}
                        className={activeIndex === index ? 'active' : ''}>
                        {value}
                    </li>))
                }
            </ul>
        </div>
    );
};

export default Categories;