function equalHeight(e){var n=0;e.css({"min-height":"0"}),e.each(function(){var e=$(this).height();e>n&&(n=e)}),e.css("min-height",n)}$(document).ready(function(){$(".fancybox__close").on("click",function(){return $.fancybox.close(),!1}),$(".js_fancybox").fancybox({padding:0,margin:10,mouseWheel:!1,afterShow:function(e,n){equalHeight($(".phones_cols .phones_col")),equalHeight($(".phones_cols .f_info_list"))},helpers:{overlay:{css:{background:"rgba(0, 0, 0, 0.6)"}}}}),$(".js_fancybox_noclose").fancybox({padding:0,margin:10,closeBtn:!1,helpers:{overlay:{css:{background:"rgba(0,0,0,.7)"}}}}),$(".js_fancybox_photo").fancybox({padding:10,margin:30,nextEffect:"fade",prevEffect:"fade",helpers:{title:{type:"inside"},overlay:{css:{background:"rgba(0, 0, 0, 0.25)"}}}}),$(".js_fancybox_video").fancybox({padding:10,margin:0,mouseWheel:!1,nextEffect:"fade",prevEffect:"fade",wrapCSS:"video_fancy",helpers:{overlay:{css:{background:"rgba(0, 0, 0, 0.6)"}}}})});