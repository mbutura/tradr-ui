import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
        <Header />
        {/* <!-- Page Content--> */}
        <div className="container px-4 px-lg-5">
            {/* <!-- Heading Row--> */}
            <div className="row gx-4 gx-lg-5 align-items-center my-5">
                <div className="col-lg-7"><img className="img-fluid rounded mb-4 mb-lg-0" src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80" alt="..." /></div>
                <div className="col-lg-5">
                    <h2 className="font-weight-light text-center">Quality Since 1987</h2>
                    <p>We are approved to 1SO-9001 and as an inspection and repair company. Our goal is to provide exceptional customer service and quick turnaround times so that our customers can get back to using their devices as soon as possible.</p>
                </div>
            </div>
            {/* <!-- Call to Action--> */}
            <div className="card text-white bg-secondary my-5 py-4 text-center">
                <div className="card-body"><p className="text-white m-0">When paired with our tools, we mean repair!</p></div>
            </div>
            {/* <!-- Content Row--> */}
            <div className="row gx-4 gx-lg-5">
                <div className="col-md-4 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Electrical</h2>
                            <p className="card-text" text-align="justify">Use our electrical technicians for domestic and commercial electrical work</p>
                        </div>
                        <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Plumbing</h2>
                            <p className="card-text">Use our Plumbers for domestic and commercial water work</p>
                        </div>
                        <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Inspection</h2>
                            <p className="card-text">We are 1SO-9001 approved! We care about Occupational Safety and Health</p>
                        </div>
                        <div className="card-footer"><a className="btn btn-primary btn-sm" href="#!">More Info</a></div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}