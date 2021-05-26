import { NgModule } from "@angular/core";
import { PagesComponent } from './pages.component';
import { DocumentComponent } from './document/document.component';
import { NotaryComponent } from './notary/notary.component';
import { RepositoryComponent } from './repository/repository.component';
import { DomainComponent } from './domain/domain.component';
import { UserComponent } from './user/user.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
@NgModule({
    declarations: [
        PagesComponent,
        DocumentComponent,
        NotaryComponent,
        RepositoryComponent,
        DomainComponent,
        UserComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PagesRoutingModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class PagesModule {}