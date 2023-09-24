import React from 'react'

function DeviceStats() {
  return (<div className='d-flex-column'>
        <h4>Device Stats(Offline)</h4>
        <div>
            <p>Sensors(Nos)</p>
            <div className="progress m-1" style={{height:"25px"}}>
                <div className="progress-bar bg-kk" role="progressbar" style={{width:"40%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><h5><b className='align-middle'>8/20</b></h5></div>
            </div>
            <p>Storage(MB)</p>
            <div className="progress m-1" style={{height:"25px"}}>
                <div className="progress-bar bg-kk" role="progressbar" style={{width:"19%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><h5><b className='align-middle'>24MB/1024MB</b></h5></div>
            </div>
            <p>Device Temperature(&#xb0;C)</p>
            <div className="progress m-1" style={{height:"25px"}}>
                <div className="progress-bar bg-kk" role="progressbar" style={{width:"25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><h5><b className='align-middle'>23&#xb0;C/100&#xb0;C</b></h5></div>
            </div>
        </div>
        <br />
        {/* Credential Cards */}
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                <div className="p-3 bg-kk text-light shadow-sm d-flex justify-content-between align-items-center rounded" style={{height:'170px'}}>
                            <i className="bi bi-clock fs-1"></i>
                            <div>
                                <h6>Last Login</h6>
                                <h6>18-09-2023 13:21:00</h6>
                            </div>
                        </div>
                </div>
                <div className="col-md-6">
                <div className="p-3 bg-kk text-light shadow-sm d-flex justify-content-around align-items-center rounded" style={{height:'170px'}}>
                            <i className="bi bi-globe-central-south-asia fs-1"></i>
                            <div>
                                <h6>Mac Address</h6>
                                <h6>Abts-Tn-Dynamic-33.48.76.171.Airtelbroadband</h6>
                            </div>
                        </div>
                </div>
            </div>
        </div>

  </div>)
}

export default DeviceStats