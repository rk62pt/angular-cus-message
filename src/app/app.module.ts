import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CusMessageComponent } from './cus-message/cus-message.component';
import { CusMessageService } from './cus-message/cus-message.service';
import { MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule 
  ],
  entryComponents: [
    CusMessageComponent
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    CusMessageComponent
  ],
  bootstrap:    [ AppComponent ],
  providers: [CusMessageService],
  exports: [ MatDialogModule ]
})
export class AppModule { }
