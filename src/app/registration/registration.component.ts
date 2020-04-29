import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { User } from '../user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  message:any;
  data:any;
  user:User=new User(" "," "," "," "," "," "," "," "," "," "," "," ");

  constructor(private service:RestapiService) {
    
   }

  ngOnInit(): void {
  }


  public register()
  {
    let resp = this.service.registerapi(this.user);
    resp.subscribe((data)=>this.message=data);

  }
}
