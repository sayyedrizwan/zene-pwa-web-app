<script lang="ts">
  import Footer from '$lib/components/global-view/Footer.svelte'
    import { FaqListsRepository } from '../../domain/local/repositories/FaqLists'

  const faqListsRepository = new FaqListsRepository()
  const faqQuestions = faqListsRepository.getAllFaqs()
</script>


<svelte:head>
  <title>FAQ | Zene : A Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="FAQ | Zene : A Music App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/home" />
  <meta name="keywords" content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android, music app for iphone, music player app, free music download, music discovery app, offline listening, curated playlists, high-fidelity audio, free music streaming with no ads, workout music app, music for studying app, audio streaming, mobile music app, radio, radio streaming" />

</svelte:head>


<div class="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24 text-white">
  <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">FAQs / App or Web App Help</h1>
</div>

<div class="mx-auto max-w-7xl prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600 text-white font-normal">
  <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
      <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Frequently Asked Questions</h2>

      <div class="flow-root mt-12 sm:mt-16">
        <div class="divide-y divide-gray--200 -my-9">
          {#each faqQuestions as { question, answer }}
            <div class="py-9">
              <p class="text-xl font-semibold text-black">{question}</p>
              <p class="mt-3 text-base text-gray-600">{answer}</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
</div>

<Footer />
