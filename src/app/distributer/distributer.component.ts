import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-distributer',
  templateUrl: './distributer.component.html',
  styleUrls: ['./distributer.component.css']
})
export class DistributerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  
  openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  };
}
