import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventModel } from '../../models/event.model';
import { EventsService } from '../../service/adm-events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent {

  public form!: FormGroup;
  public event!: EventModel;
  public eventId!: string;

  constructor(
    private eventsService: EventsService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.eventId = this.route.snapshot.params['id'];
    if (this.eventId) {
      this.updateForm();
    }
  }


  private buildForm(): void {
    this.form = new FormGroup({
      id: new FormControl(),
      title: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
      date: new FormControl(null, [Validators.required]),
      local: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      address: new FormControl(null, [Validators.required]),
      createdAt: new FormControl(null),
      updateAt: new FormControl(null),
    })
  }


  public onSubmit(): void {
    const event = this.form.getRawValue();
    
    if (this.eventId) {
      this.eventsService.editEvent(event).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/adm/list/events']);
      }
      );
    } else {
      this.eventsService.saveEvent(event).subscribe(() => {
        this.form.reset();
        this.router.navigate(['/adm/list/events']);
      }
      );
    }
  }

  private updateForm(): void {
    this.eventsService.getEventById(this.eventId).subscribe(
      {
        next: (res) => {
          const event = res
          this.form.patchValue(event)
        }
      })
  }
}
