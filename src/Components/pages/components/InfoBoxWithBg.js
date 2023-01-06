import React from "react";

function InfoBoxWithBg(props) {
    const { className, title, description, boxNum } = props
    return (
        <div className="col-md-3 col-sm-6 col-12">
            <div className={className}>
                <span className="info-box-icon"><i class="far fa-bookmark"></i></span>

                <div className="info-box-content">
                    <span className="info-box-text">{title}</span>
                    <span className="info-box-number">{boxNum}</span>

                    <div className="progress">
                        <div className="progress-bar" style={{ width: "70%" }}></div>
                    </div>
                    <span className="progress-description">
                        {description}
                    </span>
                </div>
            </div>
        </div>
    )
}
export default InfoBoxWithBg