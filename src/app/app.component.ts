import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private appService: AppService) { }

  title = 'test-angular';

  downloadExcel() {
    this.appService.downloadFile().subscribe(res => {
      this.downloadFile(res, 'sathia.xlsx');
    });
  }

  downloadFile(data: Blob, fileName: any) {
    var link = document.createElement('a');
    link.href = window.URL.createObjectURL(data);
    link.download = fileName;
    link.click();
  }

}
