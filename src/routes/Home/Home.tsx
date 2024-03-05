import * as React from 'react';
import { Helmet } from 'react-helmet';

import Accordion from '@/components/Accordion/Accordion';
import Alert from '@/components/Alert/Alert';
import Badge from '@/components/Badge/Badge';
import Button from '@/components/Button/Button';
import FlexContainer from '@/components/FlexContainer/FlexContainer';
import Tooltip from '@/components/Tooltip/Tooltip';

import './Home.styles.scss'

const Home: React.FC = () => {
    return (
        <React.Fragment>
            <Helmet>
                <title>Home</title>
                <meta name="home" content="A description of my amazing React app" />
            </Helmet>

            

        </React.Fragment>
    )
};

export default Home