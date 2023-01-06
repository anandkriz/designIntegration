import React from "react";
import SmallBox from "./components/SmallBox";
import { BreadCrumb } from "./Dashboard2Components/Breadcrumb";
import DirectChatV from "./DashBoardComponets/DirectChatV";
import ToduList from "./DashBoardComponets/ToduList";


function MainView() {
    return (

        <div class="content-wrapper">

            <BreadCrumb heading="Dashboard" />

            <section class="content">
                <div class="container-fluid">

                    <div class="row">
                        <SmallBox className={"small-box bg-info"} title={"New Orders"} Number={"150"} />
                        <SmallBox className={"small-box bg-success"} title={"Bounce Rate"} Number={"53%"} />
                        <SmallBox className={"small-box bg-warning"} title={"User Registrations"} Number={"44"} />
                        <SmallBox className={"small-box bg-danger"} title={"Unique Visitors"} Number={"65"} />
                    </div>

                    <div class="row">

                        <section class="col-lg-7 connectedSortable">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">
                                        <i class="fas fa-chart-pie mr-1"></i>
                                        Sales
                                    </h3>
                                    <div class="card-tools">
                                        <ul class="nav nav-pills ml-auto">
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link active"
                                                    href="#revenue-chart"
                                                    data-toggle="tab"
                                                >
                                                    Area
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link"
                                                    href="#sales-chart"
                                                    data-toggle="tab"
                                                >
                                                    Donut
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="card-body">
                                    <div class="tab-content p-0">

                                        <div
                                            class="chart tab-pane active"
                                            id="revenue-chart"
                                            style={{ height: "300px", position: "relative" }}
                                        >
                                            <canvas
                                                id="revenue-chart-canvas"
                                                height="300"
                                                style={{ height: "300px" }}
                                            ></canvas>
                                        </div>
                                        <div
                                            class="chart tab-pane"
                                            id="sales-chart"
                                            style={{ height: "300px", position: "relative" }}
                                        >
                                            <canvas
                                                id="sales-chart-canvas"
                                                height="300"
                                                style={{ height: "300px" }}
                                            ></canvas>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <DirectChatV />

                            <ToduList />
                        </section>
                        <section class="col-lg-5 connectedSortable">
                            <div class="card bg-gradient-primary">
                                <div class="card-header border-0">
                                    <h3 class="card-title">
                                        <i class="fas fa-map-marker-alt mr-1"></i>
                                        Visitors
                                    </h3>
                                    <div class="card-tools">
                                        <button
                                            type="button"
                                            class="btn btn-primary btn-sm daterange"
                                            title="Date range"
                                        >
                                            <i class="far fa-calendar-alt"></i>
                                        </button>
                                        <button
                                            type="button"
                                            class="btn btn-primary btn-sm"
                                            data-card-widget="collapse"
                                            title="Collapse"
                                        >
                                            <i class="fas fa-minus"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div id="world-map" style={{ height: "250px", width: "100%" }}></div>
                                </div>
                                <div class="card-footer bg-transparent">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <div id="sparkline-1"></div>
                                            <div class="text-white">Visitors</div>
                                        </div>
                                        <div class="col-4 text-center">
                                            <div id="sparkline-2"></div>
                                            <div class="text-white">Online</div>
                                        </div>
                                        <div class="col-4 text-center">
                                            <div id="sparkline-3"></div>
                                            <div class="text-white">Sales</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card bg-gradient-info">
                                <div class="card-header border-0">
                                    <h3 class="card-title">
                                        <i class="fas fa-th mr-1"></i>
                                        Sales Graph
                                    </h3>

                                    <div class="card-tools">
                                        <button
                                            type="button"
                                            class="btn bg-info btn-sm"
                                            data-card-widget="collapse"
                                        >
                                            <i class="fas fa-minus"></i>
                                        </button>
                                        <button
                                            type="button"
                                            class="btn bg-info btn-sm"
                                            data-card-widget="remove"
                                        >
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <canvas
                                        class="chart"
                                        id="line-chart"
                                        style={{
                                            minHeight: "250px",
                                            height: "250px",
                                            maxHeight: "250px",
                                            maxWidth: "100%"
                                        }}
                                    ></canvas>
                                </div>
                                <div class="card-footer bg-transparent">
                                    <div class="row">
                                        <div class="col-4 text-center">
                                            <input
                                                type="text"
                                                class="knob"
                                                data-readonly="true"
                                                value="20"
                                                data-width="60"
                                                data-height="60"
                                                data-fgColor="#39CCCC"
                                            />

                                            <div class="text-white">Mail-Orders</div>
                                        </div>
                                        <div class="col-4 text-center">
                                            <input
                                                type="text"
                                                class="knob"
                                                data-readonly="true"
                                                value="50"
                                                data-width="60"
                                                data-height="60"
                                                data-fgColor="#39CCCC"
                                            />

                                            <div class="text-white">Online</div>
                                        </div>
                                        <div class="col-4 text-center">
                                            <input
                                                type="text"
                                                class="knob"
                                                data-readonly="true"
                                                value="30"
                                                data-width="60"
                                                data-height="60"
                                                data-fgColor="#39CCCC"
                                            />

                                            <div class="text-white">In-Store</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card bg-gradient-success">
                                <div class="card-header border-0">
                                    <h3 class="card-title">
                                        <i class="far fa-calendar-alt"></i>
                                        Calendar
                                    </h3>

                                    <div class="card-tools">

                                        <div class="btn-group">sf
                                            <button
                                                type="button"
                                                class="btn btn-success btn-sm dropdown-toggle"
                                                data-toggle="dropdown"
                                                data-offset="-52"
                                            >
                                                <i class="fas fa-bars"></i>
                                            </button>
                                            <div class="dropdown-menu" role="menu">
                                                <a href="#" class="dropdown-item">
                                                    Add new event
                                                </a>
                                                <a href="#" class="dropdown-item">
                                                    Clear events
                                                </a>
                                                <div class="dropdown-divider"></div>
                                                <a href="#" class="dropdown-item">
                                                    View calendar
                                                </a>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            class="btn btn-success btn-sm"
                                            data-card-widget="collapse"
                                        >
                                            <i class="fas fa-minus"></i>
                                        </button>
                                        <button
                                            type="button"
                                            class="btn btn-success btn-sm"
                                            data-card-widget="remove"
                                        >
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="card-body pt-0">
                                    <div id="calendar"></div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default MainView;
