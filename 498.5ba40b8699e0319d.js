"use strict";(self.webpackChunklibrary_management_system=self.webpackChunklibrary_management_system||[]).push([[498],{6498:(x,Z,r)=>{r.r(Z),r.d(Z,{CategoryListModule:()=>u});var m=r(6895),n=r(4859),_=r(5412),l=r(9549),p=r(7392),c=r(4144),C=r(7009),i=r(7155),T=r(9299),v=r(6308),A=r(1937),t=r(4650),D=r(2507),L=r(2882);function N(o,e){if(1&o&&(t.TgZ(0,"div",15)(1,"strong"),t._uU(2,"Error: "),t.qZA(),t._uU(3),t.qZA()),2&o){const a=t.oxw();t.xp6(3),t.AsE("",null==a.error.error?null:a.error.error.path," ",null==a.error.error?null:a.error.error.error,"")}}function U(o,e){1&o&&(t.TgZ(0,"th",16),t._uU(1,"Category Id"),t.qZA())}function Y(o,e){if(1&o&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&o){const a=e.$implicit;t.xp6(1),t.hij(" ",a.id," ")}}function b(o,e){1&o&&(t.TgZ(0,"th",16),t._uU(1,"Category Name"),t.qZA())}function R(o,e){if(1&o&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&o){const a=e.$implicit;t.xp6(1),t.hij(" ",a.categoryName," ")}}function w(o,e){1&o&&(t.TgZ(0,"th",16),t._uU(1,"Short Name"),t.qZA())}function B(o,e){if(1&o&&(t.TgZ(0,"td",17),t._uU(1),t.qZA()),2&o){const a=e.$implicit;t.xp6(1),t.hij(" ",a.shortName," ")}}function E(o,e){1&o&&(t.TgZ(0,"th",18),t._uU(1,"Action"),t.qZA())}function S(o,e){if(1&o){const a=t.EpF();t.TgZ(0,"td",17)(1,"button",19),t.NdJ("click",function(){const y=t.CHM(a).$implicit,h=t.oxw();return t.KtG(h.editCategory(y))}),t.TgZ(2,"mat-icon"),t._uU(3,"edit"),t.qZA()(),t.TgZ(4,"button",20),t.NdJ("click",function(){const y=t.CHM(a).$implicit,h=t.oxw();return t.KtG(h.deleteCategory(y))}),t.TgZ(5,"mat-icon"),t._uU(6,"delete"),t.qZA()()()}}function M(o,e){1&o&&t._UZ(0,"tr",21)}function F(o,e){1&o&&t._UZ(0,"tr",22)}class f{constructor(e,a,s,d,y,h){this.categoryService=e,this.storeService=a,this.router=s,this._snackBar=d,this._dialog=y,this.cdRef=h,this.categories=new i.by,this.error=null,this.displayedColumns=["id","categoryName","shortName","action"]}ngOnInit(){this.storeService.loaded||this.categoryService.getCategories().subscribe({next:e=>{this.storeService.setCategories(e)},error:e=>{console.log(e),this.error=e}}),this.storeService.loadCategories().subscribe(e=>this.categories.data=e)}ngAfterViewInit(){this.categories.sort=this.sort,console.log(this.sort),this.cdRef.detectChanges()}applyFilter(e){this.categories.filter=e.target.value.trim().toLowerCase()}deleteCategory(e){this._dialog.open(A.F,{data:{type:"book category",name:e.categoryName}}).afterClosed().subscribe(s=>{"cancel"===s||void 0===s?console.log("cancling delete operation!"):this.categoryService.deleteCategory(e.id).subscribe({next:d=>{this.storeService.removeCategory(e.id),this.storeService.decrementCategory(),this._snackBar.open(e.categoryName+" deleted successfully!","",{duration:3e3})},error:d=>this.error=d})})}editCategory(e){this.router.navigate(["category/edit",e.id])}}f.\u0275fac=function(e){return new(e||f)(t.Y36(D.H),t.Y36(L.d),t.Y36(T.F0),t.Y36(C.ux),t.Y36(_.uw),t.Y36(t.sBO))},f.\u0275cmp=t.Xpm({type:f,selectors:[["app-category-list"]],viewQuery:function(e,a){if(1&e&&t.Gf(v.YE,5),2&e){let s;t.iGM(s=t.CRH())&&(a.sort=s.first)}},decls:26,vars:4,consts:[[1,"container","mt-3","p-3","bg-white"],[1,"text-capitalize","fs-4","fw-bold"],["class","container mt-3 alert alert-danger",4,"ngIf"],[1,"container","mt-3","pt-3","px-3","d-flex","flex-column","bg-white"],["matInput","",3,"keyup"],["mat-table","","matSort","",1,"text-center",3,"dataSource"],["matColumnDef","id"],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","categoryName"],["matColumnDef","shortName"],["matColumnDef","action"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[1,"container","mt-3","alert","alert-danger"],["mat-header-cell","","mat-sort-header",""],["mat-cell",""],["mat-header-cell",""],["mat-icon-button","","color","primary",3,"click"],["mat-icon-button","","color","warn",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"p",1),t._uU(2,"list of book categories"),t.qZA(),t._UZ(3,"hr"),t.qZA(),t.YNc(4,N,4,2,"div",2),t.TgZ(5,"div",3)(6,"mat-form-field")(7,"mat-label"),t._uU(8,"Filter book category"),t.qZA(),t.TgZ(9,"input",4),t.NdJ("keyup",function(d){return a.applyFilter(d)}),t.qZA()()(),t.TgZ(10,"div",0)(11,"table",5),t.ynx(12,6),t.YNc(13,U,2,0,"th",7),t.YNc(14,Y,2,1,"td",8),t.BQk(),t.ynx(15,9),t.YNc(16,b,2,0,"th",7),t.YNc(17,R,2,1,"td",8),t.BQk(),t.ynx(18,10),t.YNc(19,w,2,0,"th",7),t.YNc(20,B,2,1,"td",8),t.BQk(),t.ynx(21,11),t.YNc(22,E,2,0,"th",12),t.YNc(23,S,7,0,"td",8),t.BQk(),t.YNc(24,M,1,0,"tr",13),t.YNc(25,F,1,0,"tr",14),t.qZA()()),2&e&&(t.xp6(4),t.Q6J("ngIf",a.error),t.xp6(7),t.Q6J("dataSource",a.categories),t.xp6(13),t.Q6J("matHeaderRowDef",a.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",a.displayedColumns))},dependencies:[m.O5,i.BZ,i.fO,i.as,i.w1,i.Dz,i.nj,i.ge,i.ev,i.XQ,i.Gk,p.Hw,n.RK,l.KE,l.hX,c.Nt,v.YE,v.nU]});const I=[{path:"",component:f}];class g{}g.\u0275fac=function(e){return new(e||g)},g.\u0275mod=t.oAB({type:g}),g.\u0275inj=t.cJS({imports:[T.Bz.forChild(I),T.Bz]});class u{}u.\u0275fac=function(e){return new(e||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[m.ez,g,i.p0,p.Ps,n.ot,l.lN,c.c,C.ZX,_.Is,v.JX]})},1937:(x,Z,r)=>{r.d(Z,{F:()=>l});var m=r(5412),n=r(4650),_=r(4859);class l{constructor(c){this.data=c}}l.\u0275fac=function(c){return new(c||l)(n.Y36(m.WI))},l.\u0275cmp=n.Xpm({type:l,selectors:[["app-delete-dialog"]],decls:9,vars:2,consts:[["mat-dialog-title",""],["mat-dialog-content",""],["mat-dialog-actions",""],["mat-button","","mat-dialog-close","cancel"],["mat-button","","mat-dialog-close","yes","cdkFocusInitial",""]],template:function(c,C){1&c&&(n.TgZ(0,"h1",0),n._uU(1),n.qZA(),n.TgZ(2,"div",1),n._uU(3),n.qZA(),n.TgZ(4,"div",2)(5,"button",3),n._uU(6,"Cancel"),n.qZA(),n.TgZ(7,"button",4),n._uU(8,"Yes"),n.qZA()()),2&c&&(n.xp6(1),n.hij("Delete ",C.data.name,"?"),n.xp6(2),n.hij("Are you sure? you want to delete this ",C.data.type,"?"))},dependencies:[_.lW,m.ZT,m.uh,m.xY,m.H8]})}}]);