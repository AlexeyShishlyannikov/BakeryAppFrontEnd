import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuService } from 'menu/services/menu.service';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-admin-confirm-popup',
  templateUrl: './admin-confirm-popup.component.html',
  styleUrls: ['./admin-confirm-popup.component.css']
})
export class AdminConfirmPopupComponent implements OnInit {
  id: number;
  constructor(
    private route: ActivatedRoute,
    private menuService: MenuService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.queryParamMap.get('deleteId');
  }

  deleteItem() {
    this.menuService.deleteMenuItem(this.id).subscribe(res => {});
    this.dialog.closeAll();
  }

}
