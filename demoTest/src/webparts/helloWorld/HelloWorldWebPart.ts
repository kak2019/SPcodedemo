import { Version } from '@microsoft/sp-core-library';
import {
  PropertyPaneContinentSelector,
  IPropertyPaneContinentSelectorProps
} from '../../controls/PropertyPaneContinentSelector/components/PropertyPaneContinentSelector';
import {
  IPropertyPaneConfiguration,
  //添加了paneSlider 就可以滑动了
  PropertyPaneSlider,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './HelloWorldWebPart.module.scss';
import * as strings from 'HelloWorldWebPartStrings';

export interface IHelloWorldWebPartProps {
  description: string;
  myContinent: string;
  numContinentsVisited: number;
}

export default class HelloWorldWebPart extends BaseClientSideWebPart<IHelloWorldWebPartProps> {
  //onContinentSelectionChange: any;
  private validateContinents(textboxValue: string): string {
    const validContinentOptions: string[] = ['africa', 'antarctica', 'asia', 'australia', 'europe', 'north america', 'south america'];
    const inputToValidate: string = textboxValue.toLowerCase();
  
    return (validContinentOptions.indexOf(inputToValidate) === -1)
      ? 'Invalid continent entry; valid options are "Africa", "Antarctica", "Asia", "Australia", "Europe", "North America", and "South America"'
      : '';
  }
  private onContinentSelectionChange(propertyPath: string, newValue: any): void {
    const oldValue: any = this.properties[propertyPath];
    this.properties[propertyPath] = newValue;
    this.render();
  }

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.helloWorld }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
              <span class="${ styles.title }">Welcome to SharePoint!</span>
              <p class="${ styles.subTitle }">Customize SharePoint experiences using Web Parts.</p>
              <p class="${ styles.description }">${escape(this.properties.description)}</p>
              <p class="${ styles.description }">Continent where I reside: ${escape(this.properties.myContinent)}</p>
<p class="${ styles.description }">Number of continents I've visited: ${this.properties.numContinentsVisited}</p>
              <a href="https://aka.ms/spfx" class="${ styles.button }">
                <span class="${ styles.label }">Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
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
                }),
                // PropertyPaneTextField('myContinent', {
                //   label: 'Continent where I currently reside',
                //   onGetErrorMessage: this.validateContinents.bind(this)
                // }),
                new PropertyPaneContinentSelector('myContinent', <IPropertyPaneContinentSelectorProps>{
                  label: 'Continent where I currently reside',
                  disabled: false,
                  selectedKey: this.properties.myContinent,
                  onPropertyChange: this.onContinentSelectionChange.bind(this),
                }),
                PropertyPaneSlider('numContinentsVisited', {
                  label: 'Number of continents I\'ve visited',
                  min: 1, max: 7, showValue: true,
                }),
                
              ]
            }
          ]
        }
      ]
    };
  }
}
