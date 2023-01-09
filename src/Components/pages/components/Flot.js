import React from 'react'
import { BreadCrumb } from '../Dashboard2Components/Breadcrumb'
function Flot() {
    return (
        <div class="content-wrapper">
            <BreadCrumb heading="Flot" />
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <CardBody title="Interactive Area Chart" on="on" off="off" realTime="Real Time" buttonClass="btn btn-default btn-sm" />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <CardBody title=" Line Chart" />
                            <CardBody title=" Area Chart" />
                        </div>
                        <div class="col-md-6">
                            <CardBody title=" Bar Chart" />
                            <CardBody title=" Donut Chart" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const CardBody = (props) => {
    const { title, realTime, on, off } = props
    return (
        <div class="card card-primary card-outline">
            <div class="card-header">
                <h3 class="card-title">
                    <i class="far fa-chart-bar"></i>
                    {title}
                </h3>

                <div class="card-tools">
                    {realTime}
                    <button type="button" class="btn btn-tool" data-card-widget="collapse">
                        {on}<i class="fas fa-minus"></i>
                    </button>
                    <button type="button" class="btn btn-tool" data-card-widget="remove">
                        {off} <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>
            <div class="card-body">
                <div id="line-chart" style={{ height: "300px" }}></div>
            </div>
        </div>
    )
}
export default Flot