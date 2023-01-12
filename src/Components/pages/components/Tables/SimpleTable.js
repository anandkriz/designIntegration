import isEmpty from 'lodash.isempty'
import React from 'react'
import { BreadCrumb } from '../../Dashboard2Components/Breadcrumb'
import { CardTitle } from '../UiElements/General'
import { borderdTable, hoverTable, expandableTable, expandableTableTree } from './simpleTablJson'

function SimpleTable() {

    const handleClickTable = (ids) => {
        let element = document.getElementById(ids)
        if (element.classList.contains('d-none')) {
            element.classList.remove('d-none')
        }
        else {
            element.classList.add('d-none')
        }
    }

    const handleClickTableTree = (ids) => {
        let element = document.getElementById(ids)
        if (element.classList.contains('d-none')) {
            element.classList.remove('d-none')
        }
        else {
            element.classList.add('d-none')
        }
    }

    return (
        <div class="content-wrapper">
            <BreadCrumb heading="Simple Tables" />
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card">
                                <CardTitle title="Bordered Table" />
                                <Table className="table table-bordered" />
                                <div class="card-footer clearfix">
                                    <ul class="pagination pagination-sm m-0 float-right">
                                        <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                                        <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="card">
                                <CardTitle title="Condensed Full Width Table" />
                                <Table className="table table-sm" />
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Simple Full Width Table</h3>
                                    <div class="card-tools">
                                        <ul class="pagination pagination-sm float-right">
                                            <li class="page-item"><a class="page-link" href="#">&laquo;</a></li>
                                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                                            <li class="page-item"><a class="page-link" href="#">&raquo;</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <Table className="table" />
                            </div>

                            <div class="card">
                                <CardTitle title="Striped Full Width Table" />
                                <Table className="table table-striped" />

                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Responsive Hover Table</h3>
                                    <div class="card-tools">
                                        <div class="input-group input-group-sm" style={{ width: "150px" }}>
                                            <input type="text" name="table_search" class="form-control float-right" placeholder="Search" />
                                            <div class="input-group-append">
                                                <button type="submit" class="btn btn-default">
                                                    <i class="fas fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body table-responsive p-0">
                                    <table class="table table-hover text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>User</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Reason</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                hoverTable.map(({ id, name, date, status, reason }) =>
                                                    <tr>
                                                        <td>{id}</td>
                                                        <td>{name}</td>
                                                        <td>{date}</td>
                                                        <td><span>{status}</span></td>
                                                        <td>{reason}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Fixed Header Table</h3>
                                    <div class="card-tools">
                                        <div class="input-group input-group-sm" style={{ width: "150px" }}>
                                            <input type="text" name="table_search" class="form-control float-right" placeholder="Search" />
                                            <div class="input-group-append">
                                                <button type="submit" class="btn btn-default">
                                                    <i class="fas fa-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body table-responsive p-0" style={{ width: "300px" }}>
                                    <table class="table table-head-fixed text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>User</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Reason</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                hoverTable.map(({ id, name, date, status, reason }) =>
                                                    <tr>
                                                        <td>{id}</td>
                                                        <td>{name}</td>
                                                        <td>{date}</td>
                                                        <td><span>{status}</span></td>
                                                        <td>{reason}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Expandable Table</h3>
                                </div>
                                <div class="card-body">
                                    <table class="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>User</th>
                                                <th>Date</th>
                                                <th>Status</th>
                                                <th>Reason</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {expandableTable.map(({ id, name, date, status, reason, content, ids }, i) =>
                                                <>
                                                    <tr onClick={() => handleClickTable(ids)} data-widget="expandable-table" aria-expanded="false">
                                                        <td>{id}</td>
                                                        <td>{name}</td>
                                                        <td>{date}</td>
                                                        <td><span>{status}</span></td>
                                                        <td>{reason}</td>
                                                    </tr>
                                                    <tr class="expandable-body d-none" id={ids}>
                                                        <td colspan="5">
                                                            <p>
                                                                {content}
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </>
                                            )
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <div class="card-header">
                                    <h3 class="card-title">Expandable Table Tree</h3>
                                </div>
                                <div class="card-body p-0">
                                    <table class="table table-hover">
                                        <tbody>
                                            {expandableTableTree.map(({ num, data, idmain }) =>
                                                <>
                                                    <tr onClick={() => handleClickTableTree(idmain)} data-widget="expandable-table" aria-expanded="true">
                                                        <td>
                                                            {/* {data?"<",num:num} {num} */}
                                                            {!isEmpty(data) ? `< ${num}` : num}
                                                        </td>
                                                    </tr>

                                                    <tr class="expandable-body d-none " id={idmain}>
                                                        <td>
                                                            <div class="p-0">
                                                                <table class="table table-hover">
                                                                    <tbody>
                                                                        {data.map(({ num, data, id }) =>
                                                                            <>
                                                                                <tr onClick={() => handleClickTableTree(id)} data-widget="expandable-table" aria-expanded="false">
                                                                                    <td>
                                                                                        <i class="expandable-table-caret fas fa-caret-right fa-fw"></i>
                                                                                        {!isEmpty(data) ? `< ${num}` : num}
                                                                                    </td>
                                                                                </tr>
                                                                                <tr class="expandable-body d-none" id={id} >
                                                                                    <td>
                                                                                        <div class="p-0">
                                                                                            <table class="table table-hover">
                                                                                                <tbody>
                                                                                                    {data.map(({ num }) =>
                                                                                                        <tr>
                                                                                                            <td>{num}</td>
                                                                                                        </tr>
                                                                                                    )}
                                                                                                </tbody>
                                                                                            </table>
                                                                                        </div>
                                                                                    </td>
                                                                                </tr>
                                                                            </>
                                                                        )
                                                                        }
                                                                    </tbody>
                                                                </table>
                                                            </div>
                                                        </td>
                                                    </tr>


                                                </>
                                            )

                                            }
                                            {/* <tr data-widget="expandable-table" aria-expanded="true">
                                                <td>
                                                    <i class="expandable-table-caret fas fa-caret-right fa-fw"></i>
                                                    219
                                                </td>
                                            </tr>
                                            <tr class="expandable-body">
                                                <td>
                                                    <div class="p-0">
                                                        <table class="table table-hover">
                                                            <tbody>
                                                                <tr data-widget="expandable-table" aria-expanded="false">
                                                                    <td>
                                                                        <i class="expandable-table-caret fas fa-caret-right fa-fw"></i>
                                                                        219-1
                                                                    </td>
                                                                </tr>
                                                                <tr class="expandable-body">
                                                                    <td>
                                                                        <div class="p-0">
                                                                            <table class="table table-hover">
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>219-1-1</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </td>
                                            </tr> */}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
const Table = (props) => {
    const { className } = props
    return (
        <div class="card-body p-0">
            <table class={className}>
                <thead>
                    <tr>
                        <th style={{ width: "10px" }}>#</th>
                        <th>Task</th>
                        <th>Progress</th>
                        <th style={{ width: "40px" }}>Label</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        borderdTable.map(({ title, width, color }, i) =>
                            <tr>
                                <td>{i + 1}</td>
                                <td>{title}</td>
                                <td>
                                    <div class="progress progress-xs">
                                        <div class={`progress-bar ${color}`} style={{ width: `${width}px` }}></div>
                                    </div>
                                </td>
                                <td><span class={`badge ${color}`}>{width}%</span></td>

                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
export default SimpleTable