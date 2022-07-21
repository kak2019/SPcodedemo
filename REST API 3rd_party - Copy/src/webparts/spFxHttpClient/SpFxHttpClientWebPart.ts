import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'SpFxHttpClientWebPartStrings';
import SpFxHttpClient from './components/SpFxHttpClient';
import { ISpFxHttpClientProps } from './components/ISpFxHttpClientProps';
import {
  HttpClient,
  HttpClientResponse
} from '@microsoft/sp-http';
export interface ISpFxHttpClientWebPartProps {
  //apolloMissionImage: any;
  rangeImage:any;
}

export default class SpFxHttpClientWebPart extends BaseClientSideWebPart<ISpFxHttpClientWebPartProps> {

  public render(): void {
    if (!this.renderedOnce) {
      this._getApolloImage()
        .then(response => {
          const element: React.ReactElement<ISpFxHttpClientProps > = React.createElement(
            SpFxHttpClient,
            {
    
              rangeImage:response.lives[0],

          
            }
          );
  
          ReactDom.render(element, this.domElement);
        });
    }
  }
  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  private _getApolloImage(): Promise<any> {
    return this.context.httpClient.get(
      //`https://images-api.nasa.gov/search?q=Apollo%204&media_type=image`,
      'https://restapi.amap.com/v3/weather/weatherInfo?key=f9d409b56a399734a1fc1554ff2cea47&city=610525',
      HttpClient.configurations.v1
    )
    .then((response: HttpClientResponse) => {
      return response.json();
    })
    .then(jsonResponse => {
      return jsonResponse;
    }) as Promise<any>;
  }
  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('description', {
                  label: strings.DescriptionFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
