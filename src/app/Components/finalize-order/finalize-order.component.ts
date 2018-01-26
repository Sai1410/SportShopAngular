import { Person } from '../../Classes/Person';
import { Order } from '../../Classes/order';
import { BagService } from '../../services/bag.service';
import { FinalizeService } from '../../services/finalize.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-finalize-order',
  templateUrl: './finalize-order.component.html',
  styleUrls: ['./finalize-order.component.css'],
  providers: [ FinalizeService ]
})
export class FinalizeOrderComponent implements OnInit {
 
  Personaldata = new Person ('', '', '');
  order: Order[];
  warningName: string;
  warningAddress: string;
  warningSurname: string;
  constructor(private finalizeService: FinalizeService, private router: Router, private bagService: BagService) { }

  ngOnInit() {
    this.getOrder();
  }
  
  getOrder(): void {
    this.bagService.getOrder()
      .subscribe(order => this.order = order);
  }  
  
  validateOrEnd(): void {

    this.warningName = this.finalizeService.validateName(this.Personaldata.name);
    this.warningSurname = this.finalizeService.validateName(this.Personaldata.surname);
    this.warningAddress = this.finalizeService.validateAddress(this.Personaldata.address);
    if (this.warningName == null && this.warningAddress == null && this.warningSurname == null) {
      this.finalizeService.addOrder(this.Personaldata, this.order).subscribe();
      this.bagService.removeOrder().subscribe();
      this.router.navigate(['/EndingMessage']); 
    }
  }
}
