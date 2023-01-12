import React, { useEffect } from "react";
import './Commen.css';
import { FaTachometerAlt } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";
import AdminLTELogo from './images/AdminLTELogo.png'
import Data from './SideBar.json'
import { Examples } from "./pages/SidebarOptions";
function SideBar() {
    const navigete = useNavigate();

    const handleChange = (id, title, navlink) => {
        if (!navlink) {
            let element = document.getElementById(id)
            console.log(element)
            if (element.classList.contains('d-block')) {
                element.classList.add('d-none')
                element.classList.remove('d-block')
            } else {
                element.classList.add('d-block')
                element.classList.remove('d-none')
                navigete(navlink)
            }
        } else {
            navigete(navlink)
        }


    }
    console.log(Data)
    return (
        <>

            {/* <Header /> */}
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* <!-- Brand Logo --> */}
                <a href="index3.html" className="brand-link">
                    <img
                        src={AdminLTELogo}
                        alt="AdminLTE Logo"
                        className="brand-image img-circle elevation-3"
                        style={{ opacity: '0.8' }}
                    />
                    <span className="brand-text font-weight-light">AdminLTE 3</span>
                </a>
                s
                i
                {/* <!-- Sidebar --> */}
                <div className="sidebar">
                    {/* <!-- Sidebar user panel (optional) --> */}
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img
                                src={AdminLTELogo}
                                className="img-circle elevation-2"
                                alt="User Image"
                            />
                        </div>
                        <div class="info">
                            <a href="#" className="d-block">Alexander Pierce</a>
                        </div>
                    </div>

                    {/* <!-- SidebarSearch Form --> */}
                    <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input
                                className="form-control form-control-sidebar"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />

                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw"></i>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Sidebar Menu --> */}
                    <nav className="mt-2">
                        <ul
                            className="nav nav-pills nav-sidebar flex-column"
                            data-widget="treeview"
                            role="menu"
                            data-accordion="false"
                        >
                            {/* Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library */}
                            {/* <li className="nav-item menu-open">
                                <a href="#" className="nav-link active">
                                    <p>
                                        Dashboard
                                        <i className="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul className="nav nav-treeview">
                                    <li className="nav-item">
                                        <div style={{ cursor: "pointer" }} className="nav-link active" onClick={() => navigete('/')}>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Dashboard v1</p>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <div style={{ cursor: "pointer" }} className="nav-link" onClick={() => navigete('dashboard-v2')}>
                                            <i className="far fa-circle nav-icon"></i>
                                            <p>Dashboard v2</p>
                                        </div>
                                    </li>
                                </ul>
                            </li> */}

                            {Object.keys(Data).map((item) =>
                                <li className={Data[item]?.class_name} >
                                    <div className={`nav-link ${Data[item]?.active}`} onClick={() => handleChange(Data[item]?.id, Data[item]?.title, Data[item]?.nagigation_link)} >
                                        <p>
                                            {Data[item]?.title}
                                            <i className="right fas fa-angle-left"></i>
                                        </p>
                                    </div>
                                    <ul className="nav nav-treeview" id={Data[item]?.id}>
                                        {Data[item]?.data.map(({ title, nagigation_link }) =>

                                            <li className="nav-item">
                                                <div style={{ cursor: "pointer" }} className="nav-link" onClick={() => navigete(nagigation_link)}>
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>* {title}</p>
                                                </div>
                                            </li>
                                        )
                                        }
                                    </ul>
                                </li>
                            )
                            }


                            <li class="nav-header">EXAMPLES</li>

                            {Object.keys(Examples).map((item) =>
                                <li className={Examples[item]?.class_name} >
                                    <div className={`nav-link ${Examples[item]?.active}`} onClick={() => handleChange(Examples[item]?.id, Examples[item]?.title, Examples[item]?.nagigation_link)} >
                                        <p>
                                            {Examples[item]?.title}
                                            <i className="right fas fa-angle-left"></i>
                                        </p>
                                    </div>
                                    <ul className="nav nav-treeview" id={Examples[item]?.id}>
                                        {Examples[item]?.data.map(({ title, nagigation_link }) =>

                                            <li className="nav-item">
                                                <div style={{ cursor: "pointer" }} className="nav-link" onClick={() => navigete(nagigation_link)}>
                                                    <i className="far fa-circle nav-icon"></i>
                                                    <p>* {title}</p>
                                                </div>
                                            </li>
                                        )
                                        }
                                    </ul>
                                </li>
                            )
                            }
                            <li class="nav-header">MISCELLANEOUS</li>
                            <li class="nav-item">
                                <a href="iframe.html" class="nav-link">
                                    <i class="nav-icon fas fa-ellipsis-h"></i>
                                    <p>Tabbed IFrame Plugin</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="https://adminlte.io/docs/3.1/" class="nav-link">
                                    <i class="nav-icon fas fa-file"></i>
                                    <p>Documentation</p>
                                </a>
                            </li>
                            <li class="nav-header">MULTI LEVEL EXAMPLE</li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="fas fa-circle nav-icon"></i>
                                    <p>Level 1</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="nav-icon fas fa-circle"></i>
                                    <p>
                                        Level 1
                                        <i class="right fas fa-angle-left"></i>
                                    </p>
                                </a>
                                <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Level 2</p>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>
                                                Level 2
                                                <i class="right fas fa-angle-left"></i>
                                            </p>
                                        </a>
                                        <ul class="nav nav-treeview">
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="far fa-dot-circle nav-icon"></i>
                                                    <p>Level 3</p>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="far fa-dot-circle nav-icon"></i>
                                                    <p>Level 3</p>
                                                </a>
                                            </li>
                                            <li class="nav-item">
                                                <a href="#" class="nav-link">
                                                    <i class="far fa-dot-circle nav-icon"></i>
                                                    <p>Level 3</p>
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Level 2</p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="fas fa-circle nav-icon"></i>
                                    <p>Level 1</p>
                                </a>
                            </li>
                            <li class="nav-header">LABELS</li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="nav-icon far fa-circle text-danger"></i>
                                    <p class="text">Important</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="nav-icon far fa-circle text-warning"></i>
                                    <p>Warning</p>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a href="#" class="nav-link">
                                    <i class="nav-icon far fa-circle text-info"></i>
                                    <p>Informational</p>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    {/* <!-- /.sidebar-menu --> */}
                </div>
                {/* <!-- /.sidebar --> */}
            </aside>
        </>
    )
}

export default SideBar