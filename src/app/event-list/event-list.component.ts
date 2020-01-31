import { Component, OnInit } from '@angular/core';
import { EonetService } from '../service/eonet-service';
import { eonetRoot} from '../data/dataclass';
import { EventsEntity} from '../data/dataclass';
import { CategoriesEntity} from '../data/dataclass';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

constructor(private eonet: EonetService) { }

ngOnInit() {
   this.getAllEvents();
   this.getAllCategories();
}
  
  selectedEvent: EventsEntity;
  eonetresult: EventsEntity;

  SearchValue :string ='';
  eventLst: eonetRoot[] = [];
  testEvent:any =[];
  errorMessage: string ="";
  eonetevents:EventsEntity[]=[];
  eventCatgory:CategoriesEntity[]=[];
  categoriLst:CategoriesEntity[]=[];
  selectedCategory:CategoriesEntity[]=[];
  selectedStatus:string="";
  sortingDir:string="desc";
  startDate:string="";
  EndDate:string="";

  onSelect(event: EventsEntity): void {
    this.selectedEvent = event;
    this.eventCatgory=event.categories;
  }

// GET ALL CATEGORIES
  getAllCategories()
  {
   
    this.eonet.getCatagories()
    .subscribe(data => {
      this.testEvent = data;
     if(data != undefined && data !== null){
           
           this.categoriLst=this.testEvent = data;;
         
           console.log(this.categoriLst);    
      }

    },
    error => this.errorMessage = <any>error);
  }

  //get event by dates
  searchEventbyDate()
  {
    this.eonet.searchEventByDate(this.startDate,this.EndDate)
        .subscribe(data => {
          this.testEvent = data;
          console.log(data);
         if(data != undefined && data !== null){
                console.log(data["title"]);
               this.eonetevents= this.testEvent;
               console.log(this.eonetevents);    
          }
    
        },
        error => this.errorMessage = <any>error);
  }
  sort(col)
  {
   this.sortingDir= (this.sortingDir=="desc"?"asc":"desc");
   this.eonet.sortCol(this.sortingDir,col)
        .subscribe(data => {
          this.testEvent = data;
          console.log(data);
         if(data != undefined && data !== null){
                
               this.eonetevents= this.testEvent;
               console.log(this.eonetevents);    
          }
    
        },
        error => this.errorMessage = <any>error);
  }
  //Seacrh Event
  searchEvent()
  {
      this.eonet.searchEvent(this.SearchValue)
      .subscribe(data => {
 
        console.log(data);
       if(data != undefined && data !== null){
              console.log(data["title"]);
            
              let kv1: EventsEntity = 
              {
                  title: data["title"],
                  description: data["description"],
                  link: data["link"],
                  id:data["id"],
                  categories:data["categories"]
                }
              
              console.log(kv1);
              this.eonetevents=[];
             this.eonetevents.push(kv1);
          };    
        },
      
      
      error => this.errorMessage = <any>error);
  }

  //Get all events
  getAllEvents()
    {
        this.eonet.getAllEvents()
        .subscribe(data => {
          this.testEvent = data;
          console.log(data);
         if(data != undefined && data !== null){
                console.log(data["title"]);
               this.eonetevents= this.testEvent;
               console.log(this.eonetevents);    
          }
    
        },
        error => this.errorMessage = <any>error);
    }
    
   

}
