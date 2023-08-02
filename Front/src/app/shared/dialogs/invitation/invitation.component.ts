import { Component} from '@angular/core';
import { GetProjectsService } from 'src/app/services/get-projects/get-projects.service';
import { InvitationService } from 'src/app/services/invitation/invitation.service';


@Component({
  selector: 'app-invitation',
  templateUrl: 'invitation.component.html',
  styleUrls: ['./invitation.component.css'],
  
})
export class InvitationComponent {

  constructor(public invitationService: InvitationService, public projectService: GetProjectsService){}

  linkToCopy: string = ''

  ngOnInit(): any {
    const body = {
      projectId: this.projectService.project.projectId,
      userCreator: this.projectService.project.userCreatorId
    }
    this.invitationService.generateLink(body).subscribe((response: any) => {
      this.linkToCopy = response
      console.log(this.linkToCopy);
      
    })
  }
  
  copyLinkToClipboard(): void {
    this.copyTextToClipboard(this.linkToCopy);
  }

  copyTextToClipboard(text: string): void {
    const tempElement = document.createElement('textarea');
    tempElement.value = text;
    document.body.appendChild(tempElement)
    tempElement.select();
    document.execCommand('copy')
    document.body.removeChild(tempElement);
  }
}
