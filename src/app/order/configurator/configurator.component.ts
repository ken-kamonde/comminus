import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfiguratorService } from './configurator.service';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/shared/services/data-sharing.service';
import { Parcel } from 'src/app/models/Parcel'

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.scss']
})
export class ConfiguratorComponent implements OnInit {


  parcelsObservable = new Observable<Parcel[]>();

  quantity = 1;
  discountedPizza = false;

  discountCode!:string;
  error!:string;
  total = 0;
  discountApplied=0;
  pickedPizzaAmount=0;
  packageTotal=0;
  selectedpackage!: string;
  selectedpackageIndex!: number;
  
  configuratorService: ConfiguratorService
  router!: Router;
  dataSharingService: DataSharingService;
 
  
  

  constructor(configuratorService: ConfiguratorService,router: Router,dataSharingService:DataSharingService) {
    this.configuratorService=configuratorService;
    this.router=router;
    this.dataSharingService=dataSharingService;
  }

  ngOnInit(): void {
    this.parcelsObservable=this.configuratorService.parcels;
  }


  
  // continueToShipping() {
  //   this.pickedOrder = {
  //     PizzaType: this.pickedPizza,
  //     Quantity: this.quantity,
  //     DiscountApplied: this.discountedPizza,
  //     packages: this.pickedpackages,
  //     Total:this.total
  //   }
  //   this.dataSharingService.setOrder(this.pickedOrder);
  //   this.router.navigateByUrl('/order_details');

  // }

  packageDetails() {
    
  }

}
