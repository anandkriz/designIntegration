export const ProductListV1 = (props) => {
    const { img } = props
    const details = [{
        product: "product1",
        amount: "$13 USD",
        percent: "12%",
        sold: "12,000 Sold"
    }, {
        product: "product1",
        amount: "$13 USD",
        percent: "12%",
        sold: "12,000 Sold"
    },
    {
        product: "product1",
        amount: "$13 USD",
        percent: "12%",
        sold: "12,000 Sold"
    }, {
        product: "product1",
        amount: "$13 USD",
        percent: "12%",
        sold: "12,000 Sold"
    }]
    return (
        <div class="card" >
            <div class="card-header border-0">
                <h3 class="card-title">Products</h3>
                <div class="card-tools">
                    <a href="#" class="btn btn-tool btn-sm">
                        <i class="fas fa-download"></i>
                    </a>
                    <a href="#" class="btn btn-tool btn-sm">
                        <i class="fas fa-bars"></i>
                    </a>
                </div>
            </div>
            <div class="card-body table-responsive p-0">
                <table class="table table-striped table-valign-middle">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Sales</th>
                            <th>More</th>
                        </tr>
                    </thead>
                    <tbody>
                        {details.map(({ product, amount, percent, sold }) =>
                            <tr>
                                <td>
                                    <img src={img} alt="Product 1" class="img-circle img-size-32 mr-2" />
                                    {product}
                                </td>
                                <td>{amount}</td>
                                <td>
                                    <small class="text-success mr-1">
                                        <i class="fas fa-arrow-up"></i>
                                        {percent}
                                    </small>
                                    {sold}
                                </td>
                                <td>
                                    <a href="#" class="text-muted">
                                        <i class="fas fa-search"></i>
                                    </a>
                                </td>
                            </tr>
                        )}




                    </tbody>
                </table>
            </div>
        </div>
    )
}