import React from "react";

function UserCard2(props) {
    const { img } = props
    const details = [{
        className: "float-right badge bg-primary",
        topic: "Projects",
        count: "32"
    }, {
        className: "float-right badge bg-info",
        topic: "Tasks",
        count: "32"

    }, {
        className: "float-right badge bg-success",
        topic: "Completed Projects",
        count: "32"

    },
    {
        className: "float-right badge bg-danger",
        topic: "Followers",
        count: "32"
    }]
    return (
        <div class="col-md-4">

            <div class="card card-widget widget-user-2">
                {/* <!-- Add the bg color to the header using any of the bg-* classes --> */}
                <div class="widget-user-header bg-warning">
                    <div class="widget-user-image">
                        <img class="img-circle elevation-2" src={img} alt="User Avatar" />
                    </div>
                    {/* <!-- /.widget-user-image --> */}
                    <h3 class="widget-user-username">Nadia Carmichael</h3>
                    <h5 class="widget-user-desc">Lead Developer</h5>
                </div>
                <div class="card-footer p-0">
                    <ul class="nav flex-column">
                        {details.map(({ className, topic, count }) =>
                            <UserCard2List className={className} topic={topic} count={count} />
                        )
                        }
                        {/* <UserCard2List className="float-right badge bg-primary" topic={"Projects"} count={"31"} />
                        <UserCard2List className={"float-right badge bg-info"} topic={"Tasks"} count={"3"} />
                        <UserCard2List className={"float-right badge bg-success"} topic={"Completed Projects"} count={"5"} />
                        <UserCard2List className={"float-right badge bg-danger"} topic={"Followers"} count={"44"} /> */}

                    </ul>
                </div>
            </div>
        </div>
    )
}
export const UserCard2List = (props) => {
    const { topic, count, className } = props
    return (
        <li class="nav-item">
            <a class="nav-link">
                {topic} <span class={className}>{count}</span>
            </a>


        </li>
    )
}
export default UserCard2