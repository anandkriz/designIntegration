import React from 'react'
import { BreadCrumb } from '../Dashboard2Components/Breadcrumb'

function Inline() {
    return (
        <div class="content-wrapper">
            <BreadCrumb heading="Inline" />
            <section class="content">
                <div class="container-fluid">

                    <div class="row">
                        <div class="col-12">

                            <div class="card">
                                <CardHeader header="jQuery Knob" />

                                <div class="card-body">
                                    <div class="row">
                                        <InputField inputTitle="New Visitors" value="30" className="col-6 col-md-3 text-center" />
                                        <InputField inputTitle="Bounce Rate" value="70" className="col-6 col-md-3 text-center" />
                                        <InputField inputTitle="New Visitors" value="-80" className="col-6 col-md-3 text-center" />
                                        <InputField inputTitle="New Visitors" value="40" className="col-6 col-md-3 text-center" />
                                    </div>
                                    <div class="row">
                                        <InputField inputTitle="Bandwidth" value="90" className="col-6 text-center" />
                                        <InputField inputTitle="CPU" value="0" className="col-6 text-center" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <CardHeader header="jQuery Knob Different Sizes" />
                                <div class="card-body">
                                    <div class="row">
                                        <InputField inputTitle="data-width='90'" value="30" className="col-6 col-md-3 text-center" />
                                        <InputField inputTitle="data-width='120'" value="30" className="col-6 col-md-3 text-center" />
                                        <InputField inputTitle="data-thickness='0.1'" value="30" className="col-6 col-md-3 text-center" />
                                        <InputField inputTitle="data-angleArc='250'" value="30" className="col-6 col-md-3 text-center" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <CardHeader header="jQuery Knob Tron Style" />
                                <div class="card-body">
                                    <div class="row">
                                        <InputField inputTitle="data-width='90'" value="80" className="col-6 col-md-3 text-center" />
                                        <InputField inputTitle="data-width='120'" value="60" className="col-6 col-md-3 text-center" />
                                        <InputField inputTitle="data-thickness='0.1'" value="10" className="col-6 col-md-3 text-center" />
                                        <InputField inputTitle="data-angleArc='250'" value="100" className="col-6 col-md-3 text-center" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <CardHeader header="Sparklines" />
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="sparkline-1"></div>
                                        </div>
                                        <div class="col-4 text-center">
                                            <div id="sparkline-2"></div>
                                        </div>
                                        <div class="col-4 text-center">
                                            <div id="sparkline-3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>
        </div>
    )
}
const InputField = (props) => {
    const { inputTitle, value, className } = props
    return (
        <div class={className}>
            <input type="text" class="knob" value={value} data-width="90" data-height="90" data-fgColor="#3c8dbc" />
            <div class="knob-label">{inputTitle}</div>
        </div>
    )
}
const CardHeader = (props) => {
    const { header } = props
    return (
        <div class="card-header">
            <h3 class="card-title">
                <i class="far fa-chart-bar"></i>
                {header}
            </h3>

            <div class="card-tools">
                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
    )
}
export default Inline