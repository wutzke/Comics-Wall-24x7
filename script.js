jQuery(document).ready(function(){
  jQuery('.fancybox').each(function(i,e){
    jQuery(e).css('background-image','url('+jQuery(e).attr('href')+')');
  });
  jQuery("a.fancybox").fancybox({
      openEffect: 'none',
      closeEffect: 'none'
  });
})
