import React from 'react';
import Link from 'next/link';
//Components
import Hero from '../components/Hero';
import Banner from '../components/Banner';

export default function Error() {
    return (
        <Hero>
            <Banner title="404" subtitle="page not found">
                <Link href="/">
                    <a  className="btn-primary">Back to Home</a>
                </Link>
            </Banner>
        </Hero>
    )
}
