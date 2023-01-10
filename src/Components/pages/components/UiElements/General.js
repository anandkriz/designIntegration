import React from 'react'
import { BreadCrumb } from '../../Dashboard2Components/Breadcrumb'
import './General.css'
function General() {
    const ThemeColors = [{ "color": "Primary", "className": "bg-primary" },
    { "color": "Secondary", "className": "bg-secondary" },
    { "color": "Info", "className": "bg-info" },
    { "color": "Success", "className": "bg-success" },
    { "color": "Warning", "className": "bg-warning" },
    { "color": "Danger", "className": "bg-danger" }
    ]
    const BlackWhite = [{ "color": "Black", "className": "bg-black" },
    { "color": "Gray Dark", "className": "bg-gray-dark" },
    { "color": "Gray", "className": "bg-gray" },
    { "color": "Light", "className": "bg-light" },]

    const Colors = [{ "color": "Indigo", "className": "bg-indigo" },
    { "color": "Light-Blue", "className": "bg-lightblue" },
    { "color": "Navy", "className": "bg-navy" },
    { "color": "Purple", "className": "bg-purple" },
    { "color": "Fuchsia", "className": "bg-fuchsia" },
    { "color": "Pink", "className": "bg-pink" },
    { "color": "Maroon", "className": "bg-maroon" },
    { "color": "Orange", "className": "bg-orange" },
    { "color": "Lime", "className": "bg-lime" },
    { "color": "Teal", "className": "bg-teal" },
    { "color": "Olive", "className": "bg-olive" }]

    const AlertsCard = [
        {
            "title": "Alerts", "content": `"Danger alert preview. This alert is dismissable. A wonderful serenity has taken possession of my"
    "entire"
    "soul, like these sweet mornings of spring which I enjoy with my whole heart."` , "className": "danger"
        },
        { "title": "Alerts", "content": "Info alert preview. This alert is dismissable.", "className": "info" },
        { "title": "Alerts", "content": "Warning alert preview. This alert is dismissable.", "className": "warning" },
        { "title": "Alerts", "content": "Success alert preview. This alert is dismissable.", "className": "success" }]

    const calloutsCard = [{
        "title": " I am a Info callout!", "content": `"There is a problem that we need to fix. A wonderful serenity has taken possession of my entire"
        "soul,"
        "like these sweet mornings of spring which I enjoy with my whole heart."`, "className": "info"
    },
    { "title": "I am a warning callout!", "content": "Follow the steps to continue to payment.", "className": "warning" },
    { "title": "I am a success callout!", "content": "This is a yellow callout.", "className": "success" },
    { "title": "I am a danger callout!", "content": "This is a green callout.", "className": "danger" }]

    const prograssiveBar = [{ "title": "40% Complete (success)", "className": "progress", "status": ".progress", "color": "primary" },
    { "title": "20% Complete", "className": "progress progress-sm active", "status": ".progress-sm", "color": "success" },
    { "title": "40% Complete (success)", "className": "progress progress-xs", "status": "progress", "color": "warning" },
    { "title": "40% Complete (success)", "className": "progress progress-xxs", "status": "progress", "color": "danger" },
    ]
    const prograssiveBar2 = [{ "title": "40% Complete (success)", "className": "progress", "color": "primary" },
    { "title": "20% Complete", "className": "progress progress-sm active", "color": "success" },
    { "title": "40% Complete (success)", "className": "progress progress-xs", "color": "warning" },
    { "title": "40% Complete (success)", "className": "progress progress-xxs", "color": "danger" },
    ]

    const accordion = [{ "title": "Collapsible Group Item #1", "content": "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.", "color": "primary", "id": "collapseOne" },
    { "title": "Collapsible Group Danger", "content": "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.", "color": "danger", "id": "collapseTwo" },
    { "title": "Collapsible Group success", "content": "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.", "color": "success", "id": "collapseThree" }
    ]

    const textEmphasis = [{ "classs": "lead", "content": "Lead to emphasize importance" },
    { "classs": "muted", "content": "Text green to emphasize success" },
    { "classs": "text-success", "content": "Lead to emphasize importance" },
    { "classs": "text-info", "content": "Text aqua to emphasize info" },
    { "classs": "text-primary", "content": "Text light blue to emphasize info (2)" },
    { "classs": "text-danger", "content": "Lead to emphasize importance" },
    { "classs": "text-warning", "content": "Lead to emphasize importance" }]

    const blockquote = [{ "title": " Primary Block Quotes", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante." },
    { "title": " Secondary Block Quotes", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante." }]

    const date = [{ "month": "Jan", "year": "2021" }, { "month": "Feb", "year": "2021" }, { "month": "Mar", "year": "2021" }, { "month": "Apr", "year": "2021" }, { "month": "May", "year": "2021" }, { "month": "Jun", "year": "2021" }, { "month": "Jul", "year": "2021" }, { "month": "Aug", "year": "2021" }, { "month": "Sep", "year": "2021" }, { "month": "Oct", "year": "2021" }, { "month": "Nov", "year": "2021" }, { "month": "Dec", "year": "2021" }]

    const discription = {
        "title": "Description",
        "dl_class": "",
        "data": [{ "dt": "Description lists", "dd": "A description list is perfect for defining terms." },
        { "dt": "Euismod lists", "dd": "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit." },
        { "dt": "Malesuada porta", "dd": "Etiam porta sem malesuada magna mollis euismod." }
        ]
    }
    const discriptionHori = {
        "title": "Description Horizontal",
        "dl_class": "row",
        "data": [{ "dt": "Description lists", "dd": "A description list is perfect for defining terms.", "dt_class": "col-sm-4", "dd_class": "col-sm-8" },
        { "dt": "Euismod lists", "dd": "Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.", "dt_class": "col-sm-4", "dd_class": "col-sm-8" },
        { "dt": "Malesuada porta", "dd": "Etiam porta sem malesuada magna mollis euismod.", "dt_class": "col-sm-4", "dd_class": "col-sm-8" }
        ]
    }
    const unorderdList = [{ "li": "Lorem ipsum dolor sit amet", "data": [] },
    { "li": "Consectetur adipiscing elit", "data": [] },
    { "li": "Integer molestie lorem at massa", "data": [] },
    { "li": "Facilisis in pretium nisl aliquet", "data": [] },
    { "li": "Nulla volutpat aliquam velit", "data": ["Phasellus iaculis neque", "Purus sodales ultricies", "Vestibulum laoreet porttitor sem", "Consectetur adipiscing elit"] },
    { "li": "Consectetur adipiscing elit", "data": [] },
    { "li": "Integer molestie lorem at massa", "data": [] },
    { "li": "Facilisis in pretium nisl aliquet", "data": [] }
    ]

    const orderdList = [{ "li": "Lorem ipsum dolor sit amet", "data": [] },
    { "li": "Consectetur adipiscing elit", "data": [] },
    { "li": "Integer molestie lorem at massa", "data": [] },
    { "li": "Facilisis in pretium nisl aliquet", "data": [] },
    { "li": "Nulla volutpat aliquam velit", "data": ["Phasellus iaculis neque", "Purus sodales ultricies", "Vestibulum laoreet porttitor sem", "Consectetur adipiscing elit"] },
    { "li": "Consectetur adipiscing elit", "data": [] },
    { "li": "Integer molestie lorem at massa", "data": [] },
    { "li": "Facilisis in pretium nisl aliquet", "data": [] }
    ]

    return (
        <div className='content-wrapper'>
            <BreadCrumb heading="General" />
            <section class="content">
                <div class="container-fluid">
                    <div class="card card-default color-palette-box">
                        <CardTitle title="Color Palette" />
                        <div class="card-body">
                            <div class="col-12">
                                <h5>Theme Colors</h5>
                            </div>
                            {/* <!-- /.col-12 --> */}
                            <div class="row">
                                {ThemeColors.map(({ color, className }) =>
                                    <ColorCard color={color} className={className} />
                                )}
                            </div>
                            <div class="col-12">
                                <h5 class="mt-3">Black/White Nuances</h5>
                            </div>
                            <div class="row">
                                {BlackWhite.map(({ color, className }) =>
                                    <ColorCard color={color} className={className} />
                                )}
                            </div>
                            <div class="col-12">
                                <h5 class="mt-3">Colors</h5>
                            </div>
                            <div class="row">
                                {Colors.map(({ color, className }) =>
                                    <ColorCard color={color} className={className} />
                                )}
                            </div>
                        </div>
                    </div>

                    <h5 class="mt-4 mb-2">Alerts and Callouts</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card card-default">
                                <CardTitle title="Alerts" />
                                {/* <!-- /.card-header --> */}
                                <div class="card-body">
                                    {
                                        AlertsCard.map(({ title, content, className }) =>
                                            <AlertCard title={title} content={content} className={className} />
                                        )
                                    }
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card card-default">
                                <CardTitle title="Callouts" />
                                {/* <!-- /.card-header --> */}
                                <div class="card-body">
                                    {
                                        calloutsCard.map(({ title, content, className }) =>
                                            <CalloutsCard title={title} content={content} className={className} />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <h5 class="mt-4 mb-2">Tabs in Cards</h5>

                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header d-flex p-0">
                                    <h3 class="card-title p-3">Tabs</h3>
                                    <ul class="nav nav-pills ml-auto p-2">
                                        <li class="nav-item">
                                            <a
                                                class="nav-link active"
                                                href="#tab_1"
                                                data-toggle="tab"
                                            >Tab 1</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#tab_2" data-toggle="tab"
                                            >Tab 2</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="#tab_3" data-toggle="tab"
                                            >Tab 3</a>
                                        </li>
                                        <li class="nav-item dropdown">
                                            <a
                                                class="nav-link dropdown-toggle"
                                                data-toggle="dropdown"
                                                href="#"
                                            >
                                                Dropdown <span class="caret"></span>
                                            </a>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" tabindex="-1" href="#"
                                                >Action</a>
                                                <a class="dropdown-item" tabindex="-1" href="#"
                                                >Another action</a>
                                                <a class="dropdown-item" tabindex="-1" href="#"
                                                >Something else here</a>
                                                <div class="dropdown-divider"></div>
                                                <a class="dropdown-item" tabindex="-1" href="#"
                                                >Separated link</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                <div class="card-body">
                                    <div class="tab-content">
                                        <div class="tab-pane active" id="tab_1">
                                            A wonderful serenity has taken possession of my entire
                                            soul, like these sweet mornings of spring which I enjoy
                                        </div>

                                        <div class="tab-pane" id="tab_2">
                                            The European languages are members of the same family.
                                            Their separate existence is a myth. For science, music,
                                        </div>

                                        <div class="tab-pane" id="tab_3">
                                            Lorem Ipsum is simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever since the 1500s,
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                    <h5 class="mt-4 mb-2">Progress Bars</h5>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="card">
                                <CardTitle title="Progress Bars Different Sizes" />
                                {/* <!-- /.card-header --> */}
                                <div class="card-body">
                                    {
                                        prograssiveBar.map(({ title, className, color, status }) =>
                                            <PrograssiveBar title={title} status={status} className={className} color={color} />
                                        )
                                    }

                                </div>

                            </div>

                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <CardTitle title="Progress Bars" />
                                {/* <!-- /.card-header --> */}
                                <div class="card-body">
                                    {
                                        prograssiveBar2.map(({ title, className, color, status }) =>
                                            <PrograssiveBar title={title} status={status} className={className} color={color} />
                                        )
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 class="mt-4 mb-2">Bootstrap Accordion & Carousel</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card">
                                <CardTitle title="Collapsible Accordion" />

                                <div class="card-body">
                                    <div id="accordion">
                                        {accordion.map(({ title, color, content, id }) =>
                                            <Accordion title={title} content={content} color={color} id={id} />
                                        )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card">
                                <CardTitle title="Carousel" />


                                <div class="card-body">
                                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <img class="d-block w-100" src="https://placehold.it/900x500/39CCCC/ffffff&text=I+Love+Bootstrap" alt="First slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="https://placehold.it/900x500/3c8dbc/ffffff&text=I+Love+Bootstrap" alt="Second slide" />
                                            </div>
                                            <div class="carousel-item">
                                                <img class="d-block w-100" src="https://placehold.it/900x500/f39c12/ffffff&text=I+Love+Bootstrap" alt="Third slide" />
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                            <span class="carousel-control-custom-icon" aria-hidden="true">
                                                <i class="fas fa-chevron-left"></i>
                                            </span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                            <span class="carousel-control-custom-icon" aria-hidden="true">
                                                <i class="fas fa-chevron-right"></i>
                                            </span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                    </div>
                                </div>
                                {/* <!-- /.card-body --> */}
                            </div>
                            {/* <!-- /.card --> */}
                        </div>
                    </div>
                    <h5 class="mt-4 mb-2">Typography</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card">
                                <CardTitle title="Headlines" />
                                <div class="card-body">
                                    <h1>h1. Bootstrap heading</h1>
                                    <h2>h2. Bootstrap heading</h2>
                                    <h3>h3. Bootstrap heading</h3>
                                    <h4>h4. Bootstrap heading</h4>
                                    <h5>h5. Bootstrap heading</h5>
                                    <h6>h6. Bootstrap heading</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <CardTitle title="Text Emphasis" />
                                <div class="card-body">
                                    {textEmphasis.map(({ classs, content }) =>
                                        <p class={classs}>{content}</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">

                        {blockquote.map(({ title, content }) =>
                            <BlockQuotes title={title} content={content} />
                        )
                        }

                        {/* <!-- ./col --> */}
                    </div>
                    <div class="row">
                        <div class="col-md-4">
                            <div class="card">
                                <CardTitle title="Unordered List" />
                                {/* <!-- /.card-header --> */}
                                <div class="card-body">
                                    <ul>
                                        {
                                            unorderdList.map(({ li, data }, index) => {
                                                return <li key={index}>{li}
                                                    {data.map((item) => <><ul>
                                                        <li>{item}</li>
                                                    </ul></>)}
                                                </li>
                                            }
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card">
                                <CardTitle title="ordered List" />
                                {/* <!-- /.card-header --> */}
                                <div class="card-body">
                                    <ol>
                                        {
                                            orderdList.map(({ li, data }, index) => {
                                                return <li key={index}>{li}
                                                    {data.map((item, i) => <><ol>
                                                        <li key={i}>{item}</li>
                                                    </ol></>)}
                                                </li>
                                            }
                                            )
                                        }
                                    </ol>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="card">
                                <CardTitle title="ordered List" />
                                {/* <!-- /.card-header --> */}
                                <div class="card-body">
                                    <ul>
                                        {
                                            orderdList.map(({ li, data }, index) => {
                                                return <li key={index}>{li}
                                                    {data.map((item, i) => <><ol>
                                                        <li key={i}>{item}</li>
                                                    </ol></>)}
                                                </li>
                                            }
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <Discription title={discription.title} data={discription.data} />
                        <Discription title={discriptionHori.title} dl_class={discriptionHori.dl_class} data={discriptionHori.data} />
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <CardTitle title="Pagination Month" />
                                <div class="card-body">

                                    <ul class="pagination pagination-month justify-content-center">
                                        <li class="page-item"><a class="page-link" href="#">«</a></li>
                                        {date.map(({ month, year }) =>
                                            <li class="page-item">
                                                <a class="page-link" href="#">
                                                    <p class="page-month">{month}</p>
                                                    <p class="page-year">{year}</p>
                                                </a>
                                            </li>
                                        )}

                                        <li class="page-item"><a class="page-link" href="#">»</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}
const List = () => {
    return (
        <div class="col-md-4">
            <div class="card">
                <CardTitle title="Unordered List" />
                {/* <!-- /.card-header --> */}
                <div class="card-body">
                    <ul>
                        <li>Lorem ipsum dolor sit amet</li>
                        <ul>
                            <li>Phasellus iaculis neque</li>
                        </ul>

                    </ul>
                </div>
            </div>
        </div>
    )
}
const Discription = (props) => {
    const { dl_class, title, data } = props
    return (
        <div class="col-md-6">
            <div class="card">
                <CardTitle title={title} />
                <div class="card-body">
                    <dl className={dl_class}>
                        {data.map(({ dd, dt, dt_class, dd_class }) =>
                            <>
                                <dt className={dt_class}>{dt}</dt>
                                <dd className={dd_class}>{dd}</dd></>
                        )}
                    </dl>
                </div>
            </div>
        </div>
    )
}
const BlockQuotes = (props) => {
    const { title, content } = props
    return (
        <div class="col-md-6">
            <div class="card">
                <CardTitle title={title} />
                <div class="card-body">
                    <blockquote>
                        <p>{content}</p>
                        <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
                    </blockquote>
                </div>
            </div>
        </div>
    )
}
const Accordion = (props) => {
    const { color, title, content, id } = props
    return (
        <div class={`card card-${color}`}>
            <div class="card-header">
                <h4 class="card-title w-100">
                    <a class="d-block w-100" data-toggle="collapse" href={`#${id}`}>
                        {title}
                    </a>
                </h4>
            </div>
            <div id={id} class="collapse show" data-parent="#accordion">
                <div class="card-body">
                    {content}
                </div>
            </div>
        </div >
    )
}

const PrograssiveBar = (props) => {
    const { title, aria_valuenow, status, className, color } = props
    return (
        <>
            <p><code>{status}</code></p>
            <div class={className}>
                <div class={`progress-bar bg-${color} progress-bar-striped`} role="progressbar"
                    aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{ width: "40%" }}>
                    <span class="sr-only">{title}</span>
                </div>
            </div>
        </>
    )
}
export const CardTitle = (props) => {
    const { title } = props
    return (
        <div class="card-header">
            <h3 class="card-title">
                <i class="fas fa-exclamation-triangle"></i>
                {title}
            </h3>
        </div>
    )
}
const ColorCard = (props) => {
    const { color, className } = props
    return (
        <div class="col-sm-4 col-md-2">
            <h4 class={`text-center ${className}`}>{color}</h4>

            <div class="color-palette-set">
                <div class={`${className} color-palette`}><span>#007bff</span></div>
                <div class={`${className} disabled color-palette`}><span>Disabled</span></div>
            </div>
        </div>
    )
}

const AlertCard = (props) => {
    const { title, content, className } = props
    return (
        <div class={`alert alert-${className} alert-dismissible`}>
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h5><i class="icon fas fa-ban"></i> {title}</h5>
            {content}
        </div>
    )
}

const CalloutsCard = (props) => {
    const { title, className, content } = props
    return (
        <div class={`callout callout-${className}`}>
            <h5>{title}</h5>

            <p>{content}</p>
        </div>
    )
}
export default General