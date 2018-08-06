import React, { Component } from 'react';


class TabNav extends Component {
   render() {
    return (
        <div className="tab-nav">
            <div classname="tab-nav__tabs">
            {
                this.props.tabs.map((tab, index) => {
                    return <a classname="tav-nav__tab">{tab.title}</a>
                })
            }
            </div>
            <div></div>
        </div>
    )
   }
}

export default TabNav;
