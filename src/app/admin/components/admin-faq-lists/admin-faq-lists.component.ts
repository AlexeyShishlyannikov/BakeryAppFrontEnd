import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Question } from '../../../faq/models/faq';
import { MatTableDataSource, MatSort } from '@angular/material';
import { Subscription } from 'rxjs/Subscription';
import { FaqService } from '../../../faq/services/faq.service';

@Component({
  selector: 'app-admin-faq-lists',
  templateUrl: './admin-faq-lists.component.html',
  styleUrls: ['./admin-faq-lists.component.css']
})
export class AdminFaqListsComponent implements OnDestroy, AfterViewInit {
  displayedColumns = ['id', 'question', 'answer', 'delete'];
  questions: Question[];
  dataSource = new MatTableDataSource(this.questions);
  subscription: Subscription;
  question: Question = {
    id: null,
    question: '',
    answer: ''
  };
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private faqService: FaqService
  ) { }

  ngAfterViewInit() {
    this.subscription = this.faqService
      .getAllQuestions()
      .subscribe(questions => {
        this.questions = questions;
        this.setTable(questions);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private setTable(questions) {
    this.dataSource = new MatTableDataSource(questions);
    this.dataSource.sort = this.sort;
  }

  submit() {
    this.faqService.postQuestion(this.question).subscribe(res => {
      this.questions.push(res);
      this.setTable(this.questions);
    });
  }

  delete(question: Question) {
    this.faqService.deleteQuestion(question.id).subscribe();
    this.questions
      .splice(
        this.questions
          .findIndex(ing => ing.id === question.id), 1);
    this.setTable(this.questions);
  }
}
