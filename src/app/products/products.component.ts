import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products = [
    {"id":1,"name":"Roll","description":"Roll is a street-food dish originating from Kolkata, India. In its original form, it is a skewer-roasted kebab wrapped in a paratha bread","price":20.0,"item":true,"master":false,"available":true,"company":{"id":1,"name":"KRoll","address":"Malviya Nagar","contactName":null,"contactNumber":null},"items":[],"selected":false},
    {"id":2,"name":"Omlett","description":"In cuisine, an omelette or omelet is a dish made from beaten eggs quickly fried","price":30.0,"item":true,"master":false,"available":true,"company":{"id":1,"name":"KRoll","address":"Malviya Nagar","contactName":null,"contactNumber":null},"items":[],"selected":false},
    {"id":3,"name":"Paratha","description":"A paratha is a flatbread that originated in the Indian subcontinent. Paratha is an amalgamation of the words parat and atta.","price":35.0,"item":true,"master":false,"available":true,"company":{"id":1,"name":"KRoll","address":"Malviya Nagar","contactName":null,"contactNumber":null},"items":[],"selected":false},
    {"id":4,"name":"Thali","description":"meal made up of a selection of various dishes. It simply means a round platter used to serve food.","price":60.0,"item":true,"master":false,"available":true,"company":{"id":1,"name":"KRoll","address":"Malviya Nagar","contactName":null,"contactNumber":null},"items":[],"selected":false},
    {"id":5,"name":"Chicken Chowmin","description":"Noodles are a staple food in many cultures made from unleavened dough which is stretched.","price":45.0,"item":true,"master":false,"available":true,"company":{"id":1,"name":"KRoll","address":"Malviya Nagar","contactName":null,"contactNumber":null},"items":[],"selected":false},
    {"id":6,"name":"Veg","description":null,"price":0.0,"item":false,"master":true,"available":true,"company":{"id":1,"name":"KRoll","address":"Malviya Nagar","contactName":null,"contactNumber":null},"items":[],"selected":false},
    {"id":7,"name":"Non Veg","description":null,"price":0.0,"item":false,"master":true,"available":true,"company":{"id":1,"name":"KRoll","address":"Malviya Nagar","contactName":null,"contactNumber":null},"items":[],"selected":false}
  ];

  constructor() { }

  ngOnInit() {
  }

}
