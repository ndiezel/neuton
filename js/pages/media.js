jQuery((function(a){var t=a(".js-filterLinks a"),e=a(".js-listItem");t.on("click",(function(){var s=a(this);t.removeClass("active"),s.addClass("active"),e.removeClass("active"),"All"==s.text()&&e.addClass("active"),"Press Releases"==s.text()&&a(".js-listItem[data-cat='news'], .js-listItem[data-cat2='news']").addClass("active"),"Events"==s.text()&&a(".js-listItem[data-cat='events']").addClass("active"),"Media"==s.text()&&a(".js-listItem[data-cat='articles'],.js-listItem[data-cat2='articles']").addClass("active"),"Videos"==s.text()&&a(".js-listItem[data-cat='videos'], .js-listItem[data-cat2='videos']").addClass("active"),"Podcasts"==s.text()&&a(".js-listItem[data-cat='podcasts']").addClass("active"),"Partners"==s.text()&&a(".js-listItem[data-cat='partners'], .js-listItem[data-cat2='partners']").addClass("active")})),a(".js-modalOpen").on("click",(function(){var t=a(this);a(".js-videoPlayer").append('<iframe width="100%" src="https://www.youtube.com/embed/'+t.data("video")+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>')})),a(".js-modalClose").on("click",(function(){a(".js-videoPlayer iframe").remove()}));var s=a(".js-toTop");a(window).on("scroll",(function(){a(window).scrollTop()>1e3&&a(window).width()>800?s.addClass("active"):s.removeClass("active")})),"link-partners"==anc&&(t.removeClass("active"),e.removeClass("active"),a("#link-partners").addClass("active"),a(".js-listItem[data-cat='partners'], .js-listItem[data-cat2='partners']").addClass("active"))}));