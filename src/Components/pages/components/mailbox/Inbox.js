import React from 'react'
import { BreadCrumb } from '../../Dashboard2Components/Breadcrumb'
import { folders, labels, inboxList } from './inboxJson'
import { FaSquare, FaTrashAlt, FaReply, FaShare, FaSyncAlt } from 'react-icons/fa';



function Inbox() {
    return (
        <div class="content-wrapper">
            <BreadCrumb heading="Inbox" />
            <section class="content">
                <div class="row">
                    <div class="col-md-3">
                        <a href="compose.html" class="btn btn-primary btn-block mb-3">Compose</a>


                        <Folders data={folders} mainTitle="Folders" />

                        <Folders data={labels} mainTitle="Labels" />
                    </div>
                    <div class="col-md-9">
                        <div class="card card-primary card-outline">
                            <div class="card-header">
                                <h3 class="card-title">Inbox</h3>
                                <div class="card-tools">
                                    <div class="input-group input-group-sm">
                                        <input type="text" class="form-control" placeholder="Search Mail" />
                                        <div class="input-group-append">
                                            <div class="btn btn-primary">
                                                <i class="fas fa-search"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-body p-0">
                                <Icons />
                                <div class="table-responsive mailbox-messages">
                                    <table class="table table-hover table-striped">
                                        <tbody>
                                            {inboxList.map(({ name, msgBold, msg, time }) =>
                                                <tr>
                                                    <td>
                                                        <div class="icheck-primary">
                                                            <input type="checkbox" value="" id="check1" />
                                                            <label for="check1"></label>
                                                        </div>
                                                    </td>
                                                    <td class="mailbox-star"><a href="#"><i class="fas fa-star text-warning"></i></a></td>
                                                    <td class="mailbox-name"><a href="read-mail.html">{name}</a></td>
                                                    <td class="mailbox-subject"><b>{msgBold}</b> {msg}
                                                    </td>
                                                    <td class="mailbox-attachment"></td>
                                                    <td class="mailbox-date">{time}</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="card-footer p-0">
                                <Icons />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export const Folders = ({ data, mainTitle }) => {
    return (
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">{mainTitle}</h3>
                <div class="card-tools">
                    <button type="button" class="btn btn-tool" data-card-widget="collapse">
                        <i class="fas fa-minus"></i>
                    </button>
                </div>
            </div>
            <div class="card-body p-0">
                <ul class="nav nav-pills flex-column">
                    {
                        data.map(({ title, color, count }) =>
                            <li class="nav-item active">
                                <a href="#" class="nav-link">
                                    <i class="fas fa-inbox"></i> {title}
                                    <span class={`badge bg-${color} float-right`}>{count}</span>
                                </a>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}

const Icons = () => {
    return (
        <div class="mailbox-controls">
            <FaSquare />
            <div class="btn-group">
                <FaTrashAlt />
                <FaReply />
                <FaShare />
            </div>
            <FaSyncAlt />
            <div class="float-right">
                1-50/200
                <div class="btn-group">
                    <button type="button" class="btn btn-default btn-sm">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button type="button" class="btn btn-default btn-sm">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Inbox