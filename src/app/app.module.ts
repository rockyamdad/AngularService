import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AreaOneComponent } from './area-one/area-one.component';
import { AreaTwoComponent } from './area-two/area-two.component';
import { SectionOneComponent } from './area-one/section-one/section-one.component';
import { SectionTwoComponent } from './area-one/section-two/section-two.component';
import { SectionthreeComponent } from './area-two/sectionthree/sectionthree.component';
import { SectionFourComponent } from './area-two/section-four/section-four.component';

@NgModule({
  declarations: [
    AppComponent,
    AreaOneComponent,
    AreaTwoComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionthreeComponent,
    SectionFourComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
