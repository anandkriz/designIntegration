import React, { useState } from 'react'
import Select from 'react-select'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateInput } from './DateMask';
import DateTimePicker from 'react-datetime-picker/dist/entry.nostyle';
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import './Stepper.css';




const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla', isdisabled: true },
    { value: 'Alaska', label: 'Alaska' },
    { value: 'California', label: 'California' },
    { value: 'Delaware', label: 'Delaware' },
    { value: 'Tennessee', label: 'Tennessee' },
]


const theme = (theme) => ({
    ...theme,
    borderRadius: 0,
    colors: {
        ...theme.colors,
        primary25: 'hotpink',
        primary: 'gray',
    },
})
const MyComponent = (props) => {
    const { disable, isMulti, className, prefix, defaultDisabled, theme } = props
    return (
        <Select isDisabled={disable} options={options} defaultValue={options[0]} className={className}
            classNamePrefix={prefix} isMulti={isMulti} isOptionDisabled={defaultDisabled} theme={theme} />
    )
}
const DatePiKer = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <DatePicker wrapperClassName={className} selected={startDate} onChange={(date) => setStartDate(date)} />
    );
}
const className = {

    width: "100%"
}

const DateTime = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div>
            <DateTimePicker onChange={onChange} value={value} />
        </div>
    );
}
function AdvancedForm() {

    const [data, setData] = useState(options);
    const [right, setRight] = useState([])
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");


    const handleClick = (i, value) => {
        var remining = data.splice(i, 1);
        setData([...data]);
        right.push(...remining)
        setRight([...right])
    }
    const handleClickRight = (i, value) => {
        var remining = right.splice(i, 1);
        setRight([...right]);
        data.push(...remining)
        setData([...data])
    }
    const handleDataLeft = () => {
        setRight(options)
        setData([])
    }
    const handleDataRight = () => {
        setData(options)
        setRight([])

    }

    const handleChange = () => {
        let classElement1 = document.getElementById('logins-part')
        let classElement2 = document.getElementById('information-part')
        console.log(classElement1)
        if (classElement1.classList.contains('active', 'dstepper-block')) {
            classElement2.classList.add('active', 'dstepper-block')
            classElement1.classList.remove('active', 'dstepper-block')
        } else {
            classElement1.classList.add('active', 'dstepper-block')
            classElement2.classList.remove('active', 'dstepper-block')
        }
    }
    return (
        <div class="content-wrapper">

            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>Advanced Form</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">Advanced Form</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section class="content">
                <div class="container-fluid">

                    <div class="card card-default">
                        <div class="card-header">
                            <h3 class="card-title">Select2 (Default Theme)</h3>

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
                            <div class="row">
                                <div class="col-md-6">

                                    <div class="form-group">
                                        <label>Minimal</label>
                                        <MyComponent />
                                    </div>

                                    <div class="form-group">
                                        <label>Disabled</label>
                                        <MyComponent disable={true} />
                                    </div>

                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Multiple</label>
                                        <MyComponent isMulti={true} className="basic-multi-select" prefix="select" />
                                    </div>

                                    <div class="form-group">
                                        <label>Disabled Result</label>
                                        <MyComponent defaultDisabled={(option) => option.isdisabled} />
                                    </div>

                                </div>

                            </div>


                            <h5>Custom Color Variants</h5>
                            <div class="row">
                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <label>Minimal (.select2-danger)</label>
                                        <MyComponent theme={theme} />
                                    </div>

                                </div>

                                <div class="col-12 col-sm-6">
                                    <div class="form-group">
                                        <label>Multiple (.select2-purple)</label>
                                        <div class="select2-purple">
                                            <MyComponent isMulti={true} className="basic-multi-select" prefix="select" theme={theme} />

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div class="card-footer">
                            Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and information about
                            the plugin.
                        </div>
                    </div>


                    <div class="card card-default">
                        <div class="card-header">
                            <h3 class="card-title">Select2 (Bootstrap4 Theme)</h3>

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
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Minimal</label>
                                        <MyComponent />
                                    </div>
                                    <div class="form-group">
                                        <label>Disabled</label>
                                        <MyComponent disable={true} />
                                    </div>

                                </div>

                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label>Multiple</label>
                                        <MyComponent isMulti={true} className="basic-multi-select" prefix="select" />
                                    </div>

                                    <div class="form-group">
                                        <label>Disabled Result</label>
                                        <MyComponent defaultDisabled={(option) => option.isdisabled} />
                                    </div>

                                </div>

                            </div>

                        </div>

                        <div class="card-footer">
                            Visit <a href="https://select2.github.io/">Select2 documentation</a> for more examples and information about
                            the plugin.
                        </div>
                    </div>

                    <div class="card card-default">
                        <div class="card-header">
                            <h3 class="card-title">Bootstrap Duallistbox</h3>

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
                            <div class="row">
                                <div class="col-12 d-flex">
                                    <div class="form-group col-6">
                                        <div><label>Multiple</label></div>
                                        <input onChange={(e) => setInput1(e.target.value)} class="form-control filter" type="text" placeholder="Filter"></input>
                                        <div class="btn-group buttons mt-1" style={{ width: "100%" }} >
                                            <button onClick={handleDataLeft} type="button" style={{ width: "100%" }} class="  btn moveall btn-outline-secondary" title="Move all">&gt;&gt;</button>
                                        </div>
                                        <select class=" form-control" multiple="multiple">
                                            {
                                                data?.filter(name => name?.value.includes(input1)).map((item, i) =>
                                                    <option onClick={() => handleClick(i)} key={i} value={item?.value}>{item?.label}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div class="form-group col-6">
                                        <label>.</label>
                                        <input onChange={(e) => setInput2(e.target.value)} class="form-control filter" type="text" placeholder="Filter"></input>
                                        <div class="btn-group buttons mt-1" style={{ width: "100%" }} >
                                            <button onClick={handleDataRight} type="button" style={{ width: "100%" }} class="  btn moveall btn-outline-secondary" title="Move all">{'<<'}</button>
                                        </div>
                                        <select class="duallistbox form-control" multiple="multiple">
                                            {
                                                right?.filter(name => name?.value.includes(input2)).map((item, i) =>
                                                    <option onClick={() => handleClickRight(i)} key={i} value={item?.value}>{item?.label}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="card-footer">
                            Visit <a href="https://github.com/istvan-ujjmeszaros/bootstrap-duallistbox#readme">Bootstrap Duallistbox</a> for more examples and information about
                            the plugin.
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-6">

                            <div class="card card-danger">
                                <div class="card-header">
                                    <h3 class="card-title">Input masks</h3>
                                </div>
                                <div class="card-body">

                                    <div class="form-group">
                                        <label>Date masks:</label>
                                        {/* <DateInput /> */}
                                        {/* <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="far fa-calendar-alt"></i></span>
                                            </div>
                                            <input type="text" class="form-control" data-inputmask-alias="datetime" data-inputmask-inputformat="dd/mm/yyyy" data-mask />
                                        </div>  */}
                                    </div>
                                    <div class="form-group">
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="far fa-calendar-alt"></i></span>
                                            </div>
                                            <input type="text" class="form-control" data-inputmask-alias="datetime" data-inputmask-inputformat="mm/dd/yyyy" data-mask />
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <label>US phone mask:</label>

                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-phone"></i></span>
                                            </div>
                                            <input type="text" class="form-control" data-inputmask='"mask": "(999) 999-9999"' data-mask />
                                        </div>

                                    </div>


                                    <div class="form-group">
                                        <label>Intl US phone mask:</label>

                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-phone"></i></span>
                                            </div>
                                            <input type="text" class="form-control"
                                                data-inputmask="'mask': ['999-999-9999 [x99999]', '+099 99 99 9999[9]-9999']" data-mask />
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <label>IP mask:</label>

                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="fas fa-laptop"></i></span>
                                            </div>
                                            <input type="text" class="form-control" data-inputmask="'alias': 'ip'" data-mask />
                                        </div>
                                    </div>

                                </div>

                            </div>


                            <div class="card card-info">
                                <div class="card-header">
                                    <h3 class="card-title">Color & Time Picker</h3>
                                </div>
                                <div class="card-body">

                                    <div class="form-group">
                                        <label>Color picker:</label>
                                        <input type="color" class="form-control " />
                                    </div>


                                    <div class="form-group">
                                        <label>Color picker with addon:</label>

                                        <div class="input-group my-colorpicker2">
                                            <input type="text" class="form-control" />

                                            <div class="input-group-append">
                                                <span class="input-group-text"><i class="fas fa-square"></i></span>
                                            </div>
                                        </div>

                                    </div>


                                    <div class="bootstrap-timepicker">
                                        <div class="form-group">
                                            <label>Time picker:</label>
                                            <div class="input-group date" id="timepicker" data-target-input="nearest">
                                                <input type="text" class="form-control datetimepicker-input" data-target="#timepicker" />
                                                <div class="input-group-append" data-target="#timepicker" data-toggle="datetimepicker">
                                                    <div class="input-group-text"><i class="far fa-clock"></i></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title">Date picker</h3>
                                </div>
                                <div class="card-body">
                                    <div class="form-group">
                                        <label>Date:</label>
                                        <DatePiKer />
                                    </div>
                                    <div class="form-group">
                                        <label>Date and time:</label>
                                        <DateTime />
                                        <div class="input-group date" id="reservationdatetime" data-target-input="nearest">
                                            <input type="text" class="form-control datetimepicker-input" data-target="#reservationdatetime" />
                                            <div class="input-group-append" data-target="#reservationdatetime" data-toggle="datetimepicker">
                                                <div class="input-group-text"><i class="fa fa-calendar"></i></div>
                                            </div>
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <label>Date range:</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <i class="far fa-calendar-alt"></i>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control float-right" id="reservation" />
                                        </div>
                                    </div>


                                    <div class="form-group">
                                        <label>Date and time range:</label>

                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text"><i class="far fa-clock"></i></span>
                                            </div>
                                            <input type="text" class="form-control float-right" id="reservationtime" />
                                        </div>

                                    </div>


                                    <div class="form-group">
                                        <label>Date range button:</label>

                                        <div class="input-group">
                                            <button type="button" class="btn btn-default float-right" id="daterange-btn">
                                                <i class="far fa-calendar-alt"></i> Date range picker
                                                <i class="fas fa-caret-down"></i>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                                <div class="card-footer">
                                    Visit <a href="https://getdatepicker.com/5-4/">tempusdominus </a> for more examples and information about
                                    the plugin.
                                </div>
                            </div>


                            <div class="card card-success">
                                <div class="card-header">
                                    <h3 class="card-title">iCheck Bootstrap - Checkbox &amp; Radio Inputs</h3>
                                </div>
                                <div class="card-body">

                                    <div class="row">
                                        <div class="col-sm-6">

                                            <div class="form-group clearfix">
                                                <div class="icheck-primary d-inline">
                                                    <input type="checkbox" id="checkboxPrimary1" checked />
                                                    <label for="checkboxPrimary1">
                                                    </label>
                                                </div>
                                                <div class="icheck-primary d-inline">
                                                    <input type="checkbox" id="checkboxPrimary2" />
                                                    <label for="checkboxPrimary2">
                                                    </label>
                                                </div>
                                                <div class="icheck-primary d-inline">
                                                    <input type="checkbox" id="checkboxPrimary3" disabled />
                                                    <label for="checkboxPrimary3">
                                                        Primary checkbox
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="form-group clearfix">
                                                <div class="icheck-primary d-inline">
                                                    <input type="radio" id="radioPrimary1" name="r1" checked />
                                                    <label for="radioPrimary1">
                                                    </label>
                                                </div>
                                                <div class="icheck-primary d-inline">
                                                    <input type="radio" id="radioPrimary2" name="r1" />
                                                    <label for="radioPrimary2">
                                                    </label>
                                                </div>
                                                <div class="icheck-primary d-inline">
                                                    <input type="radio" id="radioPrimary3" name="r1" disabled />
                                                    <label for="radioPrimary3">
                                                        Primary radio
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-6">

                                            <div class="form-group clearfix">
                                                <div class="icheck-danger d-inline">
                                                    <input type="checkbox" checked id="checkboxDanger1" />
                                                    <label for="checkboxDanger1">
                                                    </label>
                                                </div>
                                                <div class="icheck-danger d-inline">
                                                    <input type="checkbox" id="checkboxDanger2" />
                                                    <label for="checkboxDanger2">
                                                    </label>
                                                </div>
                                                <div class="icheck-danger d-inline">
                                                    <input type="checkbox" disabled id="checkboxDanger3" />
                                                    <label for="checkboxDanger3">
                                                        Danger checkbox
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">

                                            <div class="form-group clearfix">
                                                <div class="icheck-danger d-inline">
                                                    <input type="radio" name="r2" checked id="radioDanger1" />
                                                    <label for="radioDanger1">
                                                    </label>
                                                </div>
                                                <div class="icheck-danger d-inline">
                                                    <input type="radio" name="r2" id="radioDanger2" />
                                                    <label for="radioDanger2">
                                                    </label>
                                                </div>
                                                <div class="icheck-danger d-inline">
                                                    <input type="radio" name="r2" disabled id="radioDanger3" />
                                                    <label for="radioDanger3">
                                                        Danger radio
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="row">
                                        <div class="col-sm-6">

                                            <div class="form-group clearfix">
                                                <div class="icheck-success d-inline">
                                                    <input type="checkbox" checked id="checkboxSuccess1" />
                                                    <label for="checkboxSuccess1">
                                                    </label>
                                                </div>
                                                <div class="icheck-success d-inline">
                                                    <input type="checkbox" id="checkboxSuccess2" />
                                                    <label for="checkboxSuccess2">
                                                    </label>
                                                </div>
                                                <div class="icheck-success d-inline">
                                                    <input type="checkbox" disabled id="checkboxSuccess3" />
                                                    <label for="checkboxSuccess3">
                                                        Success checkbox
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">

                                            <div class="form-group clearfix">
                                                <div class="icheck-success d-inline">
                                                    <input type="radio" name="r3" checked id="radioSuccess1" />
                                                    <label for="radioSuccess1">
                                                    </label>
                                                </div>
                                                <div class="icheck-success d-inline">
                                                    <input type="radio" name="r3" id="radioSuccess2" />
                                                    <label for="radioSuccess2">
                                                    </label>
                                                </div>
                                                <div class="icheck-success d-inline">
                                                    <input type="radio" name="r3" disabled id="radioSuccess3" />
                                                    <label for="radioSuccess3">
                                                        Success radio
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    Many more skins available. <a href="https://bantikyan.github.io/icheck-bootstrap/">Documentation</a>
                                </div>
                            </div>

                            <div class="card card-secondary">
                                <div class="card-header">
                                    <h3 class="card-title">Bootstrap Switch</h3>
                                </div>
                                <div class="card-body">
                                    <input type="checkbox" name="my-checkbox" checked data-bootstrap-switch />
                                    <input type="checkbox" name="my-checkbox" checked data-bootstrap-switch data-off-color="danger" data-on-color="success" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-default">
                                <div class="card-header">
                                    <h3 class="card-title">bs-stepper</h3>
                                </div>
                                <div class="card-body p-0">
                                    <div class="bs-stepper linear">
                                        <div class="bs-stepper-header" role="tablist">
                                            <div class="step" data-target="#logins-part">
                                                <button type="button" class="step-trigger" role="tab" aria-controls="logins-part" id="logins-part-trigger">
                                                    <span class="bs-stepper-circle">1</span>
                                                    <span class="bs-stepper-label">Logins</span>
                                                </button>
                                            </div>
                                            <div class="line"></div>
                                            <div class="step" data-target="#information-part">
                                                <button type="button" class="step-trigger" role="tab" aria-controls="information-part" id="information-part-trigger">
                                                    <span class="bs-stepper-circle">2</span>
                                                    <span class="bs-stepper-label">Various information</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="bs-stepper-content">
                                            <div id="logins-part" class="content active dstepper-block" role="tabpanel" aria-labelledby="logins-part-trigger">
                                                <div class="form-group">
                                                    <label for="exampleInputEmail1">Email address</label>
                                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                                </div>
                                                <div class="form-group">
                                                    <label for="exampleInputPassword1">Password</label>
                                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                                </div>
                                                <button onClick={handleChange} class="btn btn-primary">Next</button>
                                            </div>
                                            <div id="information-part" class="content" role="tabpanel" aria-labelledby="information-part-trigger">
                                                <div class="form-group">
                                                    <label for="exampleInputFile">File input</label>
                                                    <div class="input-group">
                                                        <div class="custom-file">
                                                            <input type="file" class="custom-file-input" id="exampleInputFile" />
                                                            <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                                                        </div>
                                                        <div class="input-group-append">
                                                            <span class="input-group-text">Upload</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button onClick={handleChange} class="btn btn-primary" onclick="stepper.previous()">Previous</button>
                                                <button type="submit" class="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div class="card-footer">
                                    Visit <a href="https://github.com/Johann-S/bs-stepper/#how-to-use-it">bs-stepper documentation</a> for more examples and information about the plugin.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-default">
                                <div class="card-header">
                                    <h3 class="card-title">Dropzone.js <small><em>jQuery File Upload</em> like look</small></h3>
                                </div>
                                <div class="card-body">
                                    <div id="actions" class="row">
                                        <div class="col-lg-6">
                                            <div class="btn-group w-100">
                                                <span class="btn btn-success col fileinput-button">
                                                    <i class="fas fa-plus"></i>
                                                    <span>Add files</span>
                                                </span>
                                                <button type="submit" class="btn btn-primary col start">
                                                    <i class="fas fa-upload"></i>
                                                    <span>Start upload</span>
                                                </button>
                                                <button type="reset" class="btn btn-warning col cancel">
                                                    <i class="fas fa-times-circle"></i>
                                                    <span>Cancel upload</span>
                                                </button>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 d-flex align-items-center">
                                            <div class="fileupload-process w-100">
                                                <div id="total-progress" class="progress progress-striped active" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                                                    <div class="progress-bar progress-bar-success" style={{ width: "0%" }} data-dz-uploadprogress></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="table table-striped files" id="previews">
                                        <div id="template" class="row mt-2">
                                            <div class="col-auto">
                                                <span class="preview"><img src="data:," alt="" data-dz-thumbnail /></span>
                                            </div>
                                            <div class="col d-flex align-items-center">
                                                <p class="mb-0">
                                                    <span class="lead" data-dz-name></span>
                                                    (<span data-dz-size></span>)
                                                </p>
                                                <strong class="error text-danger" data-dz-errormessage></strong>
                                            </div>
                                            <div class="col-4 d-flex align-items-center">
                                                <div class="progress progress-striped active w-100" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
                                                    <div class="progress-bar progress-bar-success" style={{ width: "0%" }} data-dz-uploadprogress></div>
                                                </div>
                                            </div>
                                            <div class="col-auto d-flex align-items-center">
                                                <div class="btn-group">
                                                    <button class="btn btn-primary start">
                                                        <i class="fas fa-upload"></i>
                                                        <span>Start</span>
                                                    </button>
                                                    <button data-dz-remove class="btn btn-warning cancel">
                                                        <i class="fas fa-times-circle"></i>
                                                        <span>Cancel</span>
                                                    </button>
                                                    <button data-dz-remove class="btn btn-danger delete">
                                                        <i class="fas fa-trash"></i>
                                                        <span>Delete</span>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-footer">
                                    Visit <a href="https://www.dropzonejs.com">dropzone.js documentation</a> for more examples and information about the plugin.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default AdvancedForm