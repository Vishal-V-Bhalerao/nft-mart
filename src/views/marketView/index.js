import React, { Component } from 'react';
import { Catalog } from '../../components/catalog';
import { NavigationPanel } from '../../components/navigationPanel';
export class MarketView extends Component {
    render() {
        return (
            <div className='grid grid-cols-12 gap-2' >
                <div className='col-span-2' ><NavigationPanel ></NavigationPanel></div>
                <div className='col-span-10' ><Catalog ></Catalog></div>
            </div>
        )
    }
}
