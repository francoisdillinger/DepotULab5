   
   
   // Making sure the document is ready. Console log to let me know its finished, 
   // it will hide the upper keyboard upon loading.
   
    $(document).ready(function(){
    console.log("I'm ready!");
            $('#keyboard-upper-container').hide();
            
   // Declaring variables, the sentence array, the first line to be on screen and 
   // counters for correct and incorrect entires.   
        
            var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 
                                'Too ato too nOt enot one totA not anot tOO aNot', 
                                'oat itain oat tain nate eate tea anne inant nean',
                                 'itant eate anot eat nato inate eat anot tain eat', 
                                'nee ene ate ite tent tiet ent ine ene ete ene ate'];
          
            var lineForScreen = sentences[0];
            var correct = 0;
            var wrong = 0;
           
                              
   // Posting the first sentence to the top of the screen. 
               
            $('#words').text(lineForScreen);   
               
   // Checks keydown event to show and hide the keyboard if its the shiftkey.   
            $(document).keydown(function(e) {
                console.log(e);
                if(e.shiftKey) {
                    $('#keyboard-upper-container').show();
                    $('#keyboard-lower-container').hide();
                }
            });
            
     
    //  Monitors keypress events 
            $(document).keypress(function(e) {
                // Concatenates the keypress event keycode to a hashtag making it an html ID
                var theKey = '#' + e.keyCode;
                // Turns character code into a string for comparison us in 'if' statements below
                var theLetter = String.fromCharCode(e.keyCode);
                // Adding the right class so the key on screen is highlighted
                $(theKey).addClass('right');
                // As long as the sentences array has length to it this runs
                    if(sentences.length >= 1){
                        // As long as the first index of sentences array has length this runs
                        if(sentences[0].length >= 1){
                            // Javascript strings are immutable. So in the following variables I 
                            // sliced the first character off the first letter in the first index.
                            // In order to mimick modifying the original string I  pulled the entire 
                            // first string out, substringed it, then added the new string back into the array.
                            
                            var singleLetter = sentences[0].slice(0,1);
                            var theSentence = sentences.shift();
                            var newSentence = theSentence.substring(1);
                            lineForScreen = newSentence;
                            sentences.unshift(newSentence);
                            // Adding the letter being typed to the screen
                            $('#words-typed').text(theLetter);
                            
                            // Here I compare the letter I sliced to the key being pressed. If it matches I add to the 
                            // 'correct' counter, modify the line on the screen to show the next letter, and show the 
                            // checkmark glyphicon.
                            
                            if(theLetter === singleLetter){
                                console.log('Match!');
                                correct++;
                                $('#words').text(lineForScreen);
                                $('#icons').html('<span class="glyphicon glyphicon-ok"></span>');   
                            }
                            // Else I stilly modify the string being show and show the character typed on screen 
                            // but I add to the 'wrong' counter and show the red 'X' gylphicon
                            
                            else{
                                console.log('Wrong');
                                wrong++;  
                                $('#words').text(lineForScreen);
                                $('#icons').html('<span class="glyphicon glyphicon-remove"></span>');
                            }   
                        }
                        // If the sting in the first index has no length left I pull the string at the second index 
                        // for the screen, then pull the old empty string at the first index out altogether which now 
                        // makes the string at the second index the string in the first index so all the code above
                        // will run the same. This countinues for all strings in the array.
                        
                        else{
                            $('#words').text(sentences[1]);
                            console.log('Im shifting!');
                            sentences.shift();
                        }
                    }
                    // Once the array is empty it will run this code alerting the person to how many characters they 
                    // got correct and how many they got wrong.
                    else{
                        var endingMessage = 'Congrats! You got ' + correct + ' correct and ' + wrong + ' wrong. Would you like to play again?';
                        alert(endingMessage);                 
                    }      
            });
            
      // Just as in the keydown function, this checks to see if the key released is the shift key.
      // If it is then it hides the uppercase keyboard, if its not the shift key then it removes the 
      // class that is highlightling the character on screen and clears the icons as well as the letter being typed.       
            $(document).keyup(function (e) {
                 if(e.which == 16) {
                    $('#keyboard-upper-container').hide();
                    $('#keyboard-lower-container').show();
                }
                else{
                    $('.well').removeClass('right');
                    $('#icons').empty();
                    $('#words-typed').empty();
                }
            });        
        });
                          
                         