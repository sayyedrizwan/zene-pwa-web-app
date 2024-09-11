<script lang="ts">
  import { goto } from "$app/navigation";
  import CardInfoTypeView from "$lib/components/CardInfoTypeView.svelte";
  import Footer from "$lib/components/item/Footer.svelte";
  import { TextType } from "$lib/utils/model/TextType";
  import { top_playlists } from "$lib/utils/Utils";
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
  <CardInfoTypeView title={"Recommended Playlists"} textType={TextType.LARGE} url={top_playlists} isGrid={false} email={data.email} />

  <Footer />
</div>
