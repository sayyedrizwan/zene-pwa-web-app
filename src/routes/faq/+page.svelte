<script lang="ts">
  import Footer from '$lib/components/Footer.svelte';
  import LogoWithBrand from '$lib/components/LogoWithBrand.svelte';
  import { FaqListsRepository } from '../../domain/repositories/FaqLists';

  const faqListsRepository = new FaqListsRepository();
  const faqQuestions = faqListsRepository.getAllFaqs();
</script>

<LogoWithBrand />

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
              <p class="text-xl font-semibold text-black">Can I sign up for free? What are the different subscription plans available?</p>
              <p class="mt-3 text-base text-gray-600">Tests 1</p>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </section>
</div>

<Footer />
