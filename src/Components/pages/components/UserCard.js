import React from "react";

function UserCard(props) {
    const { name, designation, className, img, DivClass } = props
    return (

        <div class="col-md-4">
            <div class={`card card-widget widget-user ${DivClass}`}>
                <div class="widget-user-header bg-info"
                // style={style}
                >
                    <h3 className={`widget-user-username ${className}`}>{name}</h3>
                    <h5 className={`widget-user-desc ${className}`}>{designation}</h5>
                </div>
                <div class="widget-user-image">
                    <img className="img-circle elevation-2" src={img} alt="User Avatar" />
                </div>
                <div class="card-footer">
                    <div class="row">
                        <div class="col-sm-4 border-right">
                            <div class="description-block">
                                <h5 class="description-header">3,200</h5>
                                <span class="description-text">SALES</span>
                            </div>
                        </div>
                        <div class="col-sm-4 border-right">
                            <div class="description-block">
                                <h5 class="description-header">13,000</h5>
                                <span class="description-text">FOLLOWERS</span>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="description-block">
                                <h5 class="description-header">35</h5>
                                <span class="description-text">PRODUCTS</span>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default UserCard