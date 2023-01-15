import './App.css';
import './scss/app.scss'
import Header from "./components/Header";
import React from "react";
import Home from "./pages/Home";
import {Route, Router, Routes} from "react-router";
import Basket from "./pages/Basket";
import basket from "./assets/basket.json"
import Admin from "./pages/Admin";
import {Link} from "react-router-dom";


function App() {
    const [item, setItem] = React.useState(basket);

    const pushItem = (title, price, imageUrl, id) => {
        // if(item.find((i) => i.id == id)){
        //     return 0;
        // }

        for (let i = 0; i < item.length; i++) {
            if (item[i].id == id) {
                return 0
            }
        }

        let copy = Object.assign([], item);
        copy.push({title, price, imageUrl, id});
        setItem(copy);
    }
    const [report, useReport] = React.useState([]);
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <Link to='/admin'>
                    админка
                </Link>

                <div className="content">
                    <div className="container">
                        <Routes>
                            <Route path='' element={<Home pushItem={pushItem}/>}/>
                            <Route path='/basket' element={<Basket item={item} setItem={setItem} report={report} useReport={useReport}/>}/>
                            <Route path='/admin' element={<Admin report={report}/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
