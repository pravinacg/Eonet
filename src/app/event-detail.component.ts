import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventsEntity} from './data/dataclass';
@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
 
})
export class EventDetailComponent implements OnInit {
  @Input() event: EventsEntity;

  constructor() { }

  ngOnInit() {
  }

}