import { Pipe, PipeTransform } from '@angular/core'
import { sortBy } from 'lodash'

@Pipe({
  name: 'filtroClientes'
})
export class FiltroClientesPipe implements PipeTransform {

  transform(clientes: Cliente[], nombreABuscar = ''): Cliente[] {
    const clientesFiltrados = 
      clientes.filter(
        (cliente) => 
          cliente.nombre.toUpperCase().includes(nombreABuscar.toUpperCase()))
    return sortBy(clientesFiltrados, 'nombre')
  }

}

type Cliente = {
  nombre: string,
  saldo: number,
}