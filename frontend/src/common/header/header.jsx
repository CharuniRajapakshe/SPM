import React from 'react';
import './header.css';


export class Header extends React.Component {


    render() {
        return (
            <div className="header">
                <div className="row">
                    <div className="col-lg-2">
                        <div  className="title">
                            <strong>Prodigies Industrial Training Management System</strong>1.0
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

