import React from 'react'
import cam1 from '../assets/images/cam1.jpeg'
import cam2 from '../assets/images/cam2.jpeg'
import sensor from '../assets/images/sensor1.jpeg'
import smartLock from '../assets/images/Smart Door Lock.jpeg'


function Products() {
  return (
      <><br id='Products'/><br /><br />
    <div >
        <center>
            <h1>Best Sells</h1>
        </center>
        <div className='container-fluid animate__animated animate__backInUp animate__delay-3s'>
            <div className="row  d-flex justify-content-center">               
            {/* card no.1 */}
            <div className="card col-lg-2 col-sm-7  m-3" >
                <img className="card-img-top" src={cam1} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary m-1">View</a>
                    <a href="#" className="btn btn-success m-1">Buy</a>
                </div>
            </div>
            {/* card no.2 */}
            <div className="card col-lg-2 col-sm-7  m-3" >
                <img className="card-img-top bt-" src={cam2} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary m-1">View</a>
                    <a href="#" className="btn btn-success m-1">Buy</a>
                </div>
            </div>
            {/* card no.3 */}
            <div className="card col-lg-2 col-sm-7  m-3" >
                <img className="card-img-top" src={sensor} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary m-1">View</a>
                    <a href="#" className="btn btn-success m-1">Buy</a>
                </div>
            </div>
            {/* card no.4 */}
            <div className="card col-lg-2 col-sm-7  m-3" >
                <img className="card-img-top" src={smartLock} alt="Card image cap"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary m-1">View</a>
                    <a href="#" className="btn btn-success m-1">Buy</a>
                </div>
            </div>

            </div>
        </div>
    </div><br /><br />
    </>
  )
}

export default Products