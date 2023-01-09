import React from 'react'
import { BreadCrumb } from '../Dashboard2Components/Breadcrumb'
function Uplot() {
    return (
        <section class="content-wrapper">
            <BreadCrumb heading="Uplot Charts" />
            <div class="container-fluid">
                {/* <!-- AREA CHART --> */}
                <CardBody heading="Area Chart" className="card card-primary" id="areaChart" />
                <CardBody heading="Line Chart" className="card card-info" id="lineChart" />
            </div>
        </section>
    )
}

const CardBody = (props) => {
    const { heading, className, id } = props
    return (
        <div class={className}>
            <div class="card-header">
                <h3 class="card-title">{heading}</h3>

                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse">
                        <i class="fas fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-tool" data-card-widget="remove">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div class="card-body">
                <div class="chart">
                    <div id={id} style={{ minHeight: "250px", height: "250px", maxHeight: "250px", maxWidth: "100%" }}></div>
                </div>
            </div>
        </div>
    )
}
export default Uplot