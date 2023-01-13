import isEmpty from 'lodash.isempty'
import React, { useState } from 'react'
import { BreadCrumb } from '../../Dashboard2Components/Breadcrumb'

function Validation() {
    const [input, setInput] = useState({})
    const [error, setError] = useState({})
    console.log(input)

    const onhandleChange = (e) => {
        console.log(e.target.checked)
        input.accept = e.target.checked
    }
    const onSubmit = async (e) => {
        e.preventDefault()
        const error = await handleVailidate()

        if (isEmpty(error)) {
            alert("submited")
        } else {
            setError({ ...error })
        }
    }

    console.log(error)
    const handleVailidate = () => {
        let error = {}
        var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (isEmpty(input["email"])) {
            error["email"] = "Please enter a email address"
        }
        if (!input?.email == "" && !reg.test(input?.email)) {
            error["email"] = "Please enter a vaild email address"
        }
        if (isEmpty(input["password"])) {
            error["password"] = "Please provide a password"
        }
        // if (isEmpty(input["email"])) {
        //     error["email"] = "Please enter a email address"
        // }
        return error
    }
    return (
        <div class="content-wrapper">
            <BreadCrumb heading="Validation" />
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-primary">
                                <div class="card-header">
                                    <h3 class="card-title">Quick Example <small>jQuery Validation</small></h3>
                                </div>
                                <form onClick={onSubmit}>
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input onChange={(e) => (input.email = e.target.value, delete error["email"], setInput({ ...input }))} type="text" name="email" class="form-control" placeholder="Enter email" />
                                            <p style={{ color: "red" }}>{error?.email}</p>
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input onChange={(e) => (input.password = e.target.value, delete error["password"], setInput({ ...input }))} type="password" name="password" class="form-control" placeholder="Password" />
                                            <p style={{ color: "red" }}>{error?.password}</p>
                                        </div>
                                        {/* <div class="form-group mb-0">
                                            <div class="custom-control custom-checkbox">
                                                <input onChange={onhandleChange} type="checkbox" name="terms" class="custom-control-input" id="exampleCheck1" />
                                                <label class="custom-control-label" for="exampleCheck1">I agree to the <a href="#">terms of service</a>.</label>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div class="card-footer">
                                        <button onClick={onSubmit} type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>

                        </div>

                        <div class="col-md-6">

                        </div>

                    </div>

                </div>
            </section>

        </div>
    )
}

export default Validation