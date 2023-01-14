import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {
  user: User = {
   name:"Kouassi",
   prenom :"Rachelle",
   profilePictureUrl:"https://i.pinimg.com/236x/66/f7/fe/66f7fee15f222853dd65ca63f6238d32.jpg",
  }
  
  constructor() { }

  ngOnInit(): void {
  }

  getFullName(user: User) {
    return `${user.name} ${user.prenom}`;
  }

}

class User {
  name?: String;
  prenom?: String;
  profilePictureUrl?: String;
}

