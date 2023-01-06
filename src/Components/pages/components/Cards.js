import React from "react";

function Cards(props) {
    const { title, className, cardBody } = props
    return (
        <div className="col-md-3">
            <div className={className}>
                <div className="card-header">
                    <h3 className="card-title">{title}</h3>

                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse">x
                        </button>
                    </div>
                </div>
                <div className="card-body">
                    {cardBody}
                </div>
            </div>

        </div >

    )
}
export default Cards