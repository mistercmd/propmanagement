import React, { Component } from 'react';

import NewsletterBox from './newsletterBox'
import NewsletterArchive from './newsletterarchive';

class NewsletterGrid extends Component {
    render() {
        return (
            <div classname="newsletter-grid">
                <NewsletterBox date={new Date()}/>
                <NewsletterArchive/>
            </div>
        )
    }
}

export default NewsletterGrid;
