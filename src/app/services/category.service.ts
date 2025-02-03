import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Video {
  id: number;
  title: string;
  url: string;
  thumbnail: string;
  category: string; // Assuming each video has a 'category' property
}

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private videosUrl = 'assets/videos.json';

  constructor(private http: HttpClient) {}

  // Fetch all videos
  getVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(this.videosUrl);
  }

  // Fetch videos by category
  getVideosByCategory(category: string): Observable<Video[]> {
    return this.getVideos().pipe(
      map((videos) => videos.filter((video) => video.category === category))
    );
  }
}
