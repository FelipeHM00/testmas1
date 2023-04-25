import { Component } from '@angular/core';
import * as XLSX from 'xlsx'

@Component({
  selector: 'app-patata',
  templateUrl: './patata.component.html',
  styleUrls: ['./patata.component.css']
})
export class PatataComponent {
  data:any[]=[
    ["id","name","email"],
    [1,"felipe","felipe@gmail.com"],
    [2,"virginia","virginia@gmail.com"]
  ];
  exportToExcel(){
    const worksheet = XLSX.utils.aoa_to_sheet(this.data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook,worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'data.xlsx')
  }

}
