import { Component } from '@angular/core';

import { IntlService } from '@progress/kendo-angular-intl';
import {
  SeriesLabelsContentArgs,
  SeriesLabelsVisualArgs,
} from '@progress/kendo-angular-charts';
import { Element, Group } from '@progress/kendo-drawing';

import { Image, Surface, Path, Text, geometry } from '@progress/kendo-drawing';
const { Rect, Point, Size, transform } = geometry;

@Component({
  selector: 'my-app',
  template: `
    <kendo-chart title="World Population by Broad Age Groups">
      <kendo-chart-legend position="bottom"></kendo-chart-legend>
      <kendo-chart-series>
        <kendo-chart-series-item
          type="pie"
          [data]="pieData"
          field="value"
          categoryField="category"
        >
        <kendo-chart-series-item-labels
        position="center"
       
      
        [visual]="labelVisual"
        >
        </kendo-chart-series-item-labels>
        </kendo-chart-series-item>
      </kendo-chart-series>
    </kendo-chart>
  `,
})
export class AppComponent {
  public pieData = [
    { category: '0-14', value: 1 },
    { category: '15-24', value: 0.1552 },
    { category: '25-54', value: 0.4059 },
    { category: '55-64', value: 0.0911 },
    { category: '65+', value: 0.0933 },
  ];

  constructor(private intl: IntlService) {}

  public labelVisual = (e: SeriesLabelsVisualArgs): Element => {
    const defaultLabel = e.createVisual();
    const value = parseFloat(e.text);
    const imageRect = e.rect;

    // Create the image
    const imageUrl = `http://www.telerik.com/kendo-angular-ui/components/drawing/assets/diego.jpg`;
    const image = new Image(imageUrl, imageRect);

    const bbox = defaultLabel.bbox();

    const group = new Group();
    group.append(image, defaultLabel);

    return group;
  };
}
