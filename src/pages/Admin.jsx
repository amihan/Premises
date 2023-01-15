import React from 'react';
import './info.css';

const Admin = ({report}) => {
    console.log('admin',report)
    return (<div>
            <h1 className="title">Отчетность:</h1>
            <table className="table">
                <tr>
                    <td className='table__td top'>№</td>
                    <td className='table__td top'>Фамилия</td>
                    <td className='table__td top'>Имя</td>
                    <td className='table__td top'>Номер телефона</td>
                    <td className='table__td top'>Забронированные помещения</td>
                </tr>

                {report.map((value,index) => <tr>
                    <td className='table__td'>{++index}</td>
                    <td className='table__td'>{value.name}</td>
                    <td className='table__td'>{value.surname}</td>
                    <td className='table__td'>{value.number}</td>
                    <td className='table__td'>{value.item.map(value => <p>{value.title}</p>)}</td>
                </tr>)}

            </table>
        </div>
    );
};

export default Admin;