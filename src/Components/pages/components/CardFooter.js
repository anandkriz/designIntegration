export const CardFooter = () => {
    return (
        <div class="card-footer">
            <form action="#" method="post">
                <img class="img-fluid img-circle img-sm" src="../dist/img/user4-128x128.jpg" alt="Alt Text" />
                {/* <!-- .img-push is used to add margin to elements next to floating images --> */}
                <div class="img-push">
                    <input type="text" class="form-control form-control-sm" placeholder="Press enter to post comment" />
                </div>
            </form>
        </div>
    )
}