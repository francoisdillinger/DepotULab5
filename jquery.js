   
   
   // Making sure the document is ready. Console log to let me know its finished, it will hide the upper keyboard upon loading.
   
    $(document).ready(function(){
    console.log("I'm ready!");
            $('#keyboard-upper-container').hide();
            
   // The sentence array which contains the words that appear on top of browser.        
            var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 
                                'Too ato too nOt enot one totA not anot tOO aNot', 
                                'oat itain oat tain nate eate tea anne inant nean',
                                 'itant eate anot eat nato inate eat anot tain eat', 
                                'nee ene ate ite tent tiet ent ine ene ete ene ate'];
            var correct = 0;
            var wrong = 0;
            // var endingMessage = 'Congrats! You got ' + correct + ' correct and ' + wrong + ' wrong. Would you like to play again?';
                              
   // Posting the first sentence to the top of the screen. 
               
            $('#words').text(sentences[0]);   
               
    // Function that will register a key being pressed and .which will record the keycode of key pressed.    For this function the SHIFT key will show the uppercase keyboard. 
           
            $(document).keydown(function(e) {
                if(e.which == 16) {
                    $('#keyboard-upper-container').show();
                    $('#keyboard-lower-container').hide();
                }
            });
    // Function that records when key is released. This function will hide the uppercase keyboard and        show the lowercase keyboard upon key release. 
         
            $(document).keyup(function(e) {
                if(e.which == 16) {
                    $('#keyboard-upper-container').hide();
                    $('#keyboard-lower-container').show();
                }
            });
            
     
      
            $(document).keypress(function(grr) {
                var theKey = '#' + grr.keyCode;
                var theLetter = String.fromCharCode(grr.keyCode);
                $(theKey).addClass('right');
                // console.log(grr.keyCode);
                        
                        console.log(sentences.length);
                    if(sentences.length >= 1){
                        if(sentences[0].length){
                            var singleLetter = sentences[0].slice(0,1);
                            // console.log(theSentence);
                            var theSentence = sentences.shift();
                            var newSentence = theSentence.substring(1);
                            // theSentence = theSentence.substring(1);
                            sentences.unshift(newSentence);
                            // console.log(theLetter);
                            // console.log(singleLetter);
                            if(theLetter === singleLetter){
                                console.log('Match!');
                                correct = correct + 1;
                                console.log(correct);
                            }
                            else{
                                console.log('Wrong');
                                wrong = wrong + 1;
                                console.log(wrong);
                            }
                            console.log(sentences.length);
                        }
                        else{
                                console.log('Im shifting!');
                                sentences.shift();
                        }
                    }
                    else{
                        var endingMessage = 'Congrats! You got ' + correct + ' correct and ' + wrong + ' wrong. Would you like to play again?';
                        alert(endingMessage);
                        console.log(endingMessage);
                    }
                    console.log(sentences);
            });
            
      // Similar to the SHIFT, upon keyup it removes the #right class, which then removes the highlight that the key recieves once its pressed down.       
            $(document).keyup(function (grr) {
                $('.well').removeClass('right'); 
                $('#words-typed').empty();
                
                });
                
                
        });
                          
                         