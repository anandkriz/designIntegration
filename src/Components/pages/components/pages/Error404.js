import React from 'react'
import { BreadCrumb } from '../../Dashboard2Components/Breadcrumb'
import { FaSearch } from 'react-icons/fa';

function Error404() {
    return (
        <div class="content-wrapper">
            <BreadCrumb heading="404 Error Page" />
            <section class="content">
                <div class="error-page">
                    <h2 class="headline text-warning"> 404</h2>
                    <div class="error-content">
                        <h3><i class="fas fa-exclamation-triangle text-warning"></i> Oops! Page not found.</h3>
                        <p>
                            We could not find the page you were looking for.
                            Meanwhile, you may return to dashboard or try using the search form.
                        </p>
                        <form class="search-form">
                            <div class="input-group">
                                <input type="text" name="search" class="form-control" placeholder="Search" />
                                <div class="input-group-append">
                                    <div className='bg-warning d-flex justify-content-center align-items-center' style={{ width: "30px" }}><FaSearch onClick={() => alert('clicked')} /></div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Error404