import {Component} from '@angular/core';
import {LoggingService} from "../logging.service"; // note: still leave the LoggingService import
import {AccountsService} from "../accounts.service";

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: []  // note:  removed AccountsService to prevent Hierarchical Injection creating
})                             // a new and different instance to the instance displayed in app-component.
// note: Also removed LoggingService from providers[] as we have added it to app.module.ts
export class NewAccountComponent {

  constructor(private loggingService: LoggingService,  // note: still leave the LoggingService in the constructor
              private accountsService: AccountsService) {

      this.accountsService.statusUpdated.subscribe(
        (status: string) => alert('New Status: ' + status)
      );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    // this.loggingService.logStatusChange(accountStatus);    // removed now logged in from accountsService.
    this.accountsService.statusUpdated.emit(accountStatus);

  }
}
