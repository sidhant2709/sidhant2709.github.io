import React from 'react'
import javascript from "../Images/Tech Pics/js.svg"
import css from "../Images/Tech Pics/css3.svg";
import html from "../Images/Tech Pics/html-5.svg"
import materialUI from "../Images/Tech Pics/material-ui-1.svg"
import bootstrap from "../Images/Tech Pics/bootstrap-4.svg"
import reactSvg from "../Images/Tech Pics/react1.svg"
import reduxSvg from "../Images/Tech Pics/redux.svg"
import scSvg from "../Images/Tech Pics/style-com.png"
import reactRouterSvg from "../Images/Tech Pics/react-router.svg"
import reactBS from "../Images/Tech Pics/react-bootstrap.svg"
import nodejs from "../Images/Tech Pics/nodejs.svg"
import expressjs from "../Images/Tech Pics/mongodb.svg"
const Tech = () => {
    return (
        <section className="tech-stacks">
            <h1 className="text-center">Tech Skills</h1>
            <div className="container tech-cont">
                <div className="row">
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="card-size text-center">
                            <div className="card-body ">
                                <img className="avatar"
                                    src={javascript}
                                    alt="Bologna"/>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="card-size">
                            <div className="card-body text-center">
                                <img className="avatar"
                                    src={css}
                                    alt="Bologna" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="card-size">
                            <div className="card-body text-center">
                                <img className="avatar"
                                    src={html}
                                    alt="Bologna" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="card-size">
                            <div className="card-body text-center">
                                <img className="avatar"
                                    src={materialUI}
                                    alt="Bologna" />
                            </div>
                        </div>
                    </div>
                   <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="card-size">
                            <div className="card-body text-center">
                                <img className="avatar"
                                    src={bootstrap}
                                    alt="Bologna" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="card-size">
                            <div className="card-body text-center">
                                <img className="avatar"
                                    src={reactSvg}
                                    alt="Bologna" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="card-size">
                            <div className="card-body text-center">
                                <img className="avatar"
                                    src={reduxSvg}
                                    alt="Bologna" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="card-size">
                            <div className="card-body text-center">
                                <img className="avatar"
                                    src={scSvg}
                                    alt="Bologna" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="card-size">
                            <div className="card-body text-center">
                                <img className="avatar"
                                    src={reactRouterSvg}
                                    alt="Bologna" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="card-size">
                            <div className="card-body text-center">
                                <img className="avatar"
                                    src={reactBS}
                                    alt="Bologna" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="card-size">
                            <div className="card-body text-center">
                                <img className="avatar"
                                    src={nodejs}
                                    alt="Bologna" />
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
                        <div className="card-size">
                            <div className="card-body text-center">
                                <img className="avatar"
                                    src={expressjs}
                                    alt="Bologna" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>    
        </section>
    )
}

export default Tech
