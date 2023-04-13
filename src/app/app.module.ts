import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PostComponent } from './components/post/post.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';

import { MessagesService } from './services/messages.service';
import { AvatarComponent } from './components/avatar/avatar.component';

@NgModule({
  declarations: [ //Components
    AppComponent,
    HeaderComponent,
    PostComponent,
    TweetComponent,
    HomeComponent,
    FooterComponent,
    AvatarComponent
  ],
  imports: [ // Modulos
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MessagesService], //Services
  bootstrap: [AppComponent]
})
export class AppModule { }
