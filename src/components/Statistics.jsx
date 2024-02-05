import React from 'react';
import './Statistics.css'; 

function Statistics({ title, stats }) {
    return (
        <div className='stats-card' >
            <div className='stats-card-title'>
                <h1 className='stats-title'>
                    {title}
                </h1>
            </div>
            <ul className='stats-ul'>
                {stats.map((stat) => {
                    let style = { backgroundColor: '#ffcccc' }; 
                    if (stat.percentage > 5) style.backgroundColor ='#9fc5e8'
                    if (stat.percentage > 20) style.backgroundColor = '#ffff99'; 
                    if (stat.percentage > 50) style.backgroundColor = '#ccffcc';
                    
                    return (
                        <li key={stat.id} className='item' style={style}>
                            <span className='label'>{stat.label}</span>
                            <span className='percentage'>{stat.percentage}%</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default Statistics;
