import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-documentation-wrapper',
  templateUrl: './documentation-wrapper.component.html',
  styleUrls: ['./documentation-wrapper.component.scss']
})
export class DocumentationWrapperComponent implements OnInit {

  public video:any="https://badgerapi-9b2a2.firebaseapp.com/assets/public/index.html";
  
  constructor() { }

  ngOnInit() {
    document.getElementsByTagName("iframe")[0].className = "fullScreen";
  }

}
