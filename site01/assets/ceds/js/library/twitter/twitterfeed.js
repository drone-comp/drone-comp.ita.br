//JQuery Twitter Feed. Coded by Tom Elliott @ www.webdevdoor.com (2013) based on https://twitter.com/javascripts/blogger.js
//Requires JSON output from authenticating script: http://www.webdevdoor.com/php/authenticating-twitter-feed-timeline-oauth/
(function ( window, $, undefined ) {

	"use strict"; // jshint ;_;

	var TwitterFeed = function (element, options) {
		this.init('twitterfeed', element, options);
	};

	TwitterFeed.prototype = {
		constructor:TwitterFeed,
		init: function (type, element, options) {

			var new_options = {};
			$(this).each(function() {
				$.each(element.attributes, function() {
					if(this.specified) {
						if(this.name.indexOf('data-') != -1) {
							var type;

							if (this.value == 'true') {
								type = true;
							} else if (this.value == 'false') {
								type = false;
							} else {
								type = this.value;
							}
							new_options[this.name.replace('data-','')] = type;
						}
					}
				});
			});

			var opt	= $.extend({}, $.fn[type].defaults, new_options);

			$.getJSON('js/library/twitter/twitter.php', { count: opt.count , account: opt.account }, function(feeds) {

				var feedHTML = '';

				for (var i=0; i<feeds.length; i++) {

					var tweetscreenname = feeds[i].user.name,
						tweetusername 	= feeds[i].user.screen_name,
						profileimage 	= feeds[i].user.profile_image_url_https,
						status 			= feeds[i].text,
						isaretweet 		= false,
						isdirect 		= false,
						tweetid 		= feeds[i].id_str;

					//If the tweet has been retweeted, get the profile pic of the tweeter
					if(typeof feeds[i].retweeted_status != 'undefined'){
						profileimage = feeds[i].retweeted_status.user.profile_image_url_https;
						tweetscreenname = feeds[i].retweeted_status.user.name;
						tweetusername = feeds[i].retweeted_status.user.screen_name;
						tweetid = feeds[i].retweeted_status.id_str;
						status = feeds[i].retweeted_status.text;
						isaretweet = true;
					};

					//Check to see if the tweet is a direct message
					if (feeds[i].text.substr(0,1) == "@") {
						isdirect = true;
					}

					//Generate twitter feed HTML based on selected options
					if (((opt.showretweets == true) || ((isaretweet == false) && (opt.showretweets == false))) && ((opt.showdirecttweets == true) || ((opt.showdirecttweets == false) && (isdirect == false)))) {

						if ((feeds[i].text.length > 1)) {

							if (opt.showtweetlinks == true) {
								status = addlinks(status);
							}

							feedHTML += '<div class="tweet" id="tweet-id-'+i+'">';

							feedHTML += '<div class="tweet-heading">'+
											'<a class="userpic" href="https://twitter.com/'+tweetusername+'" target="_blank">'+
												'<img src="'+profileimage+'"images/twitter-feed-icon.png" width="42" height="42" alt="twitter icon" />'+
											'</a>'+
											'<div class="title">'+
												'<span class="tweetprofilelink">'+
													'<a class="profilename" href="https://twitter.com/'+tweetusername+'" target="_blank">'+tweetscreenname+'</a><br />'+
													'<a class="profileid" href="https://twitter.com/'+tweetusername+'" target="_blank">@'+tweetusername+'</a>'+
												'</span>'+
											'</div>';


							feedHTML += '</div>';

							feedHTML += '<div class="tweet-content"><div class="text">'+
											'<p>'+status+'</p>'+
											'<p class="meta">';
												/* Show actions */
												if (opt.showtweetactions == true) {
													feedHTML += '<span class="tweet-actions">'+
																	'<a class="tweet-reply" href="https://twitter.com/intent/tweet?in_reply_to='+tweetid+'" title="Reply"></a>'+
																	'<a class="tweet-retweet" href="https://twitter.com/intent/retweet?tweet_id='+tweetid+'" title="Retweet"></a>'+
																	'<a class="tweet-fave" href="https://twitter.com/intent/favorite?tweet_id='+tweetid+'" title="Favourite"></a>'+
																'</span>';
												}

									/* Show retweet indicator */
									if ((isaretweet == true) && (opt.showretweetindicator == true)) { feedHTML +='<span class="tweet-retweet"></span>' };

									feedHTML += '<span class="meta-date">'+
													'<a href="https://twitter.com/'+tweetusername+'/status/'+tweetid+'" target="_blank">'+relative_time(feeds[i].created_at)+'</a>'+
												'</span></p></div></div></div>';
						}
					}
				}

				$(element).css('background','transparent').html(feedHTML);

				//Add twitter action animation and rollovers
				if (opt.showtweetactions == true) {

					//Add new window for action clicks
					$('.tweet-actions a').click(function(){
						var url = $(this).attr('href');
						window.open(url, 'tweet action window', 'width=580,height=500');
						return false;
					});
				}

			}).error(function(jqXHR, textStatus, errorThrown) {
				var error = "";
				if (jqXHR.status === 0) {
					error = 'Connection problem. Check file path and www vs non-www in getJSON request';
				} else if (jqXHR.status == 404) {
					error = 'Requested page not found. [404]';
				} else if (jqXHR.status == 500) {
					error = 'Internal Server Error [500].';
				} else if (exception === 'parsererror') {
					error = 'Requested JSON parse failed.';
				} else if (exception === 'timeout') {
					error = 'Time out error.';
				} else if (exception === 'abort') {
					error = 'Ajax request aborted.';
				} else {
					error = 'Uncaught Error.\n' + jqXHR.responseText;
				}
				alert("error: " + error);
			});

			//Function modified from Stack Overflow
			function addlinks(data) {
				//Add link to all http:// links within tweets
				data = data.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(url) {
					return '<a href="'+url+'"  target="_blank">'+url+'</a>';
				});

				//Add link to @usernames used within tweets
				data = data.replace(/\B@([_a-z0-9]+)/ig, function(reply) {
					return '<a href="http://twitter.com/'+reply.substring(1)+'" style="font-weight:lighter;" target="_blank">'+reply.charAt(0)+reply.substring(1)+'</a>';
				});

				//Add link to #hastags used within tweets
				data = data.replace(/\B#([_a-z0-9]+)/ig, function(reply) {
					return '<a href="https://twitter.com/search?q='+reply.substring(1)+'" style="font-weight:lighter;" target="_blank">'+reply.charAt(0)+reply.substring(1)+'</a>';
				});
				return data;
			}

			function relative_time(time_value) {
				var values = time_value.split(" ");
				time_value = values[1] + " " + values[2] + ", " + values[5] + " " + values[3];
				var parsed_date = Date.parse(time_value);
				var relative_to = (arguments.length > 1) ? arguments[1] : new Date();
				var delta = parseInt((relative_to.getTime() - parsed_date) / 1000);
				var shortdate = time_value.substr(4,2) + " " + time_value.substr(0,3);
				delta = delta + (relative_to.getTimezoneOffset() * 60);

				if (delta < 60) {
					return '1m';
				} else if(delta < 120) {
					return '1m';
				} else if(delta < (60*60)) {
					return (parseInt(delta / 60)).toString() + 'm';
				} else if(delta < (120*60)) {
					return '1h';
				} else if(delta < (24*60*60)) {
					return (parseInt(delta / 3600)).toString() + 'h';
				} else if(delta < (48*60*60)) {
					return shortdate;
				} else {
					return shortdate;
				}
			}
		}
	};

	$.fn.twitterfeed = function ( option ) {
		return this.each(function () {
			var $this = $(this),
			data = $this.data('twitterfeed'),
			options = typeof option == 'object' && option;
			if (!data) $this.data('twitterfeed', (data = new TwitterFeed(this, options)));
			if (typeof option == 'string') data[option]();
		});
	};

	$.fn.twitterfeed.Constructor = TwitterFeed;

	$.fn.twitterfeed.defaults = {
		showtweetactions 	: true,
		showretweetindicator: true,
		showretweets 		: true,
		showdirecttweets 	: true,
		showtweetlinks 		: true,
		count 				: 3
	};


})(window, jQuery);