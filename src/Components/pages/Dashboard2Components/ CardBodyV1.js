export const CardBodyV1 = (props) => {
    const { title, report, count, message, percent, slweek, Tweek, lweek } = props
    return (
        <div class="card">
            <div class="card-header border-0">
                <div class="d-flex justify-content-between">
                    <h3 class="card-title">{title}</h3>
                    <a href="javascript:void(0);">{report}</a>
                </div>
            </div>
            <div class="card-body">
                <div class="d-flex">
                    <p class="d-flex flex-column">
                        <span class="text-bold text-lg">{count}</span>
                        <span>{message}</span>
                    </p>
                    <p class="ml-auto d-flex flex-column text-right">
                        <span class="text-success">
                            <i class="fas fa-arrow-up"></i> {percent}
                        </span>
                        <span class="text-muted">{slweek}</span>
                    </p>
                </div>


                <div class="position-relative mb-4">
                    <canvas id="visitors-chart" height="200"></canvas>
                </div>

                <div class="d-flex flex-row justify-content-end">
                    <span class="mr-2">
                        <i class="fas fa-square text-primary"></i> {Tweek}
                    </span>

                    <span>
                        <i class="fas fa-square text-gray"></i> {lweek}
                    </span>
                </div>
            </div>
        </div>
    )
}