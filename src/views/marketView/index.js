import React, { Component } from 'react';
import { Catalog } from '../../components/catalog';
import { FilterNavigationPanel } from '../../components/filterNavigationPanel';
export class MarketView extends Component {
    render() {
        return (
            <div className='flex flex-1' >
                <div className='' ><FilterNavigationPanel ></FilterNavigationPanel></div>
                <div className='ml-80' >
                    <div className='m-8'>
                        <Catalog ></Catalog>
                    </div>
                </div>
            </div>
        )
    }
}
