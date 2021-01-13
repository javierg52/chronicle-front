import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Video } from 'src/app/models/Video';
import { MediaRetrievalService } from 'src/app/services/media-retrieval.service';

@Component({
  selector: 'app-videopage',
  templateUrl: './videopage.component.html',
  styleUrls: ['./videopage.component.css']
})
export class VideopageComponent implements OnInit, OnDestroy {

  constructor(private mediaRetrievalService: MediaRetrievalService) { }
  
  
  //Clears search tags on destroy
  ngOnDestroy(): void {
    this.mediaRetrievalService.selectedTags = [];
    this.mediaRetrievalService.selectedBatchTags =[];
  }

  videos?: Video[];

  @Input()
  noResults: boolean= false;


  ngOnInit(): void {
    if (this.mediaRetrievalService.selectedTags.length > 0) {
      this.mediaRetrievalService.selectedBatchTags = [];
      this.onSearch();
      console.log("Here");
      console.log(this.mediaRetrievalService.selectedTags);
    }
  }

  
    // Recieves the tags selected by the user in the search bar and finds videos with those tags
  onSearch(): void {
    this.noResults = false;
    console.log(this.noResults)
    this.mediaRetrievalService.allTags = [];
    this.videos = [];
    if(this.mediaRetrievalService.selectedTags.length > 0 || this.mediaRetrievalService.date || this.mediaRetrievalService.selectedBatchTags.length > 0) {
      if(this.mediaRetrievalService.selectedBatchTags.length>0){
        this.mediaRetrievalService.allTags.push(this.mediaRetrievalService.selectedBatchTags[0])
      }
      if(this.mediaRetrievalService.date){
        this.mediaRetrievalService.allTags.push(this.mediaRetrievalService.date)
      }
      for(let i in this.mediaRetrievalService.selectedTags){
        this.mediaRetrievalService.allTags.push(this.mediaRetrievalService.selectedTags[i])
      }
      console.log("All tags", this.mediaRetrievalService.allTags)
      this.mediaRetrievalService.getVideosByTag(this.mediaRetrievalService.allTags).subscribe(resp => {
        if (resp.length == 0){
          this.noResults = true;
        }
        this.videos = resp;
        console.log("Get Videos by Tag", resp)
      });
    } 
    else if (this.mediaRetrievalService.allTags.length == 0){
      this.mediaRetrievalService.getAllVideos().subscribe(resp => {
        this.videos = resp;
        console.log("Get All Videos",resp)
      });
    }
  
     this.mediaRetrievalService.allTags= [];
  }
}
