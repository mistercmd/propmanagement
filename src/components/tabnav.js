import React, { Component } from 'react';


class TabNav extends Component {
   render() {
    return (
        <div className="tab-nav">
            <div classname="tab-nav__tabs">
            {
                this.props.tabs.map((tab, index) => {
                    const className = `tab-nav__tab ${tab.active ? 'tab-nav__Active' : ''}`
                    return <a key={index} onClick={() => this.props.handleClick(tab.title)}classname={className}>{tab.title}</a>
                })
            }
            </div>
            {
                this.props.tabs.map((tab, index) => {
                    if(tab.active) {
                        return (
                        <div key={index} className="tab-nav__component">
                            {tab.component}
                        </div>
                        )
                    }
                })
            }
        </div>
    )
   }
}

export default TabNav;
