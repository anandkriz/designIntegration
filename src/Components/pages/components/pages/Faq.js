import React from 'react'
import { BreadCrumb } from '../../Dashboard2Components/Breadcrumb'
import { CardTitle } from '../UiElements/General'

function Faq() {
    const faq = [
        { "active": "show", "num": "One", "title": "1. Lorem ipsum dolor sit amet", "color": "primary", "content": " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
        { "num": "Two", "title": "2. Aenean massa", "color": "primary", "content": " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
        { "num": "Three", "title": "3. Donec quam felis", "color": "primary", "content": " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
        { "num": "Four", "title": "4. Donec pede justo sit amet", "color": "warning", "content": " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
        { "num": "Five", "title": " 5. In enim justo", "color": "warning", "content": " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
        { "num": "Six", "title": "6. ipsum dolor sit amet", "color": "warning", "content": " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
        { "num": "Seven", "title": "7.m dolor sit amet", "color": "danger", "content": " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
        { "num": "Eight", "title": "8.amet  ipsum Lorem  dolor sit ", "color": "danger", "content": " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." },
        { "num": "Nine", "title": "1. Lorem ipsum dolor sit amet", "color": "danger", "content": " Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor." }]
    return (
        <div class="content-wrapper">

            <BreadCrumb heading="FAQ" />


            <section class="content">
                <div class="row">
                    <div class="col-12" id="accordion">

                        {faq.map(({ title, color, num, content, active }) =>
                            <div class={`card card-${color} card-outline`}>
                                <a class="d-block w-100" data-toggle="collapse" href={`#collapse${num}`}>
                                    <CardTitle title={title} />
                                </a>
                                <div id={`collapse${num}`} class={`collapse ${active}`} data-parent="#accordion">
                                    <div class="card-body">
                                        {content}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 mt-3 text-center">
                        <p class="lead">
                            <a href="contact-us.html">Contact us</a>,
                            if you found not the right anwser or you have a other question?<br />
                        </p>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Faq