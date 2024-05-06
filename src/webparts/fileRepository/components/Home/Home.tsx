import * as React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { IHomeProps } from './IHomeProps';
import { IHomeState } from './IHomeState';
import { Link } from 'react-router-dom';

export default class Home extends React.Component<IHomeProps,IHomeState> {
    public constructor(props: IHomeProps,state:IHomeState){
        super(props);
        this.state={

        }
    }
    public render(): React.ReactElement<IHomeProps> {
        const {
          
        } = this.props;
    
        return (
          <div className="container">
            Home Page.
            <div>
                <p><Link to="/Dashboard"><button>Dashboard</button></Link></p>
                <p><Link to="/FileUpload"><button>File Upload</button></Link></p>
            </div>
          </div>
        );
    }
}