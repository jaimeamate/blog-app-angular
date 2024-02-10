import { Component } from '@angular/core';
import { Noticia } from '../../interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent{
  noticias: Noticia[] = [
    {
      titulo: "Viaje a la playa",
      imagen: "url_de_la_imagen_1.jpg",
      descripcion: "Disfruta de unas vacaciones relajantes en la costa. Arena blanca, aguas cristalinas y un clima perfecto te esperan.",
      fecha: "2024-07-15"    
    },
    {
      titulo: "Curso de programación en línea",
      imagen: "url_de_la_imagen_2.jpg",
      descripcion: "Aprende a programar desde cero con nuestro curso en línea. Python, JavaScript, HTML, CSS y mucho más.",
      fecha: "2024-03-01"
    }
  ]
  noticiaActual!: Noticia

  
}
