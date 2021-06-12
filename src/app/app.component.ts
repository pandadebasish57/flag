import { Component, OnInit } from "@angular/core";
import { DataService } from "./data.service";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "flag";

  objectKeys = Object.keys;
  public countries: any;

  constructor(
    private data: DataService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
  }
  ngOnInit() {
    this.data.getCountries().subscribe((res) => {
      this.countries = res;
      console.log(this.countries[0].currencies[0].name);
    });
  }

  getPath(name: string): string {
    return name;
  }
}