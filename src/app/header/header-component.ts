import { Component ,EventEmitter,Output} from '@angular/core';
@Component({
    selector:'app-header',
    templateUrl:'./header-component.html',
    styleUrls:['./header-component.css']


})
export class HeaderComponent{
    @Output() ClickedOption=new EventEmitter<string>();
    onSelect(COption:string){
        this.ClickedOption.emit(COption);

    }

}