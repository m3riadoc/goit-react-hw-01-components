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
            <ul>
                {stats.map( stats => (
                    <li key={stats.id} className='item'>
                        <span className='label'>{stats.label}</span>
                        <span className='percentage'> {stats.percentage}%</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Statistics;
