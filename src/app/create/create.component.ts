import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { ContentServiceService } from '../services/content-service.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @Output() addContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent = new EventEmitter<Content>();
  newContent: Content;
  tempId: string;
  tempTags: string;
  constructor(private contentService: ContentServiceService, private messageService: MessageService) {
    this.newContent = {
      author: '',
      title: '',
      body: ''
    };
  }

  ngOnInit(): void {
  }

  addCoconut(): void {
    this.newContent.tags = this.tempTags.split(",");
    this.contentService.postContent(this.newContent).subscribe(newCoconut => {
      this.messageService.addMessage("Added content has an id of: " + newCoconut.id);
      this.newContent = {
        author: '',
        title: '',
        body: ''
      };
      this.tempTags = "";
      this.addContentEvent.emit(newCoconut);
    });
  }
  updateCoconut(): void {
    this.newContent.tags = this.tempTags.split(",");
    this.newContent.id = parseInt(this.tempId);
    this.contentService.postContent(this.newContent).subscribe(() => {
      this.messageService.addMessage("Updated content at id: " + this.newContent.id);
      this.tempTags = "";
      this.tempId = "";
      this.updateContentEvent.emit(this.newContent);
      this.newContent = {
        author: '',
        title: '',
        body: ''
      };
    });
  }


}
