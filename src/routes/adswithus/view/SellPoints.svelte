<script lang="ts">
  const pointsLists = [
    '🛒 Online Sales',
    '📈 Brand Recognition',
    '📲 App Downloads',
    '🙋🏻‍♂️ Customer Engagement',
    '🚀 Audience Reach',
    '🤳 Social Media Engagement',
    '🚦 Website Traffic',
    '🚦 Website Traffic',
    '🎯 Lead Generation',
    '📊 Business Growth',
    '👨🏻‍💻 Online Presence',
    '📦 Product Visibility',
    '📋 Customer Feedback & Insights',
    '📤 Content Sharing',
    '🌈💰🍀 and many many more',
  ]
</script>

<h1 class="text-3xl urbanist-semibold tracking-tight text-slate-900 mt-56">What are you interested in? Get More 👇</h1>

<div class="flex flex-wrap mt-6">
  {#each pointsLists as item}
    <div class="text-white bg-maincolor rounded-xl px-12 py-3 hover:px-5 hover-animation m-3 urbanist-semibold text-lg"><span class="text-xl">{item.textBeforeKeyword(' ')}</span> &nbsp; {item.textAfterKeyword(' ')}</div>
  {/each}
</div>
