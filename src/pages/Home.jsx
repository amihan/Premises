import React from 'react';
import Categories from "../components/Categories";
import PizzaBlock from "../components/PizzaBlock";


const Home = ({pushItem}) => {
    const categories = ['Все', 'Жилые помещения', 'Аппартаменты', 'Офис', 'Гаражи'];
    const [activeIndex, setactiveIndex] = React.useState(0);


    const [item, setItem] = React.useState([]);

    React.useEffect(() => {
        const fetchItems = (item) => {
            fetch(`https://63c3aab98067b6bef6ccfeb1.mockapi.io/premises?search=${item}`)
                .then((res) => {
                    return res.json();
                }).then(
                (arr) => {
                    setItem(arr);
                }
            )
        }
        switch (activeIndex) {
            case 0:
                fetchItems('')
            case 1:
                fetchItems('habitable')
            case 2:
                fetchItems('apartments')
            case 3:
                fetchItems('office')
            case 4:
                fetchItems('garage')
        }

    }, [activeIndex])

    React.useEffect(() => {
        fetch('https://63c3aab98067b6bef6ccfeb1.mockapi.io/premises')
            .then((res) => {
                return res.json();
            }).then(
            (arr) => {
                setItem(arr);
                console.log(arr);
            }
        )
    }, []);


    return (<>
            <div className="content__top">
                <Categories categories={categories} activeIndex={activeIndex}
                            setactiveIndex={setactiveIndex}/>
            </div>
            <h2 className="content__title">Помещения</h2>
            <div className="content__items">
                {item.map(obj => obj.blocked != false ? <PizzaBlock key={obj.id} {...obj} pushItem={pushItem}/> : <div></div>)}
            </div>
        </>
    );
};

export default Home;