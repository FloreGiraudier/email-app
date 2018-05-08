import { Component, OnInit } from '@angular/core';
import { Email } from '../../DTO/email';
import { EmailList } from '../../utils/mocks-emails';

@Component({
    selector: 'app-email-form',
    templateUrl: './email-form.component.html',
    styleUrls: ['./email-form.component.css']
})

export class EmailFormComponent {
  
    model = new Email('', '', '');
  
    submitted = false;

    files: FileList;

    onChange(files: FileList) {
        this.files = files;
    }

    onSubmit() { 
        this.submitted = true;
    }

    // autocomplete feature
    public emails = EmailList;
    public filteredList = [];

    filter() {
        if (this.model.recipients !== ""){
            this.filteredList = this.emails.filter(function(el){
                return el.toLowerCase().indexOf(this.model.recipients.toLowerCase()) > -1;
            }.bind(this));
        } else{
            this.filteredList = [];
        }
    }
     
    select(item){
        this.model.recipients = item;
        this.filteredList = [];
    }
  
  }
