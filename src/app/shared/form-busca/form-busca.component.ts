import { MatDialog } from '@angular/material/dialog';
import { Component, input } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatIconModule} from '@angular/material/icon';
import { MatChipsModule} from '@angular/material/chips';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { ModalComponent } from '../modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-form-busca',
  standalone: true,
  imports: [ CardComponent, MatButtonToggleModule, MatIconModule, MatChipsModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatButtonModule, 
             MatNativeDateModule, MatDialogModule ],
  templateUrl: './form-busca.component.html',
  styleUrl: './form-busca.component.css'
})
export class FormBuscaComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
