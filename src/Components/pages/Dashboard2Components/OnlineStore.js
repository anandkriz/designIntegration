export const OnlineStore = () => {
    return (
        <div class="card">
            <div class="card-header border-0">
                <h3 class="card-title">Online Store Overview</h3>
                <div class="card-tools">
                    <a href="#" class="btn btn-sm btn-tool">
                        <i class="fas fa-download"></i>
                    </a>
                    <a href="#" class="btn btn-sm btn-tool">
                        <i class="fas fa-bars"></i>
                    </a>
                </div>
            </div>
            <div class="card-body">
                <List title="CONVERSION RATE" percent="12%" className="border-bottom mb-3" />
                <List title="SALES RATE" percent="0.8%" className="border-bottom mb-3" />
                <List title="REGISTRATION RATE" percent="1%" className="mb-0" />
            </div>
        </div>
    )
}

export const List = (props) => {
    const { percent, title, className } = props
    return (
        <div class={`d-flex justify-content-between align-items-center ${className}`}>
            <p class="text-success text-xl">
                <i class="ion ion-ios-refresh-empty"></i>
            </p>
            <p class="d-flex flex-column text-right">
                <span class="font-weight-bold">
                    <i class="ion ion-android-arrow-up text-success"></i> {percent}
                </span>
                <span class="text-muted">{title}</span>
            </p>
        </div>
    )
}