import React from 'react';
import './BetPage.css';

const BetPage = () => {
        return (
                <div class = "container">
                    <div className = "row">
                        <div className = "col-sm-4">
                            Event
                        </div>
                        <div className = "col-sm-4 col-border">
                            <div className = "col-border-padding">
                                <button type = "button" className = "btn btn-success">
                                    +100
                                </button>
                            </div>
                        </div>
                        <div className = "col-sm-4 col-border">
                            <div className = "col-boder-padding">
                                <button type = "button" className = "btn btn-danger">
                                    -100
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        )
}

export default BetPage;
