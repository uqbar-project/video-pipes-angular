/* tslint:disable:no-unused-variable */

import { FiltroClientesPipe } from './filtroClientes.pipe'

describe('Pipe: FiltroClientes', () => {
  it('create an instance', () => {
    const pipe = new FiltroClientesPipe()
    expect(pipe).toBeTruthy()
  })

  it('pipe filters & orders customer lists', () => {
    const pipe = new FiltroClientesPipe()
    const customers = [
      { nombre: 'Pepe', saldo: 1000, },
      { nombre: 'Pedrazzi', saldo: 500, },
      { nombre: 'Drago', saldo: 700, },
    ]
    const customersOrdered = pipe.transform(customers, 'dra')
    expect(customersOrdered.length).toBe(2)
    expect(customersOrdered[0].nombre).toBe('Drago')
    expect(customersOrdered[1].nombre).toBe('Pedrazzi')
  })
  
})
