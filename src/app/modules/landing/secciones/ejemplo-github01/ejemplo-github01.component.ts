import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ejemplo-github01",
  templateUrl: "./ejemplo-github01.component.html",
  styleUrls: ["./ejemplo-github01.component.scss"]
})
export class EjemploGithub01Component implements OnInit {
  language = "json";
  content = `
  {
    "period": "1m",
    "numRecords": 500,
    "rawHistoricData":[
      {
        "open_time": "1566625980000",
        "open": 0.2592,
        "high": 0.2592,
        "low": 0.2592,
        "close": 0.2592,
        "volume": 1200
        }
    ]
  }
  `;
  language2 = "js";
  content2 =
    "GET https://metacortex.herokuapp.com/data/historic?base=IOTA&counter=USDT&historicInterval=1m";
  constructor() {}

  ngOnInit() {}
}
