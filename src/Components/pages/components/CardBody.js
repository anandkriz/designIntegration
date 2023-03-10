export const CardBody = (props) => {
    const { photo, className } = props
    return (
        <div class="col-md-12 col-lg-6 col-xl-4">
            <div class="card mb-2 bg-gradient-dark">
                <img class="card-img-top" src={photo} alt="Dist Photo 1" />
                <div class={className}>
                    <h5 class="card-title text-primary text-white">Card Title</h5>
                    <p class="card-text text-white pb-2 pt-1">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor.</p>
                    <a href="#" class="text-white">Last update 2 mins ago</a>
                </div>
            </div>
        </div>
    )
}