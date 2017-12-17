/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(".content_overlay").mouseenter(function(){
      $(this).find(".divShadow").fadeIn(400); 
      //resolvi aplicar o efeito direto, mas poderia criar outra class normalmente


}).mouseleave(function() {
          $(this).find(".divShadow").fadeOut(400); 

});

