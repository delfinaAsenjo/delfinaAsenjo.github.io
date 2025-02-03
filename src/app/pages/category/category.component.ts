import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from 'src/app/services/category.service';

interface Video {
  id: number;
  title: string;
  url: string;
  thumbnail: string;
  category: string;
}


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() videos: Video | any = [];
  categories = [
    { id: "01",
      title: "Mini Serie", 
      description: "Juana",
      image: "https://picsum.photos/id/1/200/300",
      date: "02/02/2022",
      link: "https://www.youtube.com/playlist?list=PLujvxwN4w8ajpn9p1dQQQ6awYpMWyZdU7"
    },
    { id: "02",
      title: "Documental" , 
      description: "description2",
      image: "https://picsum.photos/id/2/200/300",
      date: "02/02/2022",
      link: ""
    },    
    { id: "03",
      title: "Videoclips", 
      description: "description2",
      image: "https://picsum.photos/id/3/200/300",
      date: "02/02/2022",
      link: ""
    },  
    { id: "04",
      title: "Animación", 
      description: "description2",
      image: "https://picsum.photos/id/3/200/300",
      date: "02/02/2022",
      link: ""
    },  
    { id: "05",
      title: "Redes y publicidad", 
      description: "description2",
      image: "https://picsum.photos/id/3/200/300",
      date: "02/02/2022",
      link: ""
    },
  ]
  videoCounter: number = 0;
  category: any = {};


  constructor(private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService,
              private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      const activeCategory = this.categories.find((category: { id: string; }) => category.id === id);
      this.category = activeCategory || {};
      
      console.log('Route params:', params);
      console.log('Selected category ID:', id);
      console.log('Selected category:', this.category);
  
      // Fetch videos only if the category exists
      if (this.category.id) {
        this.fetchVideos();
      } else {
        console.error('No category found for the given ID.');
      }
    });
  }
  
  fetchVideos(): void {
    console.log('Fetching videos for category ID:', this.category.id);
  
    // Fetch videos by category
    this.categoryService.getVideosByCategory(this.category.id).subscribe({
      next: (data) => {
        this.videos = data;
        this.videos.forEach((video: any) => {
          this.videoCounter +=1;
        });
        console.log('Fetched videos:', this.videos);
      },
      error: (err) => {
        console.error('Error fetching videos:', err);
      }
    });
  }

  goToLink(url: string): void {
    // console.log(url);
    
    window.open(url, '_blank');
  }
  
  
}
