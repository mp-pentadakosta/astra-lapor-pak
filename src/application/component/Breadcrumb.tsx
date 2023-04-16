export const Breadcrumb = () => {
    return <div className = "content-header">
        <div className = "d-flex align-items-center">
            <div className = "me-auto">
                <h4 className = "page-title">Basic Tables</h4>
                <div className = "d-inline-block align-items-center">
                    <nav>
                        <ol className = "breadcrumb">
                            <li className = "breadcrumb-item">
                                <a href = "#"><i className = "mdi mdi-home-outline"></i></a></li>
                            <li className = "breadcrumb-item" aria-current = "page">Tables</li>
                            <li className = "breadcrumb-item active" aria-current = "page">Basic Tables</li>
                        </ol>
                    </nav>
                </div>
            </div>

        </div>
    </div>
}
