import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  datas: any = [
    {
      key: 1,
      value: "a",
      items: [
        { key: 1, value: "Sub value of key 1" },
        { key: 2, value: "Sub value of key 1" },
      ]
    },
    {
      key: 2,
      value: "b",
      items: [
        { key: 1, value: "Sub value of key 2" },
        { key: 2, value: "Sub value of key 2" },
      ]
    },
    {
      key: 3,
      value: "c",
      items: [
        { key: 1, value: "Sub value of key 3" },
        { key: 2, value: "Sub value of key 3" },
      ]
    },
    {
      key: 4,
      value: "d",
      items: [
        { key: 1, value: "Sub value of key 4" },
        { key: 2, value: "Sub value of key 4" },
      ]
    }
  ];
  person: number = 0;
  ids = [0, 1, 2, 3, 4];
}
