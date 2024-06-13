
function Contact() {
  return (
    <><br id="ContactWithUs"/>
    <center>
        <h1>Contact with us</h1>
    </center>

    <div className='container card bg-dark bg-gradient text-light '><br />
        <form>
            <div className="row">
              <div className="col-6">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Name" required/>
              </div>
              <div className="col-6">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email" required/>
              </div>
            </div>

            <div className='col-8'>
                <label>Subject</label>
                <input type="text" className="form-control" placeholder="Subject" required/>
            </div>

            <div className='col-8'>
              <label>Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" required></textarea>
            </div><br />
            <button type='submit' className="btn btn-primary col-2">Send</button>
            
        </form><br />
    </div><br />
    </>  
  )
}

export default Contact