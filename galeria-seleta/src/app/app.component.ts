import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
<<<<<<< HEAD
  imports: [HomeComponent, FooterComponent, HeaderComponent, RouterOutlet],
=======
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
>>>>>>> affb5e0360b658844bfe9b6a46c23c9ade112186
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'galeria-seleta';
}