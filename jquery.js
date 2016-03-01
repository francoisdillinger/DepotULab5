    $(document).ready(function(){
    console.log("I'm ready!");
            $('#keyboard-upper-container').hide();
            
            var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 
                                'Too ato too nOt enot one totA not anot tOO aNot', 
                                'oat itain oat tain nate eate tea anne inant nean',
                                 'itant eate anot eat nato inate eat anot tain eat', 
                                'nee ene ate ite tent tiet ent ine ene ete ene ate'];
                
            $('#words').text(sentences[0]);   
               
            
            $(document).keydown(function(e) {
                if(e.which == 16) {
                    $('#keyboard-upper-container').show();
                    $('#keyboard-lower-container').hide();
                }
            });
            
            $(document).keyup(function(e) {
                if(e.which == 16) {
                    $('#keyboard-upper-container').hide();
                    $('#keyboard-lower-container').show();
                }
            });
            
        
            $(document).keypress(function(grr) {
                if ([96,61,45,32,91,92,93,59,39,44,46,47,60,63,62,58,34,123,125,124,43,95,41,40,42,38,94,37,36,35,64,33,126].includes(grr.which)) {
                $('#' + grr.which).addClass('right');
                }
                else {  
                $('#' + String.fromCharCode(grr.which)).addClass('right');
                }
            });
               
            $(document).keyup(function (grr) {
                $('.well').removeClass('right'); 
                $('#words-typed').empty();
                
                });
                
                
        });
                          
                         