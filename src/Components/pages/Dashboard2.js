import React from "react";
import { CardBodyV1 } from "./Dashboard2Components/ CardBodyV1";
import { BreadCrumb } from "./Dashboard2Components/Breadcrumb";
import { ProductListV1 } from "./Dashboard2Components/ProductListV1";
import AdminLte from '../images/AdminLTELogo.png'
import { OnlineStore } from "./Dashboard2Components/OnlineStore";

function Dashboard() {

    return (

        <div class="content-wrapper">

            <BreadCrumb heading="Dashboard v2" />

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-6">
                            <CardBodyV1 title="Online Store Visitors"
                                report="View Report" count="820"
                                message="Visitors Over Time" percent="12.5%"
                                slweek="Since lastweek" Tweek="This Week" lweek="Last Week" />

                            <ProductListV1 img={AdminLte} />

                        </div>

                        <div class="col-lg-6">
                            <CardBodyV1 title="Sales"
                                report="View Report" count="$18,230.00"
                                message="Sales Over Time" percent="33.1%"
                                slweek="Since last month" Tweek="This year" lweek="Last year" />
                            <OnlineStore />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dashboard