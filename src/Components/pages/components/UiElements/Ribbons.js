import React from 'react'
import { BreadCrumb } from '../../Dashboard2Components/Breadcrumb'
import { CardTitle } from './General'
import { ribbonSmall, ribbonMedium, ribbonImage } from './RibbonsJson'
import Photo1 from '../../../../Components/images/photo1.png'

function Ribbons() {
    console.log(ribbonMedium)
    return (
        <div className='content-wrapper'>
            <BreadCrumb heading="Ribbons" />

            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="card card-primary">
                                <CardTitle title="Ribbons" />
                                <div class="card-body">
                                    <div class="row">
                                        <RibbonsSmall data={ribbonSmall} />
                                    </div>
                                    <div class="row mt-4">
                                        <RibbonsSmall data={ribbonMedium} />
                                    </div>
                                    <div class="row mt-4">
                                        <RibbonsSmall data={ribbonImage} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section></div>
    )
}
const RibbonsSmall = (props) => {
    const { data } = props
    return (
        data.map(({ title, size, color, content, type }) => {
            switch (type) {
                case "ribbon":
                    return (
                        <div class="col-sm-4">
                            <div class="position-relative p-3 bg-gray" style={{ height: "180px" }}>
                                <div class={`ribbon-wrapper ${size}`}>
                                    <div class={`ribbon ${color}`}>
                                        {title}
                                    </div>
                                </div>
                                {title}<br />
                                <small>{content}</small>
                            </div>
                        </div>
                    )

                case "image":
                    return (
                        <div class="col-sm-4">
                            <div class="position-relative">
                                <img src={Photo1} alt="Photo 1" class="img-fluid" />
                                <div class={`ribbon-wrapper ${size}`}>
                                    <div class={`ribbon ${color}`}>
                                        Ribbon
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
            }

        }

        )

    )
}
export default Ribbons