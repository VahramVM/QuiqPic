import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/layouts/servises/data.service';
import { OrderDatasService } from '../shared/layouts/servises/order-datas.service';
import { AuthServices } from '../shared/layouts/servises/services';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  public preview: boolean = false;

  constructor(
    private service: AuthServices,
    private router: Router, private order: OrderDatasService, private data: DataService) { }

  ngOnInit(): void {
    // console.log(this.site.isCarouselOpen);
    
  }

  public logOut() {
    this.service.logout();    
  }

  public redirectPreview(): void {

    this.preview = false;
    this.router.navigate(['/main']);
    setTimeout(() => {
      location.reload();
    }, 10);
  }


}
