import { Data } from './models/class/data';
import { InterceptorQueteService } from './services/interceptor-quete.service';
import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'interceptor';
  datas: Data[] = [];
  constructor(private service: InterceptorQueteService) {}

  ngOnInit() {
    this.service.getAll().subscribe((data: Data) => {
      this.datas.push(data);
      console.log(this.datas);
    });
  }
}
