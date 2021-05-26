import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlockUIHttpModule } from 'ng-block-ui/http';
import { BlockUIModule } from 'ng-block-ui';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { BlockTemplateComponent } from './@block-template/block-template.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesModule } from './pages/pages.module';
import { AuthGuard } from './@security/auth.guard';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { ErrorInterceptor } from './interceptors/error.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BlockUIHttpModule.forRoot({
      blockAllRequestsInProgress: true
    }),
    BlockUIModule.forRoot({
      template: BlockTemplateComponent
    }),
    PagesModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 9000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true
    })
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
