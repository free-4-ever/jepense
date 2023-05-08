<script lang="ts">
	import { page } from '$app/stores';

	$: {
		//  if (typeof gtag !== 'undefined') {
		//    gtag('config', 'MEASUREMENT_ID', {
		//      page_title: document.title,
		//      page_path: $page.url.pathname,
		//    })
		//  }
      console.log('running url tracker')
		if (typeof _paq !== 'undefined') {
         // $page.url.pathname
			logPage($page.url.pathname);
		}
	}
</script>

<svelte:head>
	<script async src="https://analytics.innouts.com/matomo.php">
	</script>
	<script>
      console.log('setting up analytics')
		var _paq = (window._paq = window._paq || []);
		var u = 'https://analytics.innouts.com/';
		// _paq.push(['requireConsent']);
		_paq.push(['setTrackerUrl', u + 'matomo.php']);
		_paq.push(['setSiteId', 6]);
      _paq.push(["rememberConsentGiven"]);
		// accurately measure the time spent in the visit
		// _paq.push(['enableHeartBeatTimer']);
		//   (function() {
		//     var u="https://analytics.innouts.com/";
		//     _paq.push(['requireConsent']);
		//     _paq.push(['setTrackerUrl', u+'matomo.php']);
		//     _paq.push(['setSiteId', 6]);
		//     // accurately measure the time spent in the visit
		//    _paq.push(['enableHeartBeatTimer']);
		//     var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
		//     g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
		//   })();
		//  window.dataLayer = window.dataLayer || []

		function logPage(path) {
         console.log('running logger')
			// _paq.push(["setDocumentTitle", document.title]); // tails the actual title by one since invoked before new dom updated
			// _paq.push(['setReferrerUrl', fromPath]);
			_paq.push(['setCustomUrl', path]);
			_paq.push(['trackPageView']);
			_paq.push(['enableLinkTracking']);
		}
		//  function gtag() {
		//    dataLayer.push(arguments)
		//  }

		//  gtag('js', new Date())
		//  gtag('config', 'MEASUREMENT_ID')
	</script>
</svelte:head>
