import React from "react";
import InfoBox from "./components/InfoBox";
import AdminLTELogo from '../images/AdminLTELogo.png'
import InfoBoxWithBg from "./components/InfoBoxWithBg";
import SmallBox from "./components/SmallBox";
import Cards from "./components/Cards";
import DirectChat from "./components/DirectChat";
import UserCard from "./components/UserCard";
import UserCard2 from "./components/UserCard2";
import UserTimeLine from "./components/UserTimeLine";
import { UserTimeLine2 } from "./components/UserTimeLine2";
import Photo1 from '../images/photo1.png'
import Photo2 from '../images/photo2.png'
import Photo3 from '../images/photo3.jpg'
import { CardBody } from "./components/CardBody";
import { BreadCrumb } from "./Dashboard2Components/Breadcrumb";



function Widgets() {
    return (

        <div class="content-wrapper">
            <BreadCrumb heading="Widgets" />
            {/* <!-- Main content --> */}
            <section class="content">
                <div class="container-fluid">
                    <h5 class="mb-2">Info Box</h5>
                    <div class="row">
                        <InfoBox title={"Messages"} count={"1,410"} className={"info-box-icon bg-info"} />
                        <InfoBox title={"Bookmarks"} count={"410"} className={"info-box-icon bg-success"} />
                        <InfoBox title={"Uploads"} count={"1,4103"} className={"info-box-icon bg-warning"} />
                        <InfoBox title={"Likes"} count={"1,4130"} className={"info-box-icon bg-danger"} />
                    </div>

                    {/* <!-- =========================================================== --> */}
                    <h5 class="mb-2">Info Box With Custom Shadows <small><i>Using Bootstrap's Shadow Utility</i></small></h5>
                    <div class="row">
                        <InfoBox title={"Shadows"} count={"None"} className={"info-box-icon bg-info"} />
                        <InfoBox title={"Shadows"} count={"Small"} className={"info-box-icon bg-success"} />
                        <InfoBox title={"Shadows"} count={"Regular"} className={"info-box-icon bg-warning"} />
                        <InfoBox title={"Shadows"} count={"Large"} className={"info-box-icon bg-danger"} />
                    </div>

                    {/* <!-- =========================================================== --> */}
                    <h5 class="mt-4 mb-2">Info Box With <code>bg-*</code></h5>
                    <div class="row">
                        <InfoBoxWithBg className={"info-box bg-info"}
                            description={"70% Increase in 30 Days"} title={"Bookmarks"} boxNum={"41,410"} />
                        <InfoBoxWithBg className={"info-box bg-success"}
                            description={"70% Increase in 30 Days"} title={"Likes"} boxNum={"41,410"} />
                        <InfoBoxWithBg className={"info-box bg-warning"}
                            description={"70% Increase in 30 Days"} title={"Events"} boxNum={"41,410"} />
                        <InfoBoxWithBg className={"info-box bg-danger"}
                            description={"70% Increase in 30 Days"} title={"Comments"} boxNum={"41,410"} />

                    </div>
                    <h5 class="mt-4 mb-2">Info Box With <code>bg-gradient-*</code></h5>
                    <div class="row">
                        <InfoBoxWithBg className={"info-box bg-info"}
                            description={"70% Increase in 30 Days"} title={"Bookmarks"} boxNum={"41,410"} />
                        <InfoBoxWithBg className={"info-box bg-success"}
                            description={"70% Increase in 30 Days"} title={"Likes"} boxNum={"41,410"} />
                        <InfoBoxWithBg className={"info-box bg-warning"}
                            description={"70% Increase in 30 Days"} title={"Events"} boxNum={"41,410"} />
                        <InfoBoxWithBg className={"info-box bg-danger"}
                            description={"70% Increase in 30 Days"} title={"Comments"} boxNum={"41,410"} />
                    </div>
                    <h5 class="mb-2 mt-4">Small Box</h5>
                    <div class="row">
                        <SmallBox className={"small-box bg-info"} title={"New Orders"} Number={"150"} />
                        <SmallBox className={"small-box bg-success"} title={"Bounce Rate"} Number={"53%"} />
                        <SmallBox className={"small-box bg-warning"} title={"User Registrations"} Number={"44"} />
                        <SmallBox className={"small-box bg-danger"} title={"Unique Visitors"} Number={"65"} />
                    </div>

                    <div class="row">
                        <SmallBox className={"small-box bg-info"} title={"New Orders"} Number={"150"} overlay={"overlay"} />
                        <SmallBox className={"small-box bg-success"} title={"Bounce Rate"} Number={"53%"} overlay={"overlay"} />
                    </div>

                    <h4 class="mb-2 mt-4">Cards</h4>
                    <h5 class="mb-2">Abilities</h5>
                    <div class="row">
                        <Cards title={"Expandable"} className={"card card-primary collapsed-card"} cardBody={"The body of the card"} />
                        <Cards title={"Collapsable"} className={"card card-success"} cardBody={"The body of the card"} />
                        <Cards title={"Removable"} className={"card card-warning"} cardBody={"The body of the card"} />
                        <Cards title={"Maximizable"} className={"card card-danger"} cardBody={"The body of the card"} />
                    </div>


                    {/* <!-- =========================================================== --> */}
                    <h5 class="mb-2">Custom Shadows Variations <small><i>Using Bootstrap's Shadow Utility</i></small></h5>
                    <div class="row">
                        <Cards title={"Shadow - None"} className={"card card-primary shadow-none"} cardBody={"The body of the card"} />
                        <Cards title={"Shadow - Small"} className={"card card-success shadow-sm"} cardBody={"The body of the card"} />
                        <Cards title={"Shadow - Regular"} className={"card card-warning shadow"} cardBody={"The body of the card"} />
                        <Cards title={"Shadow - Large"} className={"card card-danger shadow-lg"} cardBody={"The body of the card"} />

                    </div>


                    <h5 class="mb-2">Colors Variations</h5>

                    <div class="row">
                        <Cards title={"Primary"} className={"card card-primary"} cardBody={"The body of the card"} />
                        <Cards title={"Success"} className={"card card-success"} cardBody={"The body of the card"} />
                        <Cards title={"Warning"} className={"card card-warning "} cardBody={"The body of the card"} />
                        <Cards title={"Danger"} className={"card card-danger"} cardBody={"The body of the card"} />
                    </div>
                    {/* <!-- /.row --> */}

                    <div class="row">
                        <Cards title={"Primary Outline"} className={"card card-outline card-primary"} cardBody={"The body of the card"} />
                        <Cards title={"Success Outline"} className={"card card-outline card-success"} cardBody={"The body of the card"} />
                        <Cards title={"Warning Outline"} className={"card card-outline card-warning "} cardBody={"The body of the card"} />
                        <Cards title={"Danger Outline"} className={"card card-outline card-danger"} cardBody={"The body of the card"} />


                    </div>

                    <div class="row">
                        <Cards title={"Primary"} className={"card bg-primary"} cardBody={"The body of the card"} />
                        <Cards title={"Success"} className={"card bg-success"} cardBody={"The body of the card"} />
                        <Cards title={"Warning"} className={"card bg-warning "} cardBody={"The body of the card"} />
                        <Cards title={"Danger"} className={"card bg-danger"} cardBody={"The body of the card"} />


                    </div>
                    <div class="row">
                        <Cards title={"Primary Gradient"} className={"card bg-gradient-primary"} cardBody={"The body of the card"} />
                        <Cards title={"Success Gradient"} className={"card bg-gradient-success"} cardBody={"The body of the card"} />
                        <Cards title={"Warning Gradient"} className={"card bg-gradient-warning "} cardBody={"The body of the card"} />
                        <Cards title={"Danger Gradient"} className={"card bg-gradient-danger"} cardBody={"The body of the card"} />
                    </div>

                    <h4 class="mt-4 mb-2">Direct Chat</h4>
                    <div class="row">
                        <DirectChat className={"card card-primary card-outline direct-chat direct-chat-primary"} src={AdminLTELogo} />
                        <DirectChat className={"card card-success card-outline direct-chat direct-chat-success"} src={AdminLTELogo} />
                        <DirectChat className={"card card-warning direct-chat direct-chat-warning"} src={AdminLTELogo} />
                        <DirectChat className={"card card-danger direct-chat direct-chat-danger"} src={AdminLTELogo} />
                    </div>

                    {/* <!-- =========================================================== --> */}
                    <h5 class="mb-2">Custom Shadows Variations <small><i>Using Bootstrap's Shadow Utility</i></small></h5>
                    <div class="row">
                        <DirectChat className={"card card-primary card-outline direct-chat direct-chat-primary shadow-none"} src={AdminLTELogo} />
                        <DirectChat className={"card card-success card-outline direct-chat direct-chat-success shadow-none"} src={AdminLTELogo} />
                        <DirectChat className={"card card-warning direct-chat direct-chat-warning shadow-none"} src={AdminLTELogo} />
                        <DirectChat className={"card card-danger direct-chat direct-chat-danger shadow-none"} src={AdminLTELogo} />

                    </div>

                    <h3 class="mt-4 mb-4">Social Widgets</h3>

                    <div class="row">
                        <UserCard2 img={AdminLTELogo} />
                        <UserCard name={"Alexander Pierce"} designation={"Founder & CEO"} className={"widget-user-usename"} img={AdminLTELogo} />
                        <UserCard name={"Elizabeth Pierce"} designation={"Web Designer"} className={"text-right"} img={AdminLTELogo} />
                    </div>
                    {/* <!-- /.row --> */}

                    <div class="row">

                        <UserTimeLine photo={Photo2} />
                        <UserTimeLine2 />
                    </div>

                    <h5 class="mb-2">Custom Shadows Variations <small><i>Using Bootstrap's Shadow Utility</i></small></h5>
                    <div class="row">
                        <UserCard2 img={AdminLTELogo} DivClass="shadow-sm" />
                        <UserCard name={"Alexander Pierce"} designation={"Founder & CEO"} className={"widget-user-usename"} img={AdminLTELogo} DivClass="shadow-sm" />
                        <UserCard name={"Elizabeth Pierce"} designation={"Web Designer"} className={"text-right"} img={AdminLTELogo} DivClass="shadow-sm" />
                    </div>

                    <h5 class="mb-2">Card with Image Overlay</h5>
                    <div class="card card-success">
                        <div class="card-body">
                            <div class="row">
                                <CardBody photo={Photo1} className='card-img-overlay d-flex flex-column justify-content-end' />
                                <CardBody photo={Photo2} className='card-img-overlay d-flex flex-column justify-content-center' />
                                <CardBody photo={Photo3} className='card-img-overlay' />
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <a id="back-to-top" href="#" class="btn btn-primary back-to-top" role="button" aria-label="Scroll to top">
                <i class="fas fa-chevron-up"></i>
            </a>
        </div >
    )
}

export default Widgets