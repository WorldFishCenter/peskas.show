import CounterUp from "../elements/CounterUp";

function StatsSection() {
    return (
        <div className="section-box mt-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-1" />
                    <div className="col-lg-10">
                        <div className="bd-bottom pb-20 mb-40 text-mb-center">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30">
                                    <span className="text-display-3 color-green-900">
                                        +<CounterUp count={8} time={3} />
                                    </span>
                                    <p className="text-body-text color-gray-500 pl-40t">
                                        Years of operation
                                    </p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30">
                                    <span className="text-display-3 color-green-900">
                                        +<CounterUp count={6} time={3} />
                                    </span>
                                    <p className="text-body-text color-gray-500 pl-40">
                                        Countries active
                                    </p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30">
                                    <span className="text-display-3 color-green-900">
                                        +<CounterUp count={140} time={3} />k
                                    </span>
                                    <p className="text-body-text color-gray-500 pl-40">
                                        Fishing trips tracked
                                    </p>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30">
                                    <span className="text-display-3 color-green-900">
                                        +<CounterUp count={298} time={3} />
                                    </span>
                                    <p className="text-body-text color-gray-500 pl-40">
                                        Tonnes of catch recorded
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1" />
                </div>
            </div>
        </div>
    );
}

export default StatsSection;

