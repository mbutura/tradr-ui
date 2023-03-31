import '../theme.css';
import React from 'react';   
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home(){
  return (
    <div>
        <Header />
        {/* <!-- Page Content--> */}
        <div className="container-fluid">
            {/* <!-- Heading Row--> */}
            <div className="row gx-4 gx-lg-5 align-items-center">
                <div className="col-lg-12 banner"></div>
            </div>
            {/* <!-- Content Row--> */}
            <div className="row gx-4 gx-lg-5">
                <div className="col-md-4 mb-5">
                    <div className="card h-100 py-4">
                        <img class="img mx-auto" src="https://img.icons8.com/material-rounded/90/3e54ac/money-bag.png" alt="Multiple trading pairs placeholder" />
                        <div className="text-center">
                            <p className="card-text">Multiple trading pairs</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card h-100 py-4">
                        <img class="img mx-auto" src="https://img.icons8.com/ios-glyphs/90/3e54ac/key--v1.png" alt="Secure placeholder" />
                        <div className="text-center">
                            <p className="card-text">Secure</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card h-100 py-4">
                        <img class="img mx-auto" src="https://img.icons8.com/ios-glyphs/90/3e54ac/handshake--v1.png" alt="Investment ready placeholder" />
                        <div className="text-center">
                            <p className="card-text">Investment ready</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card h-100 py-4">
                        <img class="img mx-auto" src="https://img.icons8.com/ios-glyphs/90/3e54ac/hand-cursor.png" alt="MPESA placeholder" />
                        <div className="text-center">
                            <p className="card-text">MPESA</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card h-100 py-4">
                        <img class="img mx-auto" src="https://img.icons8.com/ios-filled/90/3e54ac/upload-to-cloud--v1.png" alt="Data backups placeholder" />
                        <div className="text-center">
                            <p className="card-text">Data backups</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-5">
                    <div className="card h-100 py-4">
                        <img className="img mx-auto" src="https://img.icons8.com/ios-filled/90/3e54ac/fingerprint.png" alt="Privacy placeholder" />
                        <div className="text-center">
                            <p className="card-text">Privacy</p>
                        </div>
                    </div>
                </div>                
            </div>
        </div>
        <Footer />
    </div>
  )
}