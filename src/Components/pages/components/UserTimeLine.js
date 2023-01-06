import React from "react";
import { CardComment } from "./CardComment";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";

function UserTimeLine(props) {
    const { photo } = props
    return (
        <div class="col-md-6">
            {/* <!-- Box Comment --> */}
            <div class="card card-widget">
                <CardHeader />
                {/* <!-- /.card-header --> */}
                <div class="card-body">
                    <img class="img-fluid pad" src={photo} alt="Photo" />
                    <p>I took this photo this morning. What do you guys think?</p>
                    <button type="button" class="btn btn-default btn-sm"><i class="fas fa-share"></i> Share</button>
                    <button type="button" class="btn btn-default btn-sm"><i class="far fa-thumbs-up"></i> Like</button>
                    <span class="float-right text-muted">127 likes - 3 comments</span>
                </div>
                {/* <!-- /.card-body --> */}
                <div class="card-footer card-comments">
                    <CardComment />
                    <CardComment />
                </div>
                {/* <!-- /.card-footer --> */}
                <CardFooter />

            </div>

        </div>
    )
}



export default UserTimeLine