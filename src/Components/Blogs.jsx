import React from 'react'
import aljazeeraBlog from "../Images/Projects Images/aljazeera_blog.png";
import nykaaBlog from "../Images/Projects Images/nykaa_blog.png";
import loomBlog from "../Images/Projects Images/loom_blog.png";
const Blogs = () => {
    return (
        <div id="blogs" className="blogs">
            <div className="py-5">
                <div className="text-center">
                    <h1>BLOGS</h1>
                </div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="box mt-2 mb-2 d-flex flex-column justify-content-around align-items-center p-2" >
                                <img src={aljazeeraBlog} alt="aljazeera" className="mb-1"/>
                                <button className="mt-2 mb-1 py-2 px-3" onClick={() => window.open("https://sidhant1593.medium.com/project-3-aljazeera-clone-ab2dc92e425f")}>Blog Link</button>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="box mt-2 mb-2 d-flex flex-column justify-content-around align-items-center p-2" >
                                <img src={nykaaBlog} alt="nykaa" className="mb-1"/>
                                <button className="mt-2 mb-1 py-2 px-3" onClick={() => window.open("https://sidhant1593.medium.com/project-2-nykaa-clone-c982680bd38c")}>Blog Link</button>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6">
                            <div className="box mt-2 mb-2 d-flex flex-column justify-content-around align-items-center p-2" >
                                <img src={loomBlog} alt="loom" className="mb-1"/>
                                <button className="mt-2 mb-1 py-2 px-3" onClick={() => window.open("https://sidhant1593.medium.com/project-1-loom-clone-abf47a30583d")}>Blog Link</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
