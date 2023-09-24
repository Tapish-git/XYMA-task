import React from 'react';
import './style.css';

export default function Sidebar() {
    return (<>
        <div className='bg-kk sidebar p-2'>
            <div className='m-2'>
                <span className='brand-name fs-4 text-white'><img src="./xyma1.png" class="img-fluid" alt="Responsive image"/></span>
            </div>
            <hr className='text-light' />
            <div className="list-group-item bg-kk text-light">
                <a className="list-group-item py-2">
                    <i className="bi bi-speedometer2 fs-5 me-3"></i>
                    <span className='fs-3 font-weight-normal'>Dashboard</span>
                </a>
                <a className="list-group-item py-2">
                    <i className="bi bi-bar-chart fs-5 me-3"></i>
                    <span className='fs-3'>Graphs</span>
                </a>
                <a className="list-group-item py-2">
                    <i className="bi bi-clipboard-data fs-5 me-3"></i>
                    <span className='fs-3'>Analytics</span>
                </a>
                <a className="list-group-item py-2">
                    <i className="bi bi-gear fs-5 me-3"></i>
                    <span className='fs-3'>Settings</span>
                </a>
                <br />
                <a>
                    <img src="./xyma2.png" class="img-fluid" alt="Responsive image"/>
                </a>
            </div>
        </div>
        </>);
}