import {Component, Input} from '@angular/core';
import {LoggingService} from "../logging.service";
import {AccountsService} from "../accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: []
})
export class AccountComponent {
  @Input() account: { name: string; status: string; };
  @Input() id: number;

  constructor(private loggingService: LoggingService,
              private accountService: AccountsService) {};


  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status)
    // this.loggingService.logStatusChange(status);  // removed now logged in from accountsService.
   // this.accountService.statusUpdated.emit(status);
  }
}
