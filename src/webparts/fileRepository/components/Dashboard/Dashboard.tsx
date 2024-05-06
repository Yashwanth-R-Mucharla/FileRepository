import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IDashboardProps } from './IDashboardProps';
import { IDashboardState } from './IDashboardState';

export default class Dashboard extends React.Component<IDashboardProps,IDashboardState> {
    public constructor(props: IDashboardProps,state:IDashboardState){
        super(props);
        this.state={

        }
    }
    public render(): React.ReactElement<IDashboardProps> {
        const {
          
        } = this.props;
    
        return (
          <div className="container">
            Contents of Dasboard!
          </div>
        );
    }
}