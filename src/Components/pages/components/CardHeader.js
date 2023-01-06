export const CardHeader = () => {
    return (
        <div class="card-header">
            <div class="user-block">
                <img class="img-circle" src="../dist/img/user1-128x128.jpg" alt="User Image" />
                <span class="username"><a href="#">Jonathan Burke Jr.</a></span>
                <span class="description">Shared publicly - 7:30 PM Today</span>
            </div>
            {/* <!-- /.user-block --> */}
            <div class="card-tools">
                <button type="button" class="btn btn-tool" title="Mark as read">
                    <i class="far fa-circle"></i>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="collapse">
                    <i class="fas fa-minus"></i>
                </button>
                <button type="button" class="btn btn-tool" data-card-widget="remove">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            {/* <!-- /.card-tools --> */}
        </div>
    )
}