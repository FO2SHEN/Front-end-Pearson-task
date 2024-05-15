
function Contact() {
  return (
    <><br />
    <center>
        <h1>Contact us</h1>
    </center>

    <div className='container card bg-dark bg-gradient text-light '><br />
        <form>
            <div className="row">
              <div className="col-6">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Name"/>
              </div>
              <div className="col-6">
                <label>Email</label>
                <input type="email" className="form-control" placeholder="Email"/>
              </div>
            </div>

            <div className='col-8'>
                <label>Subject</label>
                <input type="text" className="form-control" placeholder="Subject"/>
            </div>

            <div className='col-8'>
              <label>Message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1"></textarea>
            </div><br />
            <button type='submit' className="btn btn-primary col-1">Send</button>
            
        </form><br />
    </div><br />
    </>  
  )
}

export default Contact