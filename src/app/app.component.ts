import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Password generator';

  password = '';
  useLetters = false;
  useNumbers = false;
  useSymbols = false;
  clickCount = 0;
  length = 0;
  onButtonClick(){
    const numbers = '1234567890';
    const letters= 'abcdefghijklmnopqrstuvwxyz';
    const symbols= '!"#$%&/()=?¡';

    let validchars = '';
    if(this.useLetters){
      validchars+=letters;
    }
    if(this.useNumbers){
      validchars+=numbers;
    }
    if(this.useSymbols){
      validchars+=symbols;
    }

    let generatedPassword='';

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validchars.length);
      generatedPassword += validchars[index];

    }
    console.log(generatedPassword);

    this.password = generatedPassword;

  }

  getPassword(){
    return this.password;
  }

  getName(){
    return "Roberto";
  }

  onChangeUseLetters(){
    this.useLetters = !this.useLetters;
  }
  onChangeUseNumbers(){
    this.useNumbers = !this.useNumbers;
  }
  onChangeUseSymbols(){
    this.useSymbols = !this.useSymbols;
  }
  onGetLength(){
    return this.length;
  }
  onChangeLength(value:any){
    const parsedValue = parseInt(value.target.value);

    if(!isNaN(parsedValue))
    this.length = parsedValue;
    else{
      this.length = 0;
      this.password = '';
    }
  }
}
