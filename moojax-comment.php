<?php
/*
Plugin Name: Moojax Comment Posting
Plugin URI: http://handsandfeetdesign.com/mcp
Description: Posts comments and validates the comment form using Ajax.,Built on the mootools framework, this plugin is designed to be usedwithMooTools empowered sites, and wont play nicely if you're using a library like jQuery.
Author: Alex
Version: 1
Author URI: http://handsandfeetdesign.com/mcp
*/ 

/*
I am fully aware of the pun!
*/

function mcp_head() {
	//Comment out this top line if you are already using MooTools
	echo '<script type="text/javascript" src="'.get_settings('siteurl').'/wp-content/plugins/moojax-comment-posting/moo.js"></script>';
	echo '<script type="text/javascript" src="'.get_settings('siteurl').'/wp-content/plugins/moojax-comment-posting/mcp.js"></script>';
}
add_action('wp_head', 'mcp_head');

?>