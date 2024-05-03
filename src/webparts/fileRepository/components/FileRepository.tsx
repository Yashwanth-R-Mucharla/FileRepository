import * as React from 'react';
//import styles from './FileRepository.module.scss';
import { IFileRepositoryProps } from './IFileRepositoryProps';
import { IFileRepositoryState } from './IFileRepositoryState';
import FileUpload from './FileUpload/FileUpload';
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
        <FileUpload description={this.props.description} isDarkTheme={this.props.isDarkTheme} environmentMessage={this.props.environmentMessage} hasTeamsContext={this.props.hasTeamsContext} userDisplayName={this.props.userDisplayName} spHttpClient={this.props.spHttpClient} siteUrl={this.props.siteUrl}/>
      </div>
    );
  }
}
