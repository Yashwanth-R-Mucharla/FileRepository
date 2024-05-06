import * as React from 'react';
import { IFileUploadProps } from './IFileUploadProps';
import { IFileUploadState } from './IFileUploadState';
import 'bootstrap/dist/css/bootstrap.min.css';
import {SPHttpClient, SPHttpClientResponse} from "@microsoft/sp-http";

export default class FileUpload extends React.Component<IFileUploadProps, IFileUploadState> {
    public constructor(props: IFileUploadProps,state: IFileUploadState){
        super(props);
        this.state = {
            title: "",
            file: null,
            titleList: "TitleOfBook",
            bookList:"FileOfBook",
        }
    }
    public handleTitleChange(e:any){
        this.setState({title: e.target.value});
    }
    public handleFileChange(e:any){
        this.setState({file:e.target.value.files[0]});
    }
    public handleSubmit(){
        
            console.log(this.state.title);
            let commentBody = this.state.title;
            console.log(commentBody);
            /*let commentBody = "SP.Data."+this.state.titleList+"ListItem";
            commentBody  = "{__metadata:{'type':'"+commentBody+"'},";
            commentBody += "Title:'"+this.state.title+"'";
            commentBody += "}";
            console.log(commentBody);
            this.createItem(this.props.spHttpClient,this.props.siteUrl,commentBody,this.state.titleList);
            alert("Entry added successfully!");*/
    }
    public createItem(requester: SPHttpClient, siteUrl: string, data: any, listName: string): any{
        try {
          return requester.post(`${siteUrl}/_api/web/lists/getbytitle('${listName}')/items`,
              SPHttpClient.configurations.v1,
              {
                  headers: {
                      "Accept": "application/json;odata=verbose",
                      'Content-type': 'application/json;odata=verbose',
                      "odata-version": ""
                  },
                  body: data
              })
              .then((response: SPHttpClientResponse) => {
                  console.log(response.json());
                  return response.json();
              })
              .then((json: any) => {
                  console.log(json);
                  return (json);
              });
      } 
      catch (error) {
          console.log(`Error occured in addItems method in Factory.ts. Error message: ${error.message}`);
          throw error;
      }
    }
    public render(): React.ReactElement<IFileUploadProps> {
        const {
          
        } = this.props;
    
        return (
          <div className="container">
            <div>
                Title: &ensp;<input type='text' className="form-control form-control-sm" placeholder="Enter Title" onChange={this.handleTitleChange.bind(this)}/>
            </div>
            <div className="mt-4">
                <input className="form-control" type="file" id="formFile" onChange={this.handleFileChange.bind(this)}/>
            </div>
            <div className="mt-4">
                <button type="button" className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Submit</button>
            </div>
          </div>
        );
    }
}