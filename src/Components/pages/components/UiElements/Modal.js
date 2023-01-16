import React, { useState } from 'react'
import { BreadCrumb } from '../../Dashboard2Components/Breadcrumb'
import { CardTitle } from './General'
import { modalDetails, tostify, tostifySweet } from './modalJson'
import Modal from 'react-modal';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function Modall() {
    const [status, setStatus] = useState(false)
    const [color, setColor] = useState()
    const OnHandleClick = (title, color) => {
        setStatus(true)
        const details = { "title": title, "color": color }
        setColor(details)
    }
    const toastClick = (color) => {
        switch (color) {
            case "info":
                toast.info('🦄 Wow so easy!', {
                    position: "top-left",
                });
                break;
            case "success":
                toast.success('🦄 Wow so easy!', {
                    position: "top-left",
                });
                break;
            case "danger":
                toast.error('🦄 Wow so easy!', {
                    position: "top-left",
                });
                break;
            case "warning":
                toast.warning('🦄 Wow so easy!', {
                    position: "top-left",
                });
                break;
            default:
                toast('🦄 Wow so easy!', {
                    position: "top-left",
                });
        }

    }

    const sweetAlert = (color) => {
        switch (color) {
            case "info":
                toast.info('Wow so easy!', {
                    position: "top-right",
                    theme: "colored",
                    hideProgressBar: true,
                });
                break;
            case "success":
                toast.success('Wow so easy!', {
                    position: "top-right",
                    theme: "colored",
                    hideProgressBar: true,
                });
                break;
            case "danger":
                toast.error('Wow so easy!', {
                    position: "top-right",
                    theme: "colored",
                    hideProgressBar: true,
                });
                break;
            case "warning":
                toast.warning('Wow so easy!', {
                    position: "top-right",
                    theme: "colored",
                    hideProgressBar: true,
                });
                break;
            case "default":
                toast('Wow so easy!', {
                    position: "top-right",
                    theme: "colored",
                    hideProgressBar: true,

                });
                break;
        }
    }
    return (
        <div className='content-wrapper'>
            <BreadCrumb heading="Modals & Alerts" />
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="card card-primary card-outline">
                                <CardTitle title="Modal Examples" />
                                <div class="card-body">
                                    {modalDetails.map(({ title, btn_class, color, }) =>
                                        <button onClick={() => OnHandleClick(title, color)} type="button" class={btn_class} data-toggle="modal" data-target="#modal-default">
                                            {title}
                                        </button>
                                    )}
                                    <br />
                                    <br />

                                    <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-sm">
                                        Launch Small Modal
                                    </button>
                                    <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-lg">
                                        Launch Large Modal
                                    </button>
                                    <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-xl">
                                        Launch Extra Large Modal
                                    </button>
                                    <br />
                                    <br />
                                    <button type="button" class="btn btn-default" data-toggle="modal" data-target="#modal-overlay">
                                        Launch Modal with Overlay
                                    </button>
                                    <div class="text-muted mt-3">
                                        Instructions for how to use modals are available on the
                                        <a href="https://getbootstrap.com/docs/4.4/components/modal/">Bootstrap documentation</a>
                                    </div>
                                </div>
                            </div>

                            {/* <div class="card card-info card-outline">
                                <div class="card-header">
                                    <h3 class="card-title">
                                        <i class="fas fa-edit"></i>
                                        Toasts Examples <small>built in AdminLTE</small>
                                    </h3>
                                </div>
                                <div class="card-body">

                                    <button type="button" class="btn btn-default toastsDefaultDefault">
                                        Launch Default Toast
                                    </button>
                                    <button type="button" class="btn btn-default toastsDefaultFull">
                                        Launch Full Toast (with icon)
                                    </button>
                                    <button type="button" class="btn btn-default toastsDefaultFullImage">
                                        Launch Full Toast (with image)
                                    </button>
                                    <button type="button" class="btn btn-default toastsDefaultAutohide">
                                        Launch Default Toasts with autohide
                                    </button>
                                    <button type="button" class="btn btn-default toastsDefaultNotFixed">
                                        Launch Default Toasts with not fixed
                                    </button>
                                    <br />
                                    <br />
                                    <button type="button" class="btn btn-default toastsDefaultTopLeft">
                                        Launch Default Toast (topLeft)
                                    </button>
                                    <button type="button" class="btn btn-default toastsDefaultBottomRight">
                                        Launch Default Toast (bottomRight)
                                    </button>
                                    <button type="button" class="btn btn-default toastsDefaultBottomLeft">
                                        Launch Default Toast (bottomLeft)
                                    </button>
                                    <br />
                                    <br />
                                    <button type="button" class="btn btn-success toastsDefaultSuccess">
                                        Launch Success Toast
                                    </button>
                                    <button type="button" class="btn btn-info toastsDefaultInfo">
                                        Launch Info Toast
                                    </button>
                                    <button type="button" class="btn btn-warning toastsDefaultWarning">
                                        Launch Warning Toast
                                    </button>
                                    <button type="button" class="btn btn-danger toastsDefaultDanger">
                                        Launch Danger Toast
                                    </button>
                                    <button type="button" class="btn btn-default bg-maroon toastsDefaultMaroon">
                                        Launch Maroon Toast
                                    </button>
                                    <div class="text-muted mt-3">

                                    </div>
                                </div>
                            </div> */}

                            <div class="card card-success card-outline">
                                <div class="card-header">
                                    <h3 class="card-title">
                                        <i class="fas fa-edit"></i>
                                        SweetAlert2 Examples
                                    </h3>
                                </div>
                                <div class="card-body">
                                    {tostifySweet.map(({ title, color }) =>
                                        <button onClick={() => sweetAlert(color)} type="button" class={`ml-1 btn btn-${color}`}>
                                            {title}</button>
                                    )}
                                    <div class="text-muted mt-3">
                                        For more examples look at <a href="https://sweetalert2.github.io/">https://sweetalert2.github.io/</a>
                                    </div>
                                </div>
                            </div>

                            <div class="card card-warning card-outline">
                                <CardTitle title="Toastr Examples" />
                                <div class="card-body">
                                    {tostify.map(({ title, color }) =>
                                        <button onClick={() => toastClick(color)} type="button" class={`ml-1 btn btn-${color}`}>
                                            {title}</button>
                                    )}
                                    <div class="text-muted mt-3">
                                        For more examples look at <a href="https://codeseven.github.io/toastr/">https://codeseven.github.io/toastr/</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <Toastfy />
            <Modals status={status} close={() => setStatus(false)} color={color} />
        </div>
    )
}

const Modals = ({ close, color, status }) => {
    return (
        <div>
            <Modal
                isOpen={status}
                style={customStyles}
            >
                <div class={`  ${color?.color}`}>
                    <div class="modal-header">
                        <h4 class="modal-title">{color?.title}</h4>
                        <button onClick={close} type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>One fine body&hellip;</p>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button onClick={close} type="button" class={color?.color == "" ? "btn btn-default" : "btn btn-outline-light"} data-dismiss="modal">Close</button>
                        <button type="button" class={color?.color == "" ? "btn btn-primary" : "btn btn-outline-light"}>Save changes</button>
                    </div>
                </div>
            </Modal>
        </div >
    );
}
const Toastfy = () => {
    return <div>
        <ToastContainer
            // position="top-right"
            autoClose={2500}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        >
            <p>jgjhgj</p>
        </ToastContainer>
    </div>
}

const customStyles = {
    content: {
        width: '25%',
        top: '30%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

    },
};

export default Modall