<script lang="ts">
  import Footer from "$lib/components/item/Footer.svelte";
  import { support_mail_server } from "$lib/utils/Utils";

</script>

<svelte:head>
  <title>Legal | Zene : A Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Legal | Zene : A Music App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/legal" />
  <meta name="keywords" content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android, music app for iphone, music player app, free music download, music discovery app, offline listening, curated playlists, high-fidelity audio, free music streaming with no ads, workout music app, music for studying app, audio streaming, mobile music app, radio, radio streaming" />

  <style>
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      padding-left: 1em;
      text-indent: -0.7em;
    }

    li::before {
      content: '• ';
      color: white;
    }

    a {
      color: blue;
    }
  </style>
</svelte:head>

<div class="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24 text-white">
  <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Zene Intellectual Property and Rights Infringement Policy</h1>
</div>

<div class="mx-auto max-w-7xl prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600 text-white font-normal">
  <p>This Zene ("App") curates music content through integrations with third-party APIs provided by services like YouTube, LastFM, Soundcloud, and Spotify (collectively, "Content Providers"). We do not own or claim ownership of any music, videos, or other content ("Content") accessible through the App.</p>
  <p>Our music app is committed to respecting the intellectual property rights of others. This policy outlines our stance against any activities that infringe on another party's rights, ensuring compliance with Apple's App Store guidelines and applicable laws.</p>

  <h2 class="font-extrabold mt-24 mb-5 text-2xl">Use of Third-Party APIs</h2>
  <p>The App utilizes authorized APIs from Content Providers to access and display their Content. We comply with the terms and conditions established by each Content Provider's API usage guidelines. You can find links to each Content Provider's privacy policy and API terms of service below:</p>
  <ul>
    <li>Spotify API: <a href="https://developer.spotify.com/documentation/web-api" class="text-lightblue">https://developer.spotify.com/documentation/web-api</a> for <a href="https://developer.spotify.com/policy" class="text-lightblue">Privacy Policy</a></li>    
    <li>YouTube API: <a href="https://developers.google.com/youtube/v3" class="text-lightblue">https://developers.google.com/youtube/v3</a> for <a href="https://developers.google.com/youtube/terms/developer-policies" class="text-lightblue">Privacy Policy</a></li>    
    <li>LastFM API: <a href="https://www.last.fm/api" class="text-lightblue">https://www.last.fm/api</a> for <a href="https://www.last.fm/api/tos" class="text-lightblue">Privacy Policy</a></li>    
    <li>Pintrest API: <a href="https://developers.pinterest.com/" class="text-lightblue">https://developers.pinterest.com/</a> for <a href="https://developers.pinterest.com/terms/" class="text-lightblue">Privacy Policy</a></li>    
    <li>Soundcloud API: <a href="https://developers.soundcloud.com/docs/api/guide" class="text-lightblue">https://developers.soundcloud.com/docs/api/guide</a> for <a href="https://developers.soundcloud.com/docs/api/privacy" class="text-lightblue">Privacy Policy</a></li>    
    <li>Musixmatch Lyrics API: <a href="https://developer.musixmatch.com/" class="text-lightblue">https://developer.musixmatch.com/</a> for <a href="https://about.musixmatch.com/privacy-policy" class="text-lightblue">Privacy Policy</a></li>    
  </ul>

  

  <h2 class="font-extrabold mt-24 mb-5 text-2xl">Any Questions?</h2>
  <p>If you have any questions about this Policy, please contact us by email at <a class="text-lightblue" href={`mailto:${support_mail_server}`}>{support_mail_server}</a>.</p>
</div>

<Footer />

<style>
  li::marker {
    color: white;
  }
</style>

<Footer />
