<?php

/*
  Plugin Name: Slider Block Raju
  Description: Your Plugin Description Here
  Version: 1.0
  Author: Azizul Raju
  Author URI: https://facebook.com/azizulDev
*/

if( ! defined( 'ABSPATH' ) ) exit; // Exit if accessed directly

class InitializeScriptss {
  function __construct() {
    add_action('init', array($this, 'adminAssetss'));
  }


  // loading src files in the gutenberg editor screen
  function adminAssetss() {
    wp_register_style('mainblockcsss', plugin_dir_url(__FILE__) . 'build/index.css');
    wp_register_script('ournewblocktypee', plugin_dir_url(__FILE__) . 'build/index.js', array('wp-blocks', 'wp-element'));
    register_block_type('myplugins/slider-block-raju', array(
      'editor_script' => 'ournewblocktypee',
      'editor_style' => 'mainblockcsss'
    ));
  }
}

$initializeScriptss = new InitializeScriptss();