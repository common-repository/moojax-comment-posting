=== Ajax Comment Posting ===
Contributors: Alex
Tags: comments, ajax, post, comment, mootools
Requires at least: 2.0
Tested up to: 2.2.3
Stable tag: 1.0

Ajaxify commenting with the MooTools JS Framework- mootools.net

== Description ==

Basic verification and asynchronous posting with snazzy effects. Developed specifically to work with the mootools framework.

Should deprecate peacefully, and tested in Safari, Opera, Firefox and IE7

MooTools is an ultra-light frame work with faster operation than prototype/scriptaculous and more intuitive nomenclature than jQuery. This plugin will not work if you already use another library on your site (JQuery, scriptaculous, etc).

Should you have any issues plugging this into your site please email me: mcp@handsandfeetdesign.com

== Changelog ==
Version 0.1: initial release
Version 0.2: added UTF-8 header so 'foreign' characters were rendered properly in returned comment
Version 0.3: corrected issues with IE and dom objects causing foul ups and added throbber preloader
Version 0.4: added some extra error handling in case of browser bugs in Safari BETA
Version 1.0: Complete re-write, features smaller footprint, smaller namespace, better error handling, more flexible styling, 'language' options. Bundled MooTools is latest version (1.1).

== Installation ==

1. Upload the plugin directory `moojax-comment-posting` to the `wp-content/plugins` directory.
2. If you have already included the mootools framework in your template, edit the moojax-comment.php file to comment out duplicate inclusion of the library
3. Add the foillowing CSS classes to your template to style error messages and throbbers:
	div.error {}
	form.throbbing {}
For example, you can 'disable' the submit button during the submission with:
	form.throbbing input[type="submit"]{display:none;}
4. Activate the plugin through the 'Plugins' menu in WordPress.

== Frequently Asked Questions ==

= But the whole point of AJAX is throbbers! How do I add a throbber? =
To indicate 'waiting' this plugin adds the class 'throbbing' to the form whilst it's working. So to for example add a throbbing gif to the textarea whilst the plugin is working, add this to your site CSS:
.throbbing textarea {background:transparent url(thobber.gif) no-repeat 50% 50% scroll}
= Why isn't my plugin working or it works differently than it should? =
[Contact me](mcp@handsandfeetdesign.com "Contact the author of the plugin") to report any bugs.
= Why don't you include a default throbber/CSS file? =
Because in the interest of keeping your site performing well, easily maintained and fast it's best to take the time to do these things yourself. Get a nice throbber at ajaxload.info
= How do I change the language? =
Edit the plugin php file and add the following above the include statements:
echo '<script type="text/javascript">
	mcpOptions = {
			removeForm: true,	//Remove the form after a comment is sent?
			nameError : 'Please give your name',
			emailError : 'Please give a valid email address',
			msgError : 'You forgot a message!',
			inmoderation : 'Thanks for your comment-it is now in moderation'
	};
	</script>';
= This broke my other MooTools scripts on my page! =
The plugin comes with the minimum version of MooTools- probably not including what your page needs- simply comment out the line including the mootools file from the php file.

= Nothing happens on my funky template =
The script uses CSS selectors to identify form elements- re-name things and it wont play well- remember you can add more than one class to elements!

== Screenshots ==
Visit [the plugin page](http://handsandfeetdesign.com/mcp "The MCP page") to see it in action and to comment on it.
