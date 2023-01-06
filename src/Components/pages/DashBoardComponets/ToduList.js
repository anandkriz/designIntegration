import React from 'react'

function ToduList() {
    return (
        <div class="card">
            <div class="card-header">
                <h3 class="card-title">
                    <i class="ion ion-clipboard mr-1"></i>
                    To Do List
                </h3>

                <div class="card-tools">
                    <ul class="pagination pagination-sm">
                        <li class="page-item">
                            <a href="#" class="page-link">
                                &laquo;
                            </a>
                        </li>
                        <Pagination value="1" />
                        <Pagination value="2" />
                        <Pagination value="3" />
                        <li class="page-item">
                            <a href="#" class="page-link">
                                &raquo;
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="card-body">
                <ul class="todo-list" data-widget="todo-list">
                    <List title="Design a nice theme" time="2 mins" className="danger" />
                    <List title="Make the theme responsive" time="4 hours" className="info" />
                    <List title="Let theme shine like a star" time="1 day" className="warning" />
                    <List title="Let theme shine like a star" time="3 days" className="success" />
                    <List title="Check your messages and notifications" time="1 week" className="primary" />
                    <List title="Let theme shine like a star" time="1 month" className="secondary" />
                </ul>
            </div>

            <div class="card-footer clearfix">
                <button type="button" class="btn btn-primary float-right">
                    <i class="fas fa-plus"></i> Add item
                </button>
            </div>
        </div>
    )
}
const Pagination = (props) => {
    const { value } = props
    return (
        <li class="page-item">
            <a href="#" class="page-link">
                {value}
            </a>
        </li>
    )
}
const List = (props) => {
    const { title, time, className } = props
    return (
        <li>
            <span class="handle">
                <i class="fas fa-ellipsis-v"></i>
                <i class="fas fa-ellipsis-v"></i>
            </span>
            <div class="icheck-primary d-inline ml-2">
                <input
                    type="checkbox"
                    value=""
                    name="todo1"
                    id="todoCheck1"
                />
                <label for="todoCheck1"></label>
            </div>
            <span class="text">{title}</span>
            <small class={`badge badge-${className}`}>
                <i class="far fa-clock"></i> {time}
            </small>
            <div class="tools">
                <i class="fas fa-edit"></i>
                <i class="fas fa-trash-o"></i>
            </div>
        </li>
    )
}
export default ToduList