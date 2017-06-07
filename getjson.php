<?php 

	require_once dirname(__FILE__) . '/oauth-php/library/OAuthRequest.php';
	require_once dirname(__FILE__) . '/oauth-php/library/OAuthRequester.php';
	require_once dirname(__FILE__) . '/oauth-php/library/OAuthRequestSigner.php';
	require_once dirname(__FILE__) . '/oauth-php/library/OAuthRequestVerifier.php';

	$url = $_POST['url'];
	$ck = $_POST['ck'];
	$cs = $_POST['cs']; 
	$cmd = $_POST['cmd'];

	define("CONSUMER_KEY", "ck_c9ecaf187b04d41d88e4f0abeac7887a63cb2a90"); // 
	define("CONSUMER_SECRET", "cs_e59bf3bc088ebc65fc7e0206652361007d338a7a"); // 

	define("OAUTH_HOST", "http://newexportec.com.br/");
	define("REQUEST_TOKEN_URL", OAUTH_HOST . "/accounts/OAuthGetRequestToken");
	define("GOOGLE_AUTHORIZE_URL", GOOGLE_OAUTH_HOST . "/accounts/OAuthAuthorizeToken");
	define("GOOGLE_ACCESS_TOKEN_URL", GOOGLE_OAUTH_HOST . "/accounts/OAuthGetAccessToken");
	
	$options = array(
		'consumer_key' => CONSUMER_KEY, 
		'consumer_secret' => CONSUMER_SECRET,
		'server_uri' => OAUTH_HOST,
		'request_token_uri' => GOOGLE_REQUEST_TOKEN_URL,
		'authorize_uri' => GOOGLE_AUTHORIZE_URL,
		'access_token_uri' => GOOGLE_ACCESS_TOKEN_URL
	);

?>