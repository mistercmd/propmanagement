import React, { Component } from 'react';

import NewsletterBox from './newsletterBox'
import NewsletterArchive from './newsletterarchive';
import NewsletterLatest from './newsletterLatest';

class NewsletterGrid extends Component {
    render() {
        return (
            <div classname="newsletter-grid">
                <NewsletterBox date={new Date()}/>
                <NewsletterArchive/>
                <NewsletterLatest/>

            </div>
        )
    }
}

export default NewsletterGrid;
