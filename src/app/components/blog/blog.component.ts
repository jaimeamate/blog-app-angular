import { Component } from '@angular/core';
import { Noticia } from '../../interfaces/noticia.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent{
  noticias: Noticia[] = [
    {
      titulo: "Viaje a la playa",
      imagen: "https://placehold.co/600x400.png",
      descripcion: "Disfruta de unas vacaciones relajantes en la costa. Arena blanca, aguas cristalinas y un clima perfecto te esperan.",
      fecha: "2024-07-15"    
    },
    {
      titulo: "Curso de programación en línea",
      imagen: "https://placehold.co/600x400.png",
      descripcion: "Aprende a programar desde cero con nuestro curso en línea. Python, JavaScript, HTML, CSS y mucho más.",
      fecha: "2024-03-01"
    }
  ]
  noticiaActual: Noticia = {
    titulo: "",
    imagen: "",
    descripcion: "",
    fecha: ""
  }

  agregarNoticia(): void {
    const camposOk: boolean = this.comprobarCampos()
    if(camposOk){
      // const fechaActual = new Date().toISOString().slice(0,10).replace(/-/g, "/");
      // this.noticiaActual.fecha = fechaActual
      //push new noticia
      this.noticias.push(this.noticiaActual)
      //clear reference
      this.noticiaActual = {
        titulo: "",
        imagen: "",
        descripcion: "",
        fecha: ""
      }
    }
  }
  comprobarCampos(): boolean {
    if(this.noticiaActual.titulo.trim() === ''){
      alert('Por favor, rellena el campo titulo')
      return false
    }
    if(this.noticiaActual.imagen.trim() === ''){
      alert('Por favor, rellena el campo imagen')
      return false
    }
    if(this.noticiaActual.descripcion.trim() === ''){
      alert('Por favor, rellena el campo descripcion')
      return false
    }
    if(this.noticiaActual.fecha.trim() === ''){
      alert('Por favor, rellena el campo fecha')
      return false
    }
    
    return true
  }
  //capturing de selected img and converting it to base64
  capturarImagen(ev:any): void{
    if(ev.target.files[0]){
      const reader: any = new FileReader()
      reader.onload = (ev: any) => {
        this.noticiaActual.imagen = ev.target.result
      }
      reader.readAsDataURL(ev.target.files[0])
    }
  }
}
