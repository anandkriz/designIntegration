import React from 'react'
import { BreadCrumb } from '../../Dashboard2Components/Breadcrumb'

function ContactUs() {
    const fields = [{ "type": "text", "label": "Name", "id": "inputName" },
    { "type": "email", "label": "E-Mail" },
    { "type": "text", "label": "Subject", "id": "inputSubject" },
    { "type": "textarea", "label": "Message" },
    { "type": "button", }]
    return (
        <div class="content-wrapper">
            <BreadCrumb heading="Contact us" />
            <section class="content">
                <div class="card">
                    <div class="card-body row">
                        <div class="col-5 text-center d-flex align-items-center justify-content-center">
                            <div class="">
                                <h2>Admin<strong>LTE</strong></h2>
                                <p class="lead mb-5">123 Testing Ave, Testtown, 9876 NA<br></br>
                                    Phone: +1 234 56789012
                                </p>
                            </div>
                        </div>
                        <div class="col-7">
                            {fields.map(({ type, label, id }) => {
                                switch (type) {
                                    case "text":
                                        return (
                                            <div class="form-group">
                                                <label for={id}>{label}</label>
                                                <input type="text" id={id} class="form-control" />
                                            </div>
                                        )
                                    case "email":
                                        return (
                                            <div class="form-group">
                                                <label for="inputEmail">{label}</label>
                                                <input type="email" id="inputEmail" class="form-control" />
                                            </div>
                                        )
                                    case "textarea":
                                        return (
                                            <div class="form-group">
                                                <label for="inputMessage">{label}</label>
                                                <textarea id="inputMessage" class="form-control" rows="4"></textarea>
                                            </div>
                                        )
                                    case "button":
                                        return (
                                            <div class="form-group">
                                                <input type="submit" class="btn btn-primary" value="Send message" />
                                            </div>
                                        )
                                }
                            }

                            )}




                        </div>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default ContactUs