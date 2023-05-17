<script lang="ts">
	import { page } from '$app/stores';

	// console.log('running url tracker');
	if (typeof _paq !== 'undefined') {
		console.log($page.data.analytics_key)
		setup($page.data.analytics_key);
	}

	$: {
		// console.log('running url tracker');
		if (typeof _paq !== 'undefined') {
			logPage($page.url.pathname);
		}
	}
</script>

<svelte:head>
	<!-- <script async src="https://jepense.me/analytics/jp.php">
	</script> -->

	<script>
		// console.log('setting up analytics');
		function logPage(path) {
			_paq.push(['setDocumentTitle', document.title]); // tails the actual title by one since invoked before new dom updated
			_paq.push(['setReferrerUrl', path]);
			_paq.push(['setCustomUrl', path]);
			_paq.push(['trackPageView']);
			_paq.push(['enableLinkTracking']);
		}
		var _paq = (window._paq = window._paq || []);

		function setup(analytics_id) {
			_paq.push(['enableHeartBeatTimer']);
			var u = 'https://jepense.me/analytics/';

			_paq.push(['setTrackerUrl', u + 'jp.php']);
			_paq.push(['setSiteId', analytics_id]);
			// accurately measure the time spent in the visit
			_paq.push(['enableHeartBeatTimer']);
			var d = document,
				g = d.createElement('script'),
				s = d.getElementsByTagName('script')[0];
			g.async = true;
			g.src = u + 'jp.js';
			s.parentNode.insertBefore(g, s);
		}

		// _paq.push(['requireConsent']);
		// _paq.push(['setTrackerUrl', u + 'jp.php']);
		// _paq.push(['setSiteId', 6]);
		// _paq.push(["rememberConsentGiven"]);
		// accurately measure the time spent in the visit
		// (function () {
		// })();
	</script>
</svelte:head>
