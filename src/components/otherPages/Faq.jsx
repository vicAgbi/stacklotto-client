import React from 'react';
import InnerBanner from '../common/InnerBanner';

const Faq = () => (
    <div>
      <InnerBanner
        pageName={"Faq"}
        />
        <div>
        <section className="faq-section padding-top-130 padding-bottom-130">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="section-header text-center">
            <h2 className="header-title">Frequently Asked Questions</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-8">
          <div className="accordion cmn-accordion" id="accordionExample">
            <div className="card">
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Nihil anim keffiyeh helvetica.</button>
                </h2>
              </div>
              <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                <div className="card-body">
                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Food truck quinoa nesciunt laborum eiusmod</button>
                </h2>
              </div>
              <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                <div className="card-body">
                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Leggings occaecat craft beer farm-to-table</button>
                </h2>
              </div>
              <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                <div className="card-body">
                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla.</p>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingFour">
                <h2 className="mb-0">
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">Food truck quinoa nesciunt laborum eiusmod</button>
                </h2>
              </div>
              <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                <div className="card-body">
                    <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="question-group">
            <h3 className="title">Question Group</h3>
            <ul>
              <li><a href="#0"><i className="fa fa-play"></i>Game 649</a></li>
              <li><a href="#0"><i className="fa fa-play"></i>Game 425</a></li>
              <li><a href="#0"><i className="fa fa-play"></i>Lucky 5</a></li>
              <li><a href="#0"><i className="fa fa-play"></i>Match 4</a></li>
              <li><a href="#0"><i className="fa fa-play"></i>Match 3</a></li>
              <li><a href="#0"><i className="fa fa-play"></i>Match 2</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
        </div>

    </div>
)


export default Faq;