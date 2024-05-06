import * as React from 'react';
//import styles from './FileRepository.module.scss';
import { IFileRepositoryProps } from './IFileRepositoryProps';
import { IFileRepositoryState } from './IFileRepositoryState';
import FileUpload from './FileUpload/FileUpload';
import Dashboard from './Dashboard/Dashboard';
import Home from './Home/Home';
//import { Router, HashRouter } from 'react-router-dom';
import { Route, HashRouter } from 'react-router-dom';
//import { escape } from '@microsoft/sp-lodash-subset';

export default class FileRepository extends React.Component<IFileRepositoryProps, IFileRepositoryState> {
  public constructor(props: IFileRepositoryProps, state: IFileRepositoryState){
    super(props);
    this.state={

    }
  }

  public render(): React.ReactElement<IFileRepositoryProps> {
    const {
      
    } = this.props;

    return (
      <div>
        <HashRouter>
          <Route exact path="/"><Home description={this.props.description} isDarkTheme={this.props.isDarkTheme} environmentMessage={this.props.environmentMessage} hasTeamsContext={this.props.hasTeamsContext} userDisplayName={this.props.userDisplayName} spHttpClient={this.props.spHttpClient} siteUrl={this.props.siteUrl}/></Route>
          <Route path="/FileUpload"><FileUpload description={this.props.description} isDarkTheme={this.props.isDarkTheme} environmentMessage={this.props.environmentMessage} hasTeamsContext={this.props.hasTeamsContext} userDisplayName={this.props.userDisplayName} spHttpClient={this.props.spHttpClient} siteUrl={this.props.siteUrl}/></Route>
          <Route path="/Dashboard"><Dashboard description={this.props.description} isDarkTheme={this.props.isDarkTheme} environmentMessage={this.props.environmentMessage} hasTeamsContext={this.props.hasTeamsContext} userDisplayName={this.props.userDisplayName} spHttpClient={this.props.spHttpClient} siteUrl={this.props.siteUrl}/></Route>
        </HashRouter> 
      </div>
    );
  }
}
