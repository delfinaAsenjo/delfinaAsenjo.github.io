import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { title } from 'process';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //array of categories:
  categories = [
    { id: "01",
      title: "Mini Serie", 
      description: "Juana",
      image: "../../assets/category images/mini serie.jpg",
      date: "02/02/2022",
      link: "https://www.youtube.com/playlist?list=PLujvxwN4w8ajpn9p1dQQQ6awYpMWyZdU7"
    },
    { id: "02",
      title: "Documental" , 
      description: "description2",
      image: "../../assets/category images/documental.jpg",
      date: "02/02/2022",
      link: ""
    },    
    { id: "03",
      title: "Videoclips", 
      description: "description2",
      image: "../../assets/category images/videoclips.jpg",
      date: "02/02/2022",
      link: ""
    },  
    { id: "04",
      title: "Animación", 
      description: "description2",
      image: "../../assets/category images/animacion.jpg",
      date: "02/02/2022",
      link: ""
    },  
    { id: "05",
      title: "Redes y publicidad", 
      description: "description2",
      image: "../../assets/category images/redes y publicidad.jpg",
      date: "02/02/2022",
      link: ""
    },
  ]
  //array of projects:
  projects = [
    {
      title: "title1",
      date: "02/02/2022",
      description: "description1",
      image: "image1.png",
      link: "www.google.com/image1",
      
    },
    {
      title: "title2",
      date: "02/02/2022",
      description: "description2",
      image: "image1.png",
      link: "www.google.com/image2",
      
    },
    {
      title: "title3",
      date: "02/02/2022",
      description: "description3",
      image: "image1.png",
      link: "www.google.com/image3",
      
    }
  ]


  constructor(private router: Router) { }

  ngOnInit(): void {
    let data = JSON.stringify(this.categories);
    localStorage.setItem('categories', data);
  }

  goToCategory(id: any){
    this.router.navigate(['/category', id]);
  }

}
