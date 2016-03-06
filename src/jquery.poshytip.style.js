/*<script type="text/javascript">*/
		//<![CDATA[
		$(function(){

			$('#demo-basic').poshytip();
			$('#demo-tip-yellow').poshytip();
			$('#tip-violet-s1').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			$('#tip-violet-s2').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			$('#tip-violet-s3').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			$('#tip-violet-s4').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			$('#tip-violet-s5').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			$('#tip-violet-s6').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			$('#tip-violet-s7').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			$('#tip-violet-s8').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			$('#tip-violet-s9').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			$('#tip-violet-s10').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			$('#tip-violet-s11').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			$('#tip-violet-s12').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			$('#tip-violet-s13').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			$('#tip-violet-s14').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			$('#tip-violet-s15').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			$('#tip-violet-s16').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			$('#tip-violet-s17').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			$('#tip-violet-s18').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			$('#tip-violet-s19').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			$('#tip-violet-s20').poshytip({
				className: 'tip-violet',
				bgImageFrameSize: 9
			});
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			$('#demo-tip-darkgray').poshytip({
				className: 'tip-darkgray',
				bgImageFrameSize: 11,
				offsetX: -25
			});
			$('#demo-tip-skyblue').poshytip({
				className: 'tip-skyblue',
				bgImageFrameSize: 9,
				offsetX: 0,
				offsetY: 20
			});
			$('#demo-tip-yellowsimple').poshytip({
				className: 'tip-yellowsimple',
				showTimeout: 1,
				alignTo: 'target',
				alignX: 'center',
				offsetY: 5,
				allowTipHover: false
			});
			$('#demo-tip-twitter').poshytip({
				className: 'tip-twitter',
				showTimeout: 1,
				alignTo: 'target',
				alignX: 'center',
				offsetY: 5,
				allowTipHover: false,
				fade: false,
				slide: false
			});
			$('#demo-tip-green').poshytip({
				className: 'tip-green',
				offsetX: -7,
				offsetY: 16,
				allowTipHover: false
			});
			$('#demo-form-name').poshytip({
				className: 'tip-yellowsimple',
				showOn: 'focus',
				alignTo: 'target',
				alignX: 'right',
				alignY: 'center',
				offsetX: 5,
				showTimeout: 100
			});
			$('#demo-form-email').poshytip({
				className: 'tip-yellowsimple',
				showOn: 'focus',
				alignTo: 'target',
				alignX: 'left',
				alignY: 'center',
				offsetX: 5,
				showTimeout: 100
			});
			$('#demo-form-site').poshytip({
				className: 'tip-yellowsimple',
				showOn: 'focus',
				alignTo: 'target',
				alignX: 'inner-left',
				offsetX: 0,
				offsetY: 5,
				showTimeout: 100
			});
			$('#demo-form-subject').poshytip({
				className: 'tip-yellowsimple',
				showOn: 'focus',
				alignTo: 'target',
				alignX: 'center',
				alignY: 'bottom',
				offsetX: 0,
				offsetY: 5,
				showTimeout: 100
			});
			$('#demo-async-timeout').poshytip({
				content: function(updateCallback) {
					window.setTimeout(function() {
						updateCallback('Tooltip content updated!');
					}, 1000);
					return 'Loading...';
				}
			});

			var flickrFeedsCache = {};
			$('#demo-async-flickr > a').poshytip({
				className: 'tip-darkgray',
				bgImageFrameSize: 11,
				alignY: 'bottom',
				content: function(updateCallback) {
					var rel = $(this).attr('rel');
					if (flickrFeedsCache[rel] && flickrFeedsCache[rel].container)
						return flickrFeedsCache[rel].container;
					if (!flickrFeedsCache[rel]) {
						flickrFeedsCache[rel] = { container: null };
						var tagsComma = rel.substring(4).replace('-', ',');
						$.getJSON('http://api.flickr.com/services/feeds/photos_public.gne?tags=' + tagsComma + '&tagmode=all&format=json&jsoncallback=?',
							function(data) {
								var container = $('<div/>').addClass('flickr-thumbs');
								$.each(data.items, function(i, item) {
									$('<a/>')
										.attr('href', item.link)
										.append($('<img/>').attr('src', item.media.m))
										.appendTo(container)
										.data('tip', '<strong>' + (item.title || '(no title)') + '</strong><br />by: ' + item.author.match(/\((.*)\)/)[1]);
									if (i == 4)
										return false;
								});
								// add tips for the images inside the main tip
								container.find('a').poshytip({
									content: function(){return $(this).data('tip');},
									className: 'tip-yellowsimple',
									showTimeout: 100,
									alignTo: 'target',
									alignX: 'center',
									alignY: 'bottom',
									offsetY: 5,
									allowTipHover: false,
									hideAniDuration: 0
								});
								// call the updateCallback function to update the content in the main tooltip
								// and also store the content in the cache
								updateCallback(flickrFeedsCache[rel].container = container);
							}
						);
					}
					return 'Loading images...';
				}
			});
			$('#demo-follow-cursor').poshytip({
				followCursor: true,
				slide: false
			});
			$('#demo-manual-trigger').poshytip({
				content: 'Hey, there! This is a tooltip.',
				showOn: 'none',
				alignTo: 'target',
				alignX: 'inner-left',
				offsetX: 0,
				offsetY: 5
			});
			$('#button-show').click(function() { $('#demo-manual-trigger').poshytip('show'); });
			$('#button-show-delayed').click(function() { $('#demo-manual-trigger').poshytip('showDelayed', 2000); });
			$('#button-hide').click(function() { $('#demo-manual-trigger').poshytip('hide'); });
			$('#button-hide-delayed').click(function() { $('#demo-manual-trigger').poshytip('hideDelayed', 2000); });
			$('#button-update').click(function() { $('#demo-manual-trigger').poshytip('update', 'I am a new content :)'); });
			$('#button-disable').click(function() { $('#demo-manual-trigger').poshytip('disable'); });
			$('#button-enable').click(function() { $('#demo-manual-trigger').poshytip('enable'); });
			$('#button-destroy').click(function() { $('#demo-manual-trigger').poshytip('destroy'); });
			$('#demo-live-events > a').poshytip({
				liveEvents: true
			});
			$('#button-live-events').click(function() {
				$('#demo-live-events').append(', <a title="Hey, there! This is a tooltip." href="#">Hover for a tooltip</a>');
			});

		});
		//]]>
	/*</script> */