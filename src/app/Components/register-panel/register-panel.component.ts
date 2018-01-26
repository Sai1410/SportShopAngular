import { User } from '../../Classes/User';
import { RegistrationService } from '../../services/registration.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-panel',
  templateUrl: './register-panel.component.html',
  styleUrls: ['./register-panel.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [ RegistrationService ]
})
export class RegisterPanelComponent implements OnInit {

  UserData = new User('', '', '', '', '', '');
  users: User[];
  warningLogin: string;
  warningPass: string;
  warningName: string;
  warningAddress: string;
  warningSurname: string;
  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit() {
    this.getUsers();
  }
  
  validate(): void {
    this.warningName = this.registrationService.validateName(this.UserData.name);
    this.warningAddress = this.registrationService.validateAddress(this.UserData.address);
    this.warningSurname = this.registrationService.validateSurname(this.UserData.surname);
    this.warningPass = this.registrationService.validatePass(this.UserData.password);
    this.warningLogin = this.registrationService.validateLogin(this.UserData.login, this.users);
    
    if (this.warningName == null && this.warningAddress == null && this.warningSurname == null && this.warningPass == null && this.warningLogin == null) {
      this.addUser();
      this.router.navigate(['/UserPanel']); 
    }
  }
  
  getUsers() {
    this.registrationService.getUsers().subscribe(users => this.users = users);
  }
  
  addUser(): void {
    this.registrationService.addUser(this.UserData).subscribe();
  }
}
