import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-reserva-confirmada',
  templateUrl: './modal-reserva-confirmada.component.html',
  styleUrls: ['./modal-reserva-confirmada.component.css']
})
export class ModalReservaConfirmadaComponent {

  public uid: string = "";

  OnInit(): void {
    this.uid = Math.floor(Math.random() * 20).toString().replace(".","")
  }
}
