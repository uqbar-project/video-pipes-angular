import { TestBed } from '@angular/core/testing'
import { AppComponent } from './app.component'
import { FiltroClientesPipe } from './filtroClientes.pipe'

import './app.module'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FiltroClientesPipe
      ],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

})
