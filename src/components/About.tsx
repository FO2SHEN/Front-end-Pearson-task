import companyPic from '../assets/images/43c29760-ad15-47b1-a7cc-5eabd1bf55ad.jpeg'
import profile1 from '../assets/images/profile 1.jpg'
import profile2 from '../assets/images/profile 2.jpg'
import profile3 from '../assets/images/profile 3.jpg'


function About() {
  return (
    <><br id='About' />
    <header className='bg'>   
        <div className='color-overlay'><br />
            <div className="container">
                <div className="row m-auto">
                    <div className=" col-md-6 col-l-8 text-light">
                        <h1 className='underline '>About Us</h1>
                        <p className='lead'>
                            1. We are a premier security firm dedicated to safeguarding your peace of mind with innovative solutions and unwavering commitment.
                        </p>
                        <p className='lead'>
                        2. With a focus on excellence and reliability, our security company stands as your trusted partner in protecting what matters most.
                        </p>
                        <p className='lead'>
                        3. At our security company, we blend cutting-edge technology with expert personnel to deliver unparalleled protection tailored to your unique needs.
                        </p>
                        <p className='lead'>
                        4. Driven by a passion for security, our team is dedicated to providing comprehensive solutions that exceed expectations, every time.
                        </p>
                        <p className='lead'>
                        5. Backed by years of experience and a relentless pursuit of excellence, our security company is your first choice for superior protection and peace of mind.
                        </p>
                        <p className='lead'>
                        6. We are more than just a security company; we are your proactive shield against threats, ensuring safety and security around the clock.
                        </p>
                        <p className='lead'>
                        7. With a mission to redefine security standards, our company is committed to delivering proactive, responsive, and customized solutions for every client.
                        </p>
                        <p className="lead">
                            8. Our security company combines advanced technology with a human touch, delivering personalized protection that adapts to your evolving security needs.
                        </p>
                    </div>
                    <div className="col-md-2"><br /><br />
                        <img src={companyPic}  className='rounded border' height={600} width={400} alt="company pic." />
                    </div>
                </div>
            </div>
        </div>
    </header><br />
    {/* Team manegers */}
    <div className='container-fluid'>
        <center>
            <h1>Company Manegers</h1>
        </center>
        <div className='row d-flex justify-content-center '>
            {/* card no.1 */}
            <div className="card col-lg-3 col-md-6 col-sm-8 m-1 text-white bg-dark"><br />
                <img src={profile1} className="card-img-top rounded" height={600} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            {/* card no.2 */}
            <div className="card col-lg-3 col-md-6 col-sm-8 m-1 text-white bg-dark"><br />
                <img src={profile2} className="card-img-top rounded" height={600} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
            {/* card no.3 */}
            <div className="card col-lg-3 col-md-6 col-sm-8 m-1 text-white bg-dark"><br />
                <img src={profile3} className="card-img-top rounded" height={600} alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default About