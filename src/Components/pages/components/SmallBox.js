import React from "react";

function SmallBox(props) {
    const { title, Number, className, overlay } = props
    return (
        < div className="col-lg-3 col-6" >
            {/* <!-- small card --> */}
            < div className={className} >
                <div className={overlay}>
                    <i className="fas fa-3x fa-sync-alt"></i>
                </div>
                <div className="inner">
                    <h3>{Number}</h3>

                    <p>{title}</p>
                </div>
                <div className="icon">
                    <i className="fas fa-shopping-cart"></i>
                </div>
                <a href="#" className="small-box-footer">
                    More info <i className="fas fa-arrow-circle-right"></i>
                </a>
            </div >
        </div >
    )
}
export default SmallBox