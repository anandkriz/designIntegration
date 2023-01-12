import React, { useState } from 'react'
import { BreadCrumb } from '../../Dashboard2Components/Breadcrumb'
import { CardTitle } from '../UiElements/General'
import { dataTable } from './DataTableJson'

function DataTable() {
    const [data, setData] = useState(dataTable)
    const [status, setStatus] = useState(true)

    const enginascending = [...data].sort((a, b) => a.engine > b.engine ? -1 : 1,);
    const engindes = [...data].sort((a, b) => a.engine > b.engine ? 1 : -1,);
    console.log(engindes)
    const engineAssenting = () => {
        if (status === true) {
            setData(enginascending)
            setStatus(false)
        }
        else {
            setData(engindes)
            setStatus(true)
        }
    }
    const browserascending = [...data].sort((a, b) => a.browser > b.browser ? -1 : 1,);
    const browserdes = [...data].sort((a, b) => a.browser > b.browser ? 1 : -1,);
    const browserAssenting = () => {
        if (status === true) {
            setData(browserascending)
            setStatus(false)
        }
        else {
            setData(browserdes)
            setStatus(true)
        }
    }
    const platformascending = [...data].sort((a, b) => a.platform > b.platform ? -1 : 1,);
    const platformdes = [...data].sort((a, b) => a.platform > b.platform ? 1 : -1,);
    const platformAssenting = () => {
        if (status === true) {
            setData(platformascending)
            setStatus(false)
        }
        else {
            setData(platformdes)
            setStatus(true)
        }
    }

    const versionascending = [...data].sort((a, b) => a.version - b.version);
    const versiondes = [...data].sort((a, b) => b.version - a.version);
    const versionAssenting = () => {
        if (status === true) {
            setData(versionascending)
            setStatus(false)
        }
        else {
            setData(versiondes)
            setStatus(true)
        }
    }

    const cssascending = [...data].sort((a, b) => a.css_grad > b.css_grad ? -1 : 1,);
    const cssdes = [...data].sort((a, b) => a.css_grad > b.css_grad ? 1 : -1,);
    const cssSort = () => {
        if (status === true) {
            setData(cssascending)
            setStatus(false)
        }
        else {
            setData(cssdes)
            setStatus(true)
        }
    }
    return (
        <div class="content-wrapper">
            <BreadCrumb heading="DataTables" />
            <section class="content">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-12">
                            <div class="card">
                                <CardTitle title="DataTable with minimal features & hover style" />
                                <div class="card-body">
                                    <table id="example2" class="table table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th onClick={engineAssenting}>Rendering engine</th>
                                                <th onClick={browserAssenting}>Browser</th>
                                                <th onClick={platformAssenting}>Platform(s)</th>
                                                <th onClick={versionAssenting}>Engine version</th>
                                                <th onClick={cssSort}>CSS grade</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map(({ engine, browser, css_grad, platform, version }) =>
                                                <tr>
                                                    <td>{engine}</td>
                                                    <td>{browser}
                                                    </td>
                                                    <td>{platform}</td>
                                                    <td>{version}</td>
                                                    <td>{css_grad}</td>
                                                </tr>
                                            )}

                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>Rendering engine</th>
                                                <th>Browser</th>
                                                <th>Platform(s)</th>
                                                <th>Engine version</th>
                                                <th>CSS grade</th>
                                            </tr>
                                        </tfoot>
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

export default DataTable