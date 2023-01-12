import React, { useState } from 'react'
import { BreadCrumb } from '../../Dashboard2Components/Breadcrumb'

function Validation() {
    const [input, setInput] = useState({})
    console.log(input)

    const onhandleChange = (value) => {
        input.accept = e.target.value
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
                                <form id="quickForm">
                                    <div class="card-body">
                                        <div class="form-group">
                                            <label for="exampleInputEmail1">Email address</label>
                                            <input onChange={(e) => (input.email = e.target.value, setInput({ ...input }))} type="email" name="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputPassword1">Password</label>
                                            <input onChange={(e) => (input.password = e.target.value, setInput({ ...input }))} type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                        </div>
                                        <div class="form-group mb-0">
                                            <div class="custom-control custom-checkbox">
                                                <input onChange={onhandleChange(value)} type="checkbox" name="terms" class="custom-control-input" id="exampleCheck1" />
                                                <label class="custom-control-label" for="exampleCheck1">I agree to the <a href="#">terms of service</a>.</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                        <button type="submit" class="btn btn-primary">Submit</button>
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