import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styles: [
  ]
})
export class ComponentsComponent {

  @Input() progreso:number = 50;

  @Output() valorSalida:EventEmitter<number> = new EventEmitter();

  get getPorcentaje() {
    return `${ this.progreso }%`;
  }

  cambiarValor(valor:number) {

    if(this.progreso>=100){
      this.valorSalida.emit(100-5);
      this.progreso=100-5;
    }

    if(this.progreso<=0){
      this.valorSalida.emit(0+5);
      console.log(this.progreso, 'menos de 0');
      this.progreso=0+5;
      console.log(this.progreso, 'menos de 0, quitandole 5');
    }

    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }

}
