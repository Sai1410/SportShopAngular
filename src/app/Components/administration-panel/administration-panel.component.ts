import { AdminPanelService } from '../../services/admin-panel.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-administration-panel',
  templateUrl: './administration-panel.component.html',
  styleUrls: ['./administration-panel.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [AdminPanelService]
})
export class AdministrationPanelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
