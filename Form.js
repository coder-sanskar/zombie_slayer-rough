class Form {
 
 constructor(){
  this.button = createButton('PLAY');
  this.button.style('background', 'lightgrey');
 }

hide(){
    this.button.hide();
}

display(){

this.button.position(width/2,300);

this.button.mousePressed(()=>{

    this.button.hide();
    
});


}



}