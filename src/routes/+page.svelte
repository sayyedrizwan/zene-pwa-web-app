<script lang="ts">
  import { goto } from "$app/navigation";
  import CardInfoTypeView from "$lib/components/CardInfoTypeView.svelte";
  import AdsView from "$lib/components/item/AdsView.svelte";
  import Footer from "$lib/components/item/Footer.svelte";
  import NavIcon from "$lib/components/NavIcon.svelte";
  import { TextType } from "$lib/utils/model/TextType";
  import { suggested_songs, top_albums, top_global_artists, top_playlists, top_songs, top_videos } from "$lib/utils/Utils";
  import { onMount } from "svelte";

  export let data: any;

  onMount(async () => {
    if (!data.loggedIn) {
      goto("/home");
    }
  });
</script>

<svelte:head>
  <title>Zene : A Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Zene : A Music App" />
  <meta property="og:image" content="/logo820.png" />
  <link rel="icon" type="image/x-icon" href="/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/" />
  <meta name="keywords" content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android, music app for iphone, music player app, free music download, music discovery app, offline listening, curated playlists, high-fidelity audio, free music streaming with no ads, workout music app, music for studying app, audio streaming, mobile music app, radio, radio streaming" />
</svelte:head>

<div class="bg-black w-full mt-32">
  <NavIcon />
  <center class="my-10">
    <h2 class="poppins-regular text-center text-white">Zene Web is in Beta. But you can enjoy.</h2>
  </center>

  <CardInfoTypeView title={"Recommended Playlists"} textType={TextType.LARGE} url={top_playlists} email={data.email} />
  <div class="mt-28" />
  <CardInfoTypeView title={"Albums picked for you"} textType={TextType.SMALL} url={top_albums} email={data.email} />
  <div class="mt-28" />
  <AdsView />
  <div class="mt-28" />
  <CardInfoTypeView title={"Videos you may like"} textType={TextType.SMALL} url={top_videos} email={data.email} />
  <div class="mt-28" />
  <CardInfoTypeView title={"Songs you may like"} textType={TextType.SMALL} url={top_songs} email={data.email} />
  <div class="mt-28" />
  <AdsView />
  <div class="mt-28" />
  <CardInfoTypeView title={"Global top artists"} textType={TextType.SMALL} url={top_global_artists} email={data.email} isGet={true} />
  <div class="mt-28" />
  <AdsView />
  <div class="mt-28" />
  <CardInfoTypeView title={"Songs for you"} textType={TextType.SMALL} url={suggested_songs} email={data.email} dynamicList={true} />

  <Footer />
</div>
