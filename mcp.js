var MCP = {
	init: function(options){
		this.options = $extend({
			removeForm: true,
			nameError : 'Please give your name',
			emailError : 'Please give a valid email address',
			msgError : 'You forgot a message!',
			inmoderation : 'Thanks for your contribution,it will be displayed after it has been checked by a moderator. '
		}, options || {});
		$('commentform').addEvent('submit', function(ent) {
			this.sendForm(ent);
			return false;
		}.bind(this));
	},
	sendForm : function(ent) {
		try {
			var error = '';
			if($('commentform').author && $('commentform').author.value == '') error = '<br />'+MCP.options.nameError;
			else if($('commentform').email && !(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($('commentform').email.value))) error = '<br />'+MCP.options.emailError;
			else if($('commentform').comment.value == '' || $('commentform').comment.value == $('commentform').comment.title) error = '<br />'+MCP.options.msgError;
			if(error !='') 
				MCP.errorMsg(error);
			else {
				$('commentform').addClass('throbbing');
				$('commentform').send({
					evalScripts : false,
					onFailure : function(transport) {
						try {
							er = transport.responseText.match(/<p>(.*)<\/p>/);
							if(er.length) er = er[1];
							MCP.errorMsg(er);
							MCP.mcpDone();
						} catch(e) {
							MCP.errorMsg("AJAX Error - this may be caused by the browser you're using, or a aserver error- please try again");
							$('commentform').removeEvents('submit');
							$('commentform').fireEvent('submit');
						}
					},
					onSuccess : function() {
						var tr = this.response.text.split(/<body[^>]*?>/);
							tr = tr[1].split(/<\/body>/);
						tempDump = new Element('div').setHTML(tr[0]);
						if($E('.commentlist')){
							if($E('.commentlist').getChildren().length == $E('.commentlist', tempDump).getChildren().length)
								new Element('li').setHTML(MCP.options.inmoderation).addClass('in-moderation').injectInside($E('.commentlist'));
							else $E('.commentlist', tempDump).getLast().injectInside($E('.commentlist'));
						}
						else {
							if($E('ol',tempDump)) el = $E('ol',tempDump);
							else el = $E('ul',tempDump);
							if(!$E("comments",el) && $E('#comments',tempDump)) $E('#comments',tempDump).injectBefore($('commentform'))
							el.injectBefore($('commentform'));
						}
						tempDump.remove();
						MCP.errorMsg("Thank you, your post was successful");
						MCP.removeForm();
						MCP.mcpDone();
					}
				});
			}
			new Event(ent).stop();
			return false;
		} catch(e) {
			return true;
		}
	},
	removeForm : function() {
		if(MCP.options.removeForm) {
			new Fx.Slide('commentform',{duration:1800,onComplete:function() {$('commentform').remove(); if($('respond')) $('respond').remove()}}).slideOut();
		} else
			$('comment').value = '';
	},
	errorMsg : function(errorMessage) {
		MCP.mcpDone();
		var err = new Element('div', {'class': 'error' }).setHTML(errorMessage).injectBefore($('comment'));
		var errSlide = new Fx.Slide(err);
		var errFx = new Fx.Style(err, 'opacity', {duration:1000});
		errFx.start(0.1,0.9).chain(function(){
			errFx.start(0.9,0.1);
		}).chain(function(){
			errFx.start(0.1,0.9);
		}).chain(function() {
			errSlide.slideOut();
		});
	},
	mcpDone: function () {
		$('comment').removeClass('throbbing');
	}
};
window.addEvent('domready', function() {	if($('commentform')) MCP.init((window.mcpOptions) ? mcpOptions :  {});	});