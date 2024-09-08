<script lang="ts">
  import Footer from "$lib/components/item/Footer.svelte";

  let faqsList = [
    {
      q: "How can I download Zene?",
      a: "You can download Zene from the Google Play Store for Android devices or the App Store for iOS devices.",
    },
    {
      q: "Is Zene available in my country?",
      a: "Zene is available in most countries around the world. However, the specific music catalog may vary depending on your location.",
    },
    {
      q: "Do I need an account to use Zene?",
      a: "No need to create a account you can use Google, Apple or Facebook on Tap login to access Zene.",
    },
    {
      q: "How do I restore my account if I forget my password?",
      a: "Zene does not require manual login with an email and password. Instead, it offers a seamless one-tap login through Google, Apple, or Facebook for quick access.",
    },
    {
      q: "What kind of music is available on Zene?",
      a: "Zene offers a vast library of music, including popular genres like pop, rock, hip-hop, electronic, classical, and more.",
    },
    {
      q: "Can I search for specific songs, artists, playlists or albums?",
      a: "Yes, By clicking on search button on homepage navebar and use the search bar to find your favorite songs, artists, playlists or albums.",
    },
    {
      q: "Does Zene store my music history?",
      a: "Yes, Zene stores your listening history to help with personalized recommendations.",
    },
    {
      q: "How does Zene recommend music to me?",
      a: "Zene uses algorithms to analyze your listening habits and recommend songs and playlists that you might enjoy.",
    },
    {
      q: "Can I create playlists on Zene?",
      a: "Yes, By clicking on music button on homepage navebar and they clicking add button on top.",
    },
    {
      q: "Can I share my playlists with friends?",
      a: "Yes, you can share your playlists by click on share icon in any playlist view.",
    },
    {
      q: "Can I listen to music offline?",
      a: "No, you cannot because of some legal issue. We cannot make you save the song offline",
    },
    {
      q: "Is there a radio feature on Zene?",
      a: "No, Zene doesn't currently offer a radio feature. However, we're working hard to bring a radio feature to both Android and iOS users before the end of this year.",
    },
    {
      q: "Can I customize my listening experience?",
      a: "Yes, you can adjust audio settings like equalizer and volume using the phone's default equalizer or using any 3rd party equalizer app.",
    },
    {
      q: "Does Zene have a lyrics feature?",
      a: "Yes, Zene displays lyrics for almost every songs users can click on bottom right song icon to view the songs details and other settings.",
    },
    {
      q: "Can I connect Zene to my smart speaker?",
      a: "Yes, you can connect Zene to compatible smart speakers using the phone's bluetooth.",
    },
    {
      q: "Does Zene support Bluetooth headphones?",
      a: "Yes, Zene works with all Bluetooth-enabled headphones and speakers.",
    },
    {
      q: "How do I report a problem with Zene?",
      a: "You can contact Zene's support team on knocknock@zenemusic.co or you can go to settings in Zene and click on feedback.",
    },
    {
      q: "Does Zene have ads?",
      a: "Yes, Zene support by ads but only when you are surfing the app and even then ads a pop after a duration gap of around 5-6 minutes.",
    },
    {
      q: "How can I remove ads from Zene?",
      a: "While Zene is free, you can remove ads to remove ads from the app but we are looking forward to introduce an affordable subscription plans to go ad-free.",
    },
    {
      q: "What should I do if Zene is not working properly?",
      a: "Step 1: check you internet connection. Step 2: Force close the app and open again. Step 3: Re-install the app.",
    },
    {
      q: "Why can't I play music on Zene?",
      a: "Ensure you have a stable internet connection. If the issue continues, check for a app updates on Play and App Store.",
    },
    {
      q: "How do I update Zene?",
      a: "Check for updates in the app store (Google Play Store or App Store).",
    },
    {
      q: "How does Zene handle my personal data?",
      a: "Yes, Zene is completely safe and transfer all your data in encrypt format.",
    },
    {
      q: "Is my music histrory data safe on Zene?",
      a: "Yes, Zene save your music history securly and auto delete it after 2 weeks (15 days).",
    },
    {
      q: "Can I use Zene on multiple devices?",
      a: "You can log in to your Zene account on multiple devices using the same email address and all you data will be synced.",
    },
    {
      q: "Is Zene compatible with Android Auto or Apple CarPlay?",
      a: "Yes, Zene is compatible with these car systems.",
    },
    {
      q: "How do I find similar artists or songs on Zene?",
      a: "Zene's recommendation algorithm suggests similar artists and songs based on your listening preferences.",
    },
    {
      q: "Can I use Zene to listen to podcasts?",
      a: "Yes, Zene offers a podcast library where you can discover and listen to various podcasts.",
    },
    {
      q: "Can I use Zene to stream music to my TV?",
      a: "Yes, you can connect your device to your TV and use Zene to stream music.",
    },
    {
      q: "How do I change my language setting on Zene?",
      a: "You cannot change app language from the app setting. You have to change your device default language.",
    },
    {
      q: "Can I use Zene to listen to music in the background?",
      a: "Yes, you can listen to music in the background while using other apps.",
    },
    {
      q: "Is Zene compatible with my device?",
      a: "Zene is compatible with most modern smartphones and tablets. For Android 8.0 and above, For IOS 16.0 and above.",
    },
    {
      q: "Can I listen to music on Zene while using other apps?",
      a: "Yes, you can use Zene in the background while using other apps.",
    },
    {
      q: "How do I remove a song from my playlist on Zene?",
      a: "Tap the minus icon on the song in your playlist which will then remove the song.",
    },
    {
      q: "Can I use Zene to listen to music on multiple devices simultaneously?",
      a: "Yes, you can use Zene on multiple devices simultaneously with the same account.",
    },
    {
      q: "How do I enable or disable notifications on Zene?",
      a: "You can manage notifications in your device's app settings. But remeber disabling notification will not show current playing song status in background.",
    },
    {
      q: "Is Zene available in different languages?",
      a: "Yes, Zene is available in multiple languages which are English, Chinese, Spanish, Arabic, Portuguese, Hindi, Korean, Japanese, French, German, Russian and Indonesian.",
    },
    {
      q: "How can I discover new music on Zene?",
      a: "Zene provides curated playlists, trending songs, and personalized recommendations to help you discover new music.",
    },
    {
      q: "Does Zene allow you to follow artists?",
      a: "Yes, you can follow a artists by which you will get that artists latest updates.",
    },
    {
      q: "How do I request new features for Zene?",
      a: "You can send feature requests through the 'Feedback' option in app or mailling us on knocknock@zenemusic.co section within the app.",
    },
    {
      q: "Can I search for songs by lyrics?",
      a: "Yes, you can search songs, videos based on lyrics.",
    },
    {
      q: "Can I search for songs by lyrics?",
      a: "Yes, you can search songs, videos based on lyrics.",
    },
    {
      q: "How often does Zene update its music catalog?",
      a: "Zene's catalog is regularly updated with the latest songs, albums, and playlists to ensure you always discovering fresh music.",
    },
    {
      q: "Does Zene support Chromecast?",
      a: "Yes, you can cast Zene music to your TV or smart speaker using Chromecast.",
    },
    {
      q: "Can I control playback using my voice?",
      a: "No, Zene is not yet compatible with voice assistants like Google Assistant and Siri. However, this feature is expected to roll out globally by the end of the year.",
    },
    {
      q: "Can I see what my friends are listening to?",
      a: "Zene does not yet support social listening features, but we are exploring this option.",
    },
    {
      q: "Can I set Zene as my default music player?",
      a: "Currently, Zene does not support playing local music files. So there is not any features to set the Zene app as default music player.",
    },
    {
      q: "Does Zene support gapless playback?",
      a: "Yes, Zene supports gapless playback for a seamless listening experience.",
    },
    {
      q: "How do I change my email on Zene?",
      a: "Currently, changing the default email address on Zene is not directly supported. However, you can request a change by emailing us at knocknock@zenemusic.co, and we will assist you with the process.",
    },
    {
      q: "Can I import my music from other apps into Zene?",
      a: "Zene does not currently support importing music from other apps, but we are exploring ways to integrate with other music services.",
    },
    {
      q: "Does Zene have a feature for discovering concerts or live events?",
      a: "At this time, Zene does not offer concert or live event information, but we are considering adding this feature.",
    },
    {
      q: "Does Zene support integration with fitness apps or devices?",
      a: "Zene does not currently integrate with fitness apps or devices, but we are exploring potential future integrations.",
    },
    {
      q: "Can I customize my lock screen with Zene controls?",
      a: "Yes, Zene supports lock screen controls so you can easily manage playback without unlocking your device.",
    },
    {
      q: "Can I see artist bios and album information in Zene?",
      a: "Yes, Zene provides detailed artist bios and album information to enhance your listening experience.",
    },
    {
      q: "Can I use Zene in airplane mode?",
      a: "Zene requires an internet connection to stream music, so it cannot be used in airplane mode.",
    },
    {
      q: "How can I provide feedback to Zene?",
      a: "We value your feedback! You can send your thoughts and suggestions via the feedback option in the app or directly on knocknock@zenemusic.co.",
    },
  ];
</script>

<svelte:head>
  <title>FAQ | Zene : A Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="About Zene | Zene : A Music App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/faq" />
  <meta name="keywords" content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android, music app for iphone, music player app, free music download, music discovery app, offline listening, curated playlists, high-fidelity audio, free music streaming with no ads, workout music app, music for studying app, audio streaming, mobile music app, radio, radio streaming" />
</svelte:head>

<br />
<br />
<br />
<br />
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="max-w-2xl mx-auto mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight text-white text-center">Answers to the most frequently asked questions.</h2>
  </div>

  <div class="max-w-2xl mx-auto divide-y divide-gray-200 dark:divide-neutral-700">
    {#each faqsList as f}
      <div class="py-8 first:pt-0 last:pb-0">
        <div class="flex">
          <svg class="shrink-0 mt-1 size-6 text-white dark:text-neutral-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><path d="M12 17h.01" /></svg>
          <h3>&nbsp;&nbsp;</h3>
          <div class="grow">
            <h3 class="md:text-lg font-semibold text-white dark:text-neutral-200">{f.q}</h3>
            <p class="mt-1 text-gray-300 dark:text-neutral-500">{f.a}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</div>

<Footer />
