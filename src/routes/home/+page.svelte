<script lang="ts">
  import HomeTopView from "$lib/components/HomeTopView.svelte";
  import Footer from "$lib/components/item/Footer.svelte";
  import CardItemView from "./CardItemView.svelte";
  import FansReviewView from "./FansReviewView.svelte";
  import FollowUsOn from "./FollowUsOn.svelte";

  export let data: any;
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

<div class="bg-black w-full">
  <HomeTopView {data} />

  <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
    <div class="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-4 lg:divide-y-0 xl:grid-cols-4">
      <CardItemView title={"Unlimited Ad-Free Music Streaming"} desc={"Enjoy unlimited music with no ads. Personalized playlists, offline listening, and more."} emoji={"🎉"} img={"https://cdn-icons-png.flaticon.com/512/17728/17728523.png"} />
      <CardItemView title={"Music Anywhere Anytime"} desc={"Stream music seamlessly across all your devices. Enjoy ad-free, personalized playlists."} emoji={"💻"} img={"https://cdn-icons-png.flaticon.com/512/3659/3659784.png"} />
      <CardItemView title={"Stream High-Quality Music"} desc={"Experience premium sound quality. Enjoy ad-free, high-definition music on any device."} emoji={"🎺"} img={"https://cdn-icons-png.flaticon.com/512/11125/11125966.png"} />
      <CardItemView title={"Handpicked Personal Soundtrack"} desc={"Get personalized song suggestions tailored to your taste."} emoji={"💭"} img={"https://cdn-icons-png.flaticon.com/512/1027/1027567.png"} />
    </div>
  </div>

  <FansReviewView />
  

  <FollowUsOn />

  <Footer />
</div>
