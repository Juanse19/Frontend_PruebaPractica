import { Component, OnInit, ViewChild } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { GridComponent, PageSettingsModel, FilterSettingsModel, ToolbarItems, ToolbarService, EditService, PageService, CommandColumnService, CommandModel  } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  providers: [
    ToolbarService, EditService, PageService, CommandColumnService,
  ],
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public user: any = [];

  public pageSettings!: PageSettingsModel;

  public filterOptions!: FilterSettingsModel;

  public toolbarOptions!: ToolbarItems[];

  public toolbar!: ToolbarItems[] | object;

  public commands!: CommandModel[];

  public editSettings!: Object;

  @ViewChild('grid')
  public grid!: GridComponent;

  constructor(private UsuarioService: UsuarioService) {

   }

  ngOnInit(): void {

    this.editSettings = {
      allowEditing: true,
      allowAdding: true,
      allowDeleting: true,
      mode: 'Normal',
      allowEditOnDblClick: false
    };

    this.pageSettings = { pageSizes: true, pageSize: 5 };
    this.filterOptions = {
    type: 'Menu',
    }

    // this.dataUsuario();

    this.toolbar = [
      'Search'
    ];

  }

  public consult(){
    this.dataUsuario();
  }

  public dataUsuario(){
    this.UsuarioService.getUsers().subscribe(resp => {
      console.log('test', resp);
      this.user = resp;
    })
  }





}
