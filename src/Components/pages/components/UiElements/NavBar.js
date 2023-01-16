import React from 'react'
import { BreadCrumb } from '../../Dashboard2Components/Breadcrumb'
import { FaBars, FaSearch } from 'react-icons/fa';
import { CardTitle } from './General';

function NavBar() {

    const captionDetails1 = [{ "title": "Overlay", "active": "active", "status": "true", "caption": "overlay" },
    { "title": "Overlay dark", "active": "", "status": "false", "caption": "overlay-dark" },
    { "title": "Normal Tab", "active": "", "status": "false", "caption": "normal" }]

    const captionDetails = [{ "title": "Home", "active": "active", "status": "true", "caption": "home" },
    { "title": "Profile", "active": "", "status": "false", "caption": "profile" },
    { "title": "messages", "active": "", "status": "false", "caption": "home" },
    { "title": "settings", "active": "", "status": "false", "caption": "settings" }]

    const content = [
        { "caption": "home", "active": "show active", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus ullamcorper dui molestie, sit amet congue quam finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id orci eu lectus blandit suscipit. Phasellus porta, ante et varius ornare, sem enim sollicitudin eros, at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus pulvinar non consequat neque. Mauris lacus elit, condimentum ac condimentum at, semper vitae lectus. Cras lacinia erat eget sapien porta consectetur." },

        { "caption": "profile", "active": "", "content": "Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis." },

        { "caption": "messages", "active": "", "content": "Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna. " },

        { "caption": "settings", "active": "", "content": " Mauris tincidunt mi at erat gravida, eget tristique urna bibendum. Mauris pharetra purus ut ligula tempor, et vulputate metus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus interdum, nisl ligula placerat mi, quis posuere purus ligula eu lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere nec nunc. Nunc euismod pellentesque diam.g" }]

    const content1 = [
        { "caption": "overlay", "active": "show active", "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus ullamcorper dui molestie, sit amet congue quam finibus. Etiam ultricies nunc non magna feugiat commodo." },
        { "caption": "overlay-dark", "content": "Phasellus porta, ante et varius ornare, sem enim sollicitudin eros, at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor porta nisl," },
        { "caption": "normal", "content": " id tempor risus rhoncus quis. In in quam a nibh cursus pulvinar non consequat neque. Mauris lacus elit, condimentum ac condimentum at, semper vitae lectus. Cras lacinia erat eg" }]
    return (
        <div class="content-wrapper">
            <BreadCrumb heading=" Navbar & Tabs" />
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-primary card-outline">
                                <CardTitle title="Navbar Examples" />
                                <div class="card-body">
                                    <div class="row">
                                        <Navbar className="navbar-light" />
                                        <Navbar className="navbar-white navbar-light" />
                                    </div>
                                    <div class="row">
                                        <Navbar className="navbar-primary navbar-dark" />
                                        <Navbar className="navbar-primary navbar-light" />
                                    </div>
                                    <div class="row">
                                        <Navbar className="navbar-orange navbar-light" />
                                        <Navbar className="navbar-orange navbar-dark" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-12">
                            <h4>Nav Tabs inside Card Header <small>card-tabs / card-outline-tabs</small></h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-sm-6">
                            <div class="card card-primary card-tabs">
                                <div class="card-header p-0 pt-1">
                                    <ul class="nav nav-tabs" id="custom-tabs-one-tab" role="tablist">
                                        {captionDetails.map(({ title, caption, status, active, }) =>
                                            <Caption title={title} caption={caption} status={status} active={active} tabnum="one" />
                                        )}
                                    </ul>
                                </div>
                                <div class="card-body">
                                    <div class="tab-content" id="custom-tabs-one-tabContent">
                                        {content.map(({ caption, content, active }) =>
                                            <div class={`"tab-pane fade ${active}`} id={`custom-tabs-one-${caption}`} role="tabpanel" aria-labelledby={`custom-tabs-one-${caption}-tab`}>
                                                {content}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6">
                            <div class="card card-primary card-tabs">
                                <div class="card-header p-0 pt-1">
                                    <ul class="nav nav-tabs" id="custom-tabs-two-tab" role="tablist">
                                        <li class="pt-2 px-3"><h3 class="card-title">Card Title</h3></li>
                                        {captionDetails.map(({ title, caption, status, active }) =>
                                            <li class="nav-item">
                                                <a class={`nav-link ${active}`} id={`custom-tabs-two-${caption}-tab`} data-toggle="pill" href={`#custom-tabs-two-${caption}`} role="tab" aria-controls={`custom-tabs-two-${caption}`} aria-selected={status}>{title}</a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div class="card-body">
                                    <div class="tab-content" id="custom-tabs-two-tabContent">
                                        {content.map(({ caption, content, active }) =>
                                            <div class={`tab-pane fade ${active}`} id={`custom-tabs-two-${caption}`} role="tabpanel" aria-labelledby={`custom-tabs-two-${caption}-tab`}>
                                                {content}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12 col-sm-6">
                            <div class="card card-primary card-outline card-tabs">
                                <div class="card-header p-0 pt-1 border-bottom-0">
                                    <ul class="nav nav-tabs" id="custom-tabs-three-tab" role="tablist">
                                        {captionDetails.map(({ title, caption, status, active }) =>
                                            <Caption title={title} caption={caption} status={status} active={active} tabnum="three" />
                                        )}
                                    </ul>
                                </div>
                                <div class="card-body">
                                    <div class="tab-content" id="custom-tabs-three-tabContent">
                                        {content.map(({ caption, content, active }) =>
                                            <div class={`tab-pane fade ${active}`} id={`custom-tabs-three-${caption}`} role="tabpanel" aria-labelledby={`custom-tabs-two-${caption}-tab`}>
                                                {content}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-sm-6">
                            <div class="card card-primary card-outline card-outline-tabs">
                                <div class="card-header p-0 border-bottom-0">
                                    <ul class="nav nav-tabs" id="custom-tabs-four-tab" role="tablist">
                                        {captionDetails.map(({ title, caption, status, active }) =>
                                            <Caption title={title} caption={caption} status={status} active={active} tabnum="four" />
                                        )}

                                    </ul>
                                </div>
                                <div class="card-body">
                                    <div class="tab-content" id="custom-tabs-four-tabContent">
                                        {content.map(({ caption, content, active }) =>
                                            <div class={`tab-pane fade ${active}`} id={`custom-tabs-four-${caption}`} role="tabpanel" aria-labelledby={`custom-tabs-four-${caption}-tab`}>
                                                {content}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <h4>Nav Tabs Overlay for loading</h4>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-primary card-tabs">
                                <div class="card-header p-0 pt-1">
                                    <ul class="nav nav-tabs" id="custom-tabs-five-tab" role="tablist">
                                        {captionDetails1.map(({ title, caption, status, active, }) =>
                                            <li class="nav-item">
                                                <a class={`nav-link ${active}`} id={`custom-tabs-five-${caption}-tab`} data-toggle="pill" href={`#custom-tabs-five-${caption}`} role="tab" aria-controls={`custom-tabs-five-${caption}`} aria-selected={status}>{title}</a>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                                <div class="card-body">
                                    <div class="tab-content" id="custom-tabs-five-tabContent">

                                        {content.map(({ caption, content, active }) =>
                                            <div class={`tab-pane fade ${active}`} id={`custom-tabs-five-${caption}`} role="tabpanel" aria-labelledby={`custom-tabs-five-${caption}-tab`}>
                                                <div class={`${caption}-wrapper`}>
                                                    <div class={caption}><i class="fas fa-3x fa-sync-alt fa-spin"></i><div class="text-bold pt-2">{caption == "normal" ? null : "Loading..."}</div></div>
                                                    {content}
                                                </div>
                                            </div>
                                        )}
                                        {/* <div class="tab-pane fade show active" id="custom-tabs-five-overlay" role="tabpanel" aria-labelledby="custom-tabs-five-overlay-tab">
                                            <div class="overlay-wrapper">
                                                <div class="overlay"><i class="fas fa-3x fa-sync-alt fa-spin"></i><div class="text-bold pt-2">Loading...</div></div>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus ullamcorper dui molestie, sit amet congue quam finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id orci eu lectus blandit suscipit. Phasellus porta, ante et varius ornare, sem enim sollicitudin eros, at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus pulvinar non consequat neque. Mauris lacus elit, condimentum ac condimentum at, semper vitae lectus. Cras lacinia erat eget sapien porta consectetur.
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="custom-tabs-five-overlay-dark" role="tabpanel" aria-labelledby="custom-tabs-five-overlay-dark-tab">
                                            <div class="overlay-wrapper">
                                                <div class="overlay dark"><i class="fas fa-3x fa-sync-alt fa-spin"></i><div class="text-bold pt-2"></div></div>
                                                Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis.
                                            </div>
                                        </div>
                                        <div class="tab-pane fade" id="custom-tabs-five-normal" role="tabpanel" aria-labelledby="custom-tabs-five-normal-tab">
                                            Mauris tincidunt mi at erat gravida, eget tristique urna bibendum. Mauris pharetra purus ut ligula tempor, et vulputate metus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus interdum, nisl ligula placerat mi, quis posuere purus ligula eu lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere nec nunc. Nunc euismod pellentesque diam.
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card card-primary card-outline">
                        <CardTitle title="Vertical Tabs Examples" />
                        <div class="card-body">
                            <h4>Left Sided</h4>
                            <div class="row">
                                <div class="col-5 col-sm-3">
                                    <div class="nav flex-column nav-tabs h-100" id="vert-tabs-tab" role="tablist" aria-orientation="vertical">
                                        {captionDetails.map(({ title, caption, status, active }) =>
                                            <a class={`nav-link ${active}`} id={`vert-tabs-${caption}-tab`} data-toggle="pill" href={`#vert-tabs-${caption}`} role="tab" aria-controls={`vert-tabs-${caption}`} aria-selected={status}>{title}</a>
                                        )}
                                    </div>
                                </div>
                                <div class="col-7 col-sm-9">
                                    <div class="tab-content" id="vert-tabs-tabContent">
                                        {content.map(({ caption, content, active }) =>
                                            <div class={`"tab-pane fade text-left ${active}`} id={`vert-tabs-${caption}`} role="tabpanel" aria-labelledby={`vert-tabs-${caption}-tab`}>
                                                {content}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <h4 class="mt-4">Right Sided <small>(nav-tabs-right)</small></h4>
                            <div class="row">
                                <div class="col-7 col-sm-9">
                                    <div class="tab-content" id="vert-tabs-right-tabContent">
                                        {content.map(({ caption, content, active }) =>
                                            <div class={`"tab-pane fade ${active}`} id={`vert-tabs-right-${caption}`} role="tabpanel" aria-labelledby={`vert-tabs-right-${caption}-tab`}>
                                                {content}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div class="col-5 col-sm-3">
                                    <div class="nav flex-column nav-tabs nav-tabs-right h-100" id="vert-tabs-right-tab" role="tablist" aria-orientation="vertical">
                                        {captionDetails.map(({ title, caption, status, active }) =>
                                            <a class={`nav-link ${active}`} id={`vert-tabs-right-${caption}-tab`} data-toggle="pill" href={`#vert-tabs-right-${caption}`} role="tab" aria-controls={`vert-tabs-right-${caption}`} aria-selected={status}>{title}</a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card card-primary card-outline">
                        <CardTitle title="Tabs Custom Content Examples" />
                        <div class="card-body">
                            <h4>Custom Content Below</h4>
                            <ul class="nav nav-tabs" id="custom-content-below-tab" role="tablist">
                                {captionDetails.map(({ title, caption, status, active }) =>
                                    <li class="nav-item">
                                        <a class={`nav-link ${active}`} id={`custom-content-below-${caption}-tab`} data-toggle="pill" href={`#custom-content-below-${caption}`} role="tab" aria-controls={`custom-content-below-${caption}`} aria-selected={status}>{title}</a>
                                    </li>
                                )}
                            </ul>
                            <div class="tab-content" id="custom-content-below-tabContent">

                                {content.map(({ caption, content, active }) =>
                                    <div class={`"tab-pane fade ${active}`} id={`custom-content-below-${caption}`} role="tabpanel" aria-labelledby={`custom-content-below-${caption}-tab`}>
                                        {content}
                                    </div>
                                )}
                            </div>
                            <div class="tab-custom-content">
                                <p class="lead mb-0">Custom Content goes here</p>
                            </div>
                            <h4 class="mt-5 ">Custom Content Above</h4>
                            <ul class="nav nav-tabs" id="custom-content-above-tab" role="tablist">
                                {captionDetails.map(({ title, caption, status, active }) =>
                                    <li class="nav-item">
                                        <a class={`nav-link ${active}`} id={`custom-content-above-${caption}-tab`} data-toggle="pill" href={`#custom-content-above-${caption}`} role="tab" aria-controls={`custom-content-above-${caption}`} aria-selected={status}>{title}</a>
                                    </li>
                                )}
                            </ul>
                            <div class="tab-custom-content">
                                <p class="lead mb-0">Custom Content goes here</p>
                            </div>
                            <div class="tab-content" id="custom-content-above-tabContent">
                                {content.map(({ caption, content, active }) =>
                                    <div class={`"tab-pane fade ${active}`} id={`custom-content-above-${caption}`} role="tabpanel" aria-labelledby={`custom-content-above-${caption}-tab`}>
                                        {content}
                                    </div>
                                )}
                                {/* <div class="tab-pane fade show active" id="custom-content-above-home" role="tabpanel" aria-labelledby="custom-content-above-home-tab">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin malesuada lacus ullamcorper dui molestie, sit amet congue quam finibus. Etiam ultricies nunc non magna feugiat commodo. Etiam odio magna, mollis auctor felis vitae, ullamcorper ornare ligula. Proin pellentesque tincidunt nisi, vitae ullamcorper felis aliquam id. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id orci eu lectus blandit suscipit. Phasellus porta, ante et varius ornare, sem enim sollicitudin eros, at commodo leo est vitae lacus. Etiam ut porta sem. Proin porttitor porta nisl, id tempor risus rhoncus quis. In in quam a nibh cursus pulvinar non consequat neque. Mauris lacus elit, condimentum ac condimentum at, semper vitae lectus. Cras lacinia erat eget sapien porta consectetur.
                                </div>
                                <div class="tab-pane fade" id="custom-content-above-profile" role="tabpanel" aria-labelledby="custom-content-above-profile-tab">
                                    Mauris tincidunt mi at erat gravida, eget tristique urna bibendum. Mauris pharetra purus ut ligula tempor, et vulputate metus facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Maecenas sollicitudin, nisi a luctus interdum, nisl ligula placerat mi, quis posuere purus ligula eu lectus. Donec nunc tellus, elementum sit amet ultricies at, posuere nec nunc. Nunc euismod pellentesque diam.
                                </div>
                                <div class="tab-pane fade" id="custom-content-above-messages" role="tabpanel" aria-labelledby="custom-content-above-messages-tab">
                                    Morbi turpis dolor, vulputate vitae felis non, tincidunt congue mauris. Phasellus volutpat augue id mi placerat mollis. Vivamus faucibus eu massa eget condimentum. Fusce nec hendrerit sem, ac tristique nulla. Integer vestibulum orci odio. Cras nec augue ipsum. Suspendisse ut velit condimentum, mattis urna a, malesuada nunc. Curabitur eleifend facilisis velit finibus tristique. Nam vulputate, eros non luctus efficitur, ipsum odio volutpat massa, sit amet sollicitudin est libero sed ipsum. Nulla lacinia, ex vitae gravida fermentum, lectus ipsum gravida arcu, id fermentum metus arcu vel metus. Curabitur eget sem eu risus tincidunt eleifend ac ornare magna.
                                </div>
                                <div class="tab-pane fade" id="custom-content-above-settings" role="tabpanel" aria-labelledby="custom-content-above-settings-tab">
                                    Pellentesque vestibulum commodo nibh nec blandit. Maecenas neque magna, iaculis tempus turpis ac, ornare sodales tellus. Mauris eget blandit dolor. Quisque tincidunt venenatis vulputate. Morbi euismod molestie tristique. Vestibulum consectetur dolor a vestibulum pharetra. Donec interdum placerat urna nec pharetra. Etiam eget dapibus orci, eget aliquet urna. Nunc at consequat diam. Nunc et felis ut nisl commodo dignissim. In hac habitasse platea dictumst. Praesent imperdiet accumsan ex sit amet facilisis.
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
const Caption = ({ caption, active, title, status, tabnum }) => {
    return (
        <li class="nav-item">
            <a class={`nav-link ${active}`} id={`custom-tabs-${tabnum}-${caption}-tab`} data-toggle="pill" href={`#custom-tabs-${tabnum}-${caption}`} role="tab" aria-controls={`custom-tabs-${tabnum}-${caption}`} aria-selected={status}>{title}</a>
        </li>
    )
}

const Navbar = ({ className }) => {
    return (
        <div class="col-12 col-lg-6">
            <h4>Default Navbar <small>(navbar-light)</small></h4>
            <nav class={`navbar navbar-expand ${className}`}>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"><FaBars /></i></a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="../../index3.html" class="nav-link">Home</a>
                    </li>
                    <li class="nav-item d-none d-sm-inline-block">
                        <a href="#" class="nav-link">Contact</a>
                    </li>
                </ul>

                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" data-widget="navbar-search" data-target="#navbar-search1" href="#" role="button">
                            <i class="fas fa-search"></i>
                        </a>
                        <div class="navbar-search-block" id="navbar-search1">
                            <form class="form-inline">
                                <div class="input-group input-group-sm">
                                    <input class="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                    <div class="input-group-append">
                                        <button class="btn btn-navbar" type="submit">
                                            <FaSearch />
                                        </button>
                                        <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" href="#">
                            <i class="far fa-comments"></i>
                            <span class="badge badge-danger navbar-badge">3</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <img src="../../dist/img/user1-128x128.jpg" alt="User Avatar" class="img-size-50 mr-3 img-circle" />
                                    <div class="media-body">
                                        <h3 class="dropdown-item-title">
                                            Brad Diesel
                                            <span class="float-right text-sm text-danger"><i class="fas fa-star"></i></span>
                                        </h3>
                                        <p class="text-sm">Call me whenever you can
                                        </p>
                                        <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <img src="../../dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
                                    <div class="media-body">
                                        <h3 class="dropdown-item-title">
                                            John Pierce
                                            <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                                        </h3>
                                        <p class="text-sm">I got your message bro</p>
                                        <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <div class="media">
                                    <img src="../../dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3" />
                                    <div class="media-body">
                                        <h3 class="dropdown-item-title">
                                            Nora Silvester
                                            <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                                        </h3>
                                        <p class="text-sm">The subject goes here</p>
                                        <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
                                    </div>
                                </div>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link" data-toggle="dropdown" href="#">
                            <i class="far fa-bell"></i>
                            <span class="badge badge-warning navbar-badge">15</span>
                        </a>
                        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                            <span class="dropdown-item dropdown-header">15 Notifications</span>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-envelope mr-2"></i> 4 new messages
                                <span class="float-right text-muted text-sm">3 mins</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-users mr-2"></i> 8 friend requests
                                <span class="float-right text-muted text-sm">12 hours</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item">
                                <i class="fas fa-file mr-2"></i> 3 new reports
                                <span class="float-right text-muted text-sm">2 days</span>
                            </a>
                            <div class="dropdown-divider"></div>
                            <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                            <i class="fas fa-expand-arrows-alt"></i>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                            <i class="fas fa-th-large"></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar