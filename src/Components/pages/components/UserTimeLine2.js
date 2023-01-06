import { CardComment } from "./CardComment";
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";

export const UserTimeLine2 = () => {
    return (
        <div class="col-md-6">

            <div class="card card-widget">
                <CardHeader />

                <div class="card-body">

                    <p>Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at</p>

                    <p>the coast of the Semantics, a large language ocean.
                        A small river named Duden flows by their place and supplies
                        it with the necessary regelialia. It is a paradisematic
                        country, in which roasted parts of sentences fly into
                        your mouth.</p>


                    <div class="attachment-block clearfix">
                        <img class="attachment-img" src="../dist/img/photo1.png" alt="Attachment Image" />

                        <div class="attachment-pushed">
                            <h4 class="attachment-heading"><a href="https://www.lipsum.com/">Lorem ipsum text generator</a></h4>

                            <div class="attachment-text">
                                Description about the attachment can be placed here.
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry... <a href="#">more</a>
                            </div>

                        </div>

                    </div>
                    <button type="button" class="btn btn-default btn-sm"><i class="fas fa-share"></i> Share</button>
                    <button type="button" class="btn btn-default btn-sm"><i class="far fa-thumbs-up"></i> Like</button>
                    <span class="float-right text-muted">45 likes - 2 comments</span>
                </div>

                <div class="card-footer card-comments">
                    <CardComment />
                    <CardComment />

                </div>

                <CardFooter />
            </div>

        </div>


    )
}