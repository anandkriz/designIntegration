import React from 'react'
import { BreadCrumb } from '../Dashboard2Components/Breadcrumb'

function ChartJs() {
    return (
        <div class="content-wrapper">
            <BreadCrumb heading="ChartJs" />
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <Card title="Area Chart" className="primary" />
                            <Card title="Donut Chart" className="danger" />
                            <Card title="Pie Chart" className="danger" />
                        </div>
                        <div class="col-md-6">
                            {/* <!-- LINE CHART --> */}
                            <Card title="Line Chart" className="info" />
                            <Card title="Bar Chart" className="success" />
                            <Card title="Stacked Bar Chart" className="success" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

const Card = (props) => {
    const { title, className } = props
    return (
        <div class={`card card-${className}`}>
            <div class="card-header">
                <h3 class="card-title">{title}</h3>

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
                    <canvas id="areaChart" style={{ minHeight: "250px", height: "250px", maxHeight: "250px", maxWidth: "100%" }}></canvas>
                </div>
            </div>
        </div>
    )
}
export default ChartJs