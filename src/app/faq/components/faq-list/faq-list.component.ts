import { Component, OnInit } from '@angular/core';
import { FaqService } from 'faq/services/faq.service';
import { Question } from 'faq/models/faq';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.css']
})
export class FaqListComponent implements OnInit {
  questions: Question[];
  constructor(
    private faqService: FaqService
  ) { }

  ngOnInit() {
    this.faqService.getAllQuestions().subscribe(questions => {
      this.questions = questions;
    });
  }

}
