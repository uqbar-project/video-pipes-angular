import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Clientes'
  textoBusqueda = ''
  cliente = {
    nombre: 'Emiliano Martínez',
    saldo: 145.89,
    fechaNacimiento: new Date(1991, 10, 2),
  }
  clientes = [
    {
      nombre: 'Contardo, Juan',
      saldo: 530,
    },
    {
      nombre: 'Mosquera, Julián',
      saldo: 1026.44,
    },
    {
      nombre: 'Wiedensee, Cynthia',
      saldo: 240.11,
    },
    {
      nombre: 'del Valle, Cristina',
      saldo: 555.12,
    },
    {
      nombre: 'Pampa, Suma',
      saldo: 76,
    },
    {
      nombre: 'Paz, Nehuén',
      saldo: 800.42,
    },
    {
      nombre: 'Riggi, Emiliano',
      saldo: 1026.44,
    }
  ]
}
