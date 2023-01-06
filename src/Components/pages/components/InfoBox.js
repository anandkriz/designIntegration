import React from "react";

function InfoBox(props) {
    const { title, count, className } = props
    return (
        <div className="col-md-3 col-sm-6 col-12">
            <div className="info-box">
                <span className={className}><i class="far fa-envelope"></i></span>

                <div className="info-box-content">
                    <span className="info-box-text">{title}</span>
                    <span className="info-box-number">{count}</span>
                </div>

            </div>

        </div>
    )
}

export default InfoBox