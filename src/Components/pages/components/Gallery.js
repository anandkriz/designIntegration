import React, { useState } from 'react'
import { GalleryImg } from './GalleryJson'
import Modal from 'react-modal';
import { CardTitle } from './UiElements/General';

function Gallery() {
    console.log(window.location.pathname);

    const [data, setData] = useState(GalleryImg)

    const onShuffle = () => {
        data.sort(() => Math.random() - 0.5);
        setData([...data])
    }
    const onWhite = () => {
        const white = GalleryImg.filter((item) => item?.color == "white")
        setData(white)
    }
    const onBlack = () => {
        const red = GalleryImg.filter((item) => item?.color == "black")
        setData(red)
    }
    const onRed = () => {
        const white = GalleryImg.filter((item) => item?.color == "red")
        setData(white)
    }
    const onRedWhite = () => {
        const white = GalleryImg.filter((item) => item?.color == "white" || item?.color == "red")
        setData(white)
    }
    const onAllItem = () => {
        setData(GalleryImg)
    }

    const ImageAscending = [...data].sort((a, b) => a.num - b.num);

    const imageAscending = () => {
        setData(ImageAscending)
    }
    const ImageDes = [...data].sort((a, b) => b.num - a.num);
    const imageDes = () => {
        setData(ImageDes)
    }

    const [imgs, setImg] = useState({})
    const [modalStatus, setModalStatus] = useState(false)
    const onImgClick = (title, img) => {
        const details = { "title": title, "boximg": img }
        setImg(details)
        setModalStatus(true)
        console.log(title, img)
    }
    console.log(imgs)
    return (
        <div class="content-wrapper">
            <section class="content-header">
                <div class="container-fluid">
                    <div class="row mb-2">
                        <div class="col-sm-6">
                            <h1>Gallery</h1>
                        </div>
                        <div class="col-sm-6">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><a href="#">Home</a></li>
                                <li class="breadcrumb-item active">Gallery</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="card card-primary">
                                <CardTitle title="FilterizR Gallery with Ekko Lightbox" />
                                <div class="card-body">
                                    <div>
                                        <div class="btn-group w-100 mb-2">
                                            <a class="btn btn-info active" onClick={onAllItem} data-filter="all"> All items </a>
                                            <a class="btn btn-info" onClick={onWhite} data-filter="1"> Category 1 (WHITE) </a>
                                            <a class="btn btn-info" onClick={onBlack} data-filter="2"> Category 2 (BLACK) </a>
                                            <a class="btn btn-info" onClick={onRed} data-filter="3"> Category 3 (COLORED) </a>
                                            <a class="btn btn-info" onClick={onRedWhite} data-filter="4"> Category 4 (COLORED, BLACK) </a>
                                        </div>
                                        <div class="mb-2">
                                            <a class="btn btn-secondary" onClick={onShuffle} href="javascript:void(0)" data-shuffle> Shuffle items </a>
                                            <div class="float-right">
                                                <div class="btn-group">
                                                    <a class="btn btn-default" onClick={imageAscending} data-sortAsc> Ascending </a>
                                                    <a class="btn btn-default" onClick={imageDes} data-sortDesc> Descending </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div class="filter-container p-0 row">
                                            {data.map(({ title, img, boximg }) =>
                                                <div class="filtr-item col-sm-2" data-category="1" data-sort="white sample">
                                                    <img onClick={() => onImgClick(title, boximg)} src={img} class="img-fluid mb-2" alt="white sample" />
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <Modals status={modalStatus} title={imgs?.title} close={() => setModalStatus(false)} img={imgs?.boximg} />
        </div>
    )
}

const Modals = ({ status, title, close, img }) => {
    return (

        <div>
            <Modal
                isOpen={status}
                style={customStyles}
            >
                {/* <div class="modal-dialog" role="document" > */}
                <div >
                    <div class="modal-header">
                        <h4 class="modal-title">{title}</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span onClick={close} aria-hidden="true">×</span></button>
                    </div>
                    <div class="modal-body">
                        <div class="ekko-lightbox-container" >
                            <div class="ekko-lightbox-item fade">
                            </div>
                            <div class="ekko-lightbox-item fade in show">
                                <img src={img} class="img-fluid" style={{ width: "100%" }} />
                            </div>
                        </div>

                    </div>
                    {/* <div class="modal-footer " style={{ display: "none" }}>&nbsp;</div> */}
                </div>
                {/* </div> */}
            </Modal>

        </div >
    );
}

const customStyles = {
    content: {
        width: '23%',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',

    },
};

export default Gallery