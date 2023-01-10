import React from 'react'
import { BreadCrumb } from '../../Dashboard2Components/Breadcrumb'
import { CardTitle } from './General'
import {
    ButtonGradientJson,
    ButtonJson,
    ButtonOutlineJson,
    ButtonIcons,
    ButtonBlock,
    horizontalButton,
    sliptButtons, applicationButtons, verticalButton, radioButtonGrp
} from './ButtonsJson'

function Buttons() {
    console.log(ButtonIcons)
    return (
        <div class="content-wrapper">
            <BreadCrumb heading="Buttons" />
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <ButtonStyle title={ButtonJson.title} data={ButtonJson.data} />
                    </div>
                    <div class="row">
                        <ButtonStyle title={ButtonOutlineJson.title} data={ButtonOutlineJson.data} />
                    </div>
                    <div class="row">
                        <ButtonStyle title={ButtonGradientJson.title} data={ButtonGradientJson.data} />
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <ButtonsIcons data={ButtonIcons} />
                            <BlockButtons data={ButtonBlock} />
                            <HorizontalButton classname={horizontalButton} />
                            <div class="card">
                                <CardTitle title="Appended Buttons" />
                                <div class="card-body">
                                    <AppendDropdown />
                                    <NormalInput />
                                    <Flat />
                                </div>
                            </div>
                            <div class="card">
                                <CardTitle title="Split buttons" />
                                <div class="card-body">
                                    <SplitButton data={sliptButtons} />
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <CardTitle title="Application Buttons" />
                                <div class="card-body">
                                    <ApplicationButtons data={applicationButtons} />
                                </div>
                            </div>
                            <div class="card">
                                <CardTitle title="Vertical Button Group" />
                                <div class="card-body table-responsive pad">
                                    <p>
                                        Vertical button groups are easy to create with bootstrap. Just add your buttons
                                        inside <code>&lt;div class="btn-group-vertical"&gt;&lt;/div&gt;</code>
                                    </p>

                                    <table class="table table-bordered">
                                        <tr>
                                            <th>Button</th>
                                            <th>Icons</th>
                                            <th>Flat</th>
                                            <th>Dropdown</th>
                                        </tr>
                                        <VerticalButton data={verticalButton} />
                                    </table>
                                </div>

                            </div>

                            <div class="card">
                                <CardTitle title="Radio Button Group" />
                                <div class="card-body table-responsive pad">
                                    <RadioButtonGrp data={radioButtonGrp} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}


const ButtonStyle = (props) => {
    const { title, data } = props
    return (
        <div class="col-md-12">
            <div class="card card-primary card-outline">
                <CardTitle title={title} />
                <div class="card-body pad table-responsive">
                    <p>Various types of buttons. Using the base class <code>.btn</code></p>
                    <table class="table table-bordered text-center">
                        <tr>
                            <th>Normal</th>
                            <th>Large <code>.btn-lg</code></th>
                            <th>Small <code>.btn-sm</code></th>
                            <th>Extra Small <code>.btn-xs</code></th>
                            <th>Flat <code>.btn-flat</code></th>
                            <th>Disabled <code>.disabled</code></th>
                        </tr>
                        {data.map(({ normal, large, small, extra_small, flat, disabled, title }) =>
                            <tr>
                                <td>
                                    <button type="button" class={normal}>{title}</button>
                                </td>
                                <td>
                                    <button type="button" class={large}>{title}</button>
                                </td>
                                <td>
                                    <button type="button" class={small}>{title}</button>
                                </td>
                                <td>
                                    <button type="button" class={extra_small}>{title}</button>
                                </td>
                                <td>
                                    <button type="button" class={flat}>{title}</button>
                                </td>
                                <td>
                                    <button type="button" class={disabled}>{title}</button>
                                </td>
                            </tr>
                        )

                        }

                    </table>
                </div>

            </div>
        </div>
    )
}

const ButtonsIcons = (props) => {
    const { data } = props
    return (
        <div class="card">
            <CardTitle title="Buttons with Icons" />
            <div class="card-body row">
                {
                    Object.keys(data).map((item) =>
                        <div class="col-md-6">
                            {
                                data[item].map(({ title, className }) =>
                                    <button type="button" class={className}><i class="fa fa-bell"></i> {title}</button>
                                )
                            }

                        </div>
                    )
                }

            </div>
        </div>

    )
}

const BlockButtons = (props) => {
    const { data } = props
    return (
        <div class="card">
            <CardTitle title="Block Buttons" />
            <div class="card-body">

                {
                    data.normal.map(({ title, className }) =>
                        <button type="button" class={className}>{title}</button>
                    )
                }

            </div>
        </div>
    )
}

const HorizontalButton = (props) => {
    const { classname } = props
    return (
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">Horizontal Button Group</h3>
            </div>
            <div class="card-body table-responsive pad">
                <p>
                    Horizontal button groups are easy to create with bootstrap. Just add your buttons
                    inside <code>&lt;div class="btn-group"&gt;&lt;/div&gt;</code>
                </p>

                <table class="table table-bordered">
                    <tr>
                        <th>Button</th>
                        <th>Icons</th>
                        <th>Flat</th>
                        <th>Dropdown</th>
                    </tr>
                    {
                        classname.map(({ className }) =>
                            <tr>
                                <td>
                                    <div class="btn-group">
                                        <button type="button" class={`btn btn-${className}`}>Left</button>
                                        <button type="button" class={`btn btn-${className}`}>Middle</button>
                                        <button type="button" class={`btn btn-${className}`}>Right</button>
                                    </div>
                                </td>
                                <td>
                                    <div class="btn-group">
                                        <button type="button" class={`btn btn-${className}`}>
                                            1<i class="fas fa-align-left"></i>
                                        </button>
                                        <button type="button" class={`btn btn-${className}`}>
                                            2<i class="fas fa-align-center"></i>
                                        </button>
                                        <button type="button" class={`btn btn-${className}`}>
                                            3<i class="fas fa-align-right"></i>
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <div class="btn-group">
                                        <button type="button" class={`btn btn-${className} btn-flat`}>
                                            1<i class="fas fa-align-left"></i>
                                        </button>
                                        <button type="button" class={`btn btn-${className} btn-flat`}>
                                            2<i class="fas fa-align-center"></i>
                                        </button>
                                        <button type="button" class={`btn btn-${className} btn-flat`}>
                                            3 <i class="fas fa-align-right"></i>
                                        </button>
                                    </div>
                                </td>
                                <td>
                                    <div class="btn-group">
                                        <button type="button" class={`btn btn-${className}`}>1</button>
                                        <button type="button" class={`btn btn-${className}`}>2</button>

                                        <div class="btn-group">
                                            <button type="button" class={`btn btn-${className} dropdown-toggle dropdown-icon`} data-toggle="dropdown">
                                            </button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="#">Dropdown link</a>
                                                <a class="dropdown-item" href="#">Dropdown link</a>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    }
                </table>
            </div>
        </div>
    )
}

const AppendDropdown = () => {
    return (
        <> <strong>With dropdown</strong>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        Action
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>
                <input type="text" class="form-control" />
            </div></>
    )
}
const NormalInput = () => {
    return (
        <><strong>Normal</strong>
            <div class="input-group mb-3">
                <div class="input-group-prepend">
                    <button type="button" class="btn btn-danger">Action</button>
                </div>
                <input type="text" class="form-control" />
            </div></>
    )
}
const Flat = () => {
    return (
        <>
            <strong>Flat</strong>
            <div class="input-group mb-3">
                <input type="text" class="form-control rounded-0" />
                <span class="input-group-append">
                    <button type="button" class="btn btn-info btn-flat">Go!</button>
                </span>
            </div></>
    )
}
const SplitButton = (props) => {
    const { data } = props
    return (
        Object.keys(data).map((item) => {
            return (<> <p class="mb-1">{data[item].title}</p>
                <div class="margin">
                    {
                        data[item].data.map(({ class_name, hover }) => {
                            return (
                                <div class="btn-group">
                                    <button type="button" class={`btn ${class_name}`}>Action</button>
                                    <button type="button" class={`btn ${class_name} dropdown-toggle ${hover} dropdown-icon`} data-toggle="dropdown">
                                        <span class="sr-only">Toggle Dropdown</span>
                                    </button>
                                    <div class="dropdown-menu" role="menu">
                                        <a class="dropdown-item" href="#">Action</a>
                                        <a class="dropdown-item" href="#">Another action</a>
                                        <a class="dropdown-item" href="#">Something else here</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="#">Separated link</a>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </>
            )
        }
        )
    )
}
const ApplicationButtons = (props) => {
    const { data } = props
    return (
        Object.keys(data).map((item) => {
            return (
                <>
                    <p>{data[item].title}</p>
                    {data[item].data.map(({ a_tag_class, span_class, span_title, title }) =>
                        <a class={`btn btn-app ${a_tag_class}`}>
                            <span class={span_class}>{span_title}</span>
                            <i class="fas fa-bullhorn"></i> {title}
                        </a>
                    )}
                </>
            )
        }
        )
    )
}

const VerticalButton = (props) => {
    const { data } = props
    return (
        <>
            {
                data.map(({ className }) =>
                    <tr>
                        <td>
                            <div class="btn-group-vertical">
                                <button type="button" class={`btn btn-${className}`}>Top</button>
                                <button type="button" class={`btn btn-${className}`}>Middle</button>
                                <button type="button" class={`btn btn-${className}`}>Bottom</button>
                            </div>
                        </td>
                        <td>
                            <div class="btn-group-vertical">
                                <button type="button" class={`btn btn-${className}`}>
                                    <i class="fas fa-align-left"></i>1
                                </button>
                                <button type="button" class={`btn btn-${className}`}>
                                    <i class="fas fa-align-center"></i>2
                                </button>
                                <button type="button" class={`btn btn-${className}`}>
                                    <i class="fas fa-align-right"></i>3
                                </button>
                            </div>
                        </td>
                        <td>
                            <div class="btn-group-vertical">
                                <button type="button" class={`btn btn-${className} btn-flat`}>
                                    <i class="fas fa-align-left"></i>1
                                </button>
                                <button type="button" class={`btn btn-${className} btn-flat`}>
                                    <i class="fas fa-align-center"></i>2
                                </button>
                                <button type="button" class={`btn btn-${className} btn-flat`}>
                                    <i class="fas fa-align-right"></i>3
                                </button>
                            </div>
                        </td>
                        <td>
                            <div class="btn-group-vertical">
                                <button type="button" class={`btn btn-${className}`}>1</button>
                                <button type="button" class={`btn btn-${className}`}>2</button>

                                <div class="btn-group">
                                    <button type="button" class={`btn btn-${className} dropdown-toggle`} data-toggle="dropdown">
                                    </button>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                                        <li><a class="dropdown-item" href="#">Dropdown link</a></li>
                                    </ul>
                                </div>
                            </div>
                        </td>
                    </tr>
                )
            }
        </>

    )
}

const RadioButtonGrp = (props) => {
    const { data } = props
    return (
        Object.keys(data).map((item) => {

            return (
                <>
                    <p class="mb-1">{data[item].title}</p>
                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                        {data[item].data.map(({ class_name, id }) =>
                            <label class={`btn ${class_name}`}>
                                <input type="radio" name="options" id={id} autocomplete="off" /> Radio
                            </label>
                        )
                        }

                    </div>
                </>
            )
        }

        )

    )
}
export default Buttons