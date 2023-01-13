import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-lex1',
    templateUrl: './lex1.component.html',
})
export class Lex1Component {
    
    lex1String: string = `
        <p>lex1 works!</p>
        <span>desde aquí</span>
    `;
    
    @ViewChild('lex4Template', {static: false}) lex4Template!: TemplateRef<any>;
    
    
    showLex4: boolean = true;
        
    constructor() {
    }
    
    lex4ButtonText(): string {
        return this.showLex4 ? 'Mostrar' : 'Ocultar';
    }
}
