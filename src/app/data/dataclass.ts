import { DecimalPipe } from "@angular/common";

export interface ICategory {
    Id: number;
    title: string;
    description: string;
    link:string;
}
export interface eonetRoot {
    title: string;
    description: string;
    link: string;
    events?: (EventsEntity)[] | null;
  }
  export interface EventsEntity {
    id: string;
    title: string;
    description: string;
    link: string;
    categories?: (CategoriesEntity)[] | null;
    sources?: (SourcesEntity)[] | null;
    geometries?: (GeometriesEntity)[] | null;
  }
  export interface CategoriesEntity {
    id: number;
    title: string;
    description: string;
    link: string;
  }
  export interface SourcesEntity {
    id: string;
    url: string;
  }
  export interface GeometriesEntity {
    date: string;
    type: string;
    coordinates?: (number | ((number)[] | null)[] | null)[] | null;
  }
  