   
   
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
            
     // Similar process as above, I had to use an if/else statement because certain symbols didn't convert under String.fromCharCode. I could have fixed this by editing the HTML but wasn't sure if we were allowed to for this lab. I may do it in the future. Once the key is pressed its converted into a string and the # is added to it. Since it then matches the class used in the HTML the corresponding key is highlighted on the virtual keyboard. 
      
            $(document).keypress(function(grr) {
                if ([96,61,45,32,91,92,93,59,39,44,46,47,60,63,62,58,34,123,125,124,43,95,41,40,42,38,94,37,36,35,64,33,126].includes(grr.which)) {
                $('#' + grr.which).addClass('right');
                }
                else {  
                $('#' + String.fromCharCode(grr.which)).addClass('right');
                }
            });
            
      // Similar to the SHIFT, upon keyup it removes the #right class, which then removes the highlight that the key recieves once its pressed down.       
            $(document).keyup(function (grr) {
                $('.well').removeClass('right'); 
                $('#words-typed').empty();
                
                });
                
                
        });
                          
                         