export default function Header() {
    return (
        <div className="px-3 py-2 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/"
                       className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap">
                            <use href="#bootstrap"></use>
                        </svg>
                    </a>

                    <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                        <li>
                            <a href="/" className="nav-link text-white">
                                <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                    <use href="#home"></use>
                                </svg>
                                Personal Cards
                            </a>
                        </li>
                        <li>
                            <a href="businessTrips" className="nav-link text-white">
                                <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                    <use href="#speedometer2"></use>
                                </svg>
                                Business Trips
                            </a>
                        </li>
                        <li>
                            <a href="sickList" className="nav-link text-white">
                                <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                    <use href="#table"></use>
                                </svg>
                                Sick List
                            </a>
                        </li>
                        <li>
                            <a href="subdivisions" className="nav-link text-white">
                                <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                    <use href="#grid"></use>
                                </svg>
                                Subdivisions
                            </a>
                        </li>
                        <li>
                            <a href="story" className="nav-link text-white">
                                <svg className="bi d-block mx-auto mb-1" width="24" height="24">
                                    <use href="#grid"></use>
                                </svg>
                                Salary Story
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}