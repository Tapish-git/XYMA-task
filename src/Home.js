import React from 'react';
import Nav from './Nav';
import DeviceStats from './DeviceStats';
import Asset from './Asset';

function Home({Toggle}) {
  return (<div className='d-flex-column'>
        <div className='background-color-light'>
        <Nav Toggle={Toggle}/>
        {/* Temperature Cards */}
            <div className="container-fluid">
                <div className="row g-3 my-2 mx-1">
                    <div className="col-md-3">
                        <div className="p-3 bg-kk text-white shadow-sm d-flex justify-content-between align-items-center rounded">
                            <i className="bi bi-thermometer-half  fs-1"></i>
                            <div>
                                <h3 className='fs-1'>23&#xb0;C</h3>
                                <p className="fs-4">Sensor-1</p>
                                <h6>Click Here To View</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-3 bg-kk text-white shadow-sm d-flex justify-content-between align-items-center rounded">
                            <i className="bi bi-thermometer-half p-3 fs-1"></i>
                            <div className='justify-content-right'>
                                <h3 className='fs-1'>23&#xb0;C</h3>
                                <p className="fs-4">Sensor-2</p>
                                <h6>Click Here To View</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-3 bg-kk text-white shadow-sm d-flex justify-content-between align-items-center rounded">
                            <i className="bi bi-thermometer-half p-3 fs-1"></i>
                            <div>
                                <h3 className='fs-1'>32&#xb0;C</h3>
                                <p className="fs-4">Sensor-3</p>
                                <h6>Click Here To View</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="p-3 bg-kk text-white shadow-sm d-flex justify-content-between align-items-center rounded">
                            <i className="bi bi-thermometer-half p-3 fs-1"></i>
                            <div>
                                <h3 className='fs-1'>23&#xb0;C</h3>
                                <p className="fs-4">Sensor-4</p>
                                <h6>Click Here To View</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <br />
            <br />

            {/* Mapbox */}
        </div>
        <div className='d-flex justify-content-between'>
            <Asset/>
            <DeviceStats />
        </div>
    </div>);
}

export default Home