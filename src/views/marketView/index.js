import React, { Component } from 'react';
import { Catalog } from '../../components/catalog';

export class MarketView extends Component {
    render() {
        return (
            <>
                <Catalog></Catalog>
                <h2>from Main page</h2>
            </>
        )
    }
}
