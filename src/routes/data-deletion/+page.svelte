<script lang="ts">
  import Footer from '$lib/components/global-view/Footer.svelte'
    import { support_mail_server } from '../api/utils/utils'
</script>

<svelte:head>
  <title>Data Deletion | Zene : A Music App</title>
  <meta name="description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta name="og:description" content="Discover the top music streaming platforms to find your favorite artists, albums, and playlists." />
  <meta property="og:title" content="Data Deletion | Zene : A Music App" />
  <meta property="og:image" content="https://zenemusic.co/logo820.png" />
  <meta property="og:image:alt" content="Zene Logo" />
  <link rel="canonical" href="https://zenemusic.co/privacy-policy" />
  <meta name="keywords" content="zene, zene free music, zene a free music, free music, zene, zene songs, zene music, music streaming, music streaming app, free music streaming, music app for android, music app for iphone, music player app, free music download, music discovery app, offline listening, curated playlists, high-fidelity audio, free music streaming with no ads, workout music app, music for studying app, audio streaming, mobile music app, radio, radio streaming" />
</svelte:head>


<div class="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24 text-white">
  <h1 class="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Data Deletion</h1>
  <p class="mt-4 text-base leading-7 text-slate-600">Last updated on July 03, 2024</p>
</div>

<div class="mx-auto max-w-7xl prose-sm prose prose-slate prose-a:font-semibold prose-a:text-sky-500 hover:prose-a:text-sky-600 text-white font-normal">
  <p>
    At ZeneMusic.co, we respect your privacy and are committed to protecting your personal data. This policy outlines our procedures for deleting user data upon request.
  </p>

  <h2 class="font-extrabold mt-24 mb-5 text-2xl">Data Deletion Request</h2>
  <p>
    Users who wish to have their data deleted from zenemusic.co can do so by sending an email to kocknock@zenemusic.co. Upon receipt of the request, we will delete all associated user data within 24 hours.
  </p>

  <h2 class="font-extrabold mt-24 mb-5 text-2xl">Procedure for Data Deletion</h2>
  <p>
    1. <b>Request Submission:</b> Users must send an email to kocknock@zenemusic.co with the subject line "Data Deletion Request" and include their account details (e.g., username, email address associated with the account) in the email body.
    <br/><br/>
    2. <b>Acknowledgment:</b> Within 12 hours of receiving the request, we will send an acknowledgment email to the user confirming receipt of their request.
    <br/><br/>
    3. <b>Verification:</b> We will verify the user's identity and account details to ensure the legitimacy of the request. This may include sending a verification email to the registered email address.
    <br/><br/>
    4. <b>Data Deletion:</b>  Upon successful verification, all user data, including account information, usage data, and any stored media, will be permanently deleted from our systems within the next 12 hours.
    <br/><br/>
    5. <b>Confirmation:</b> After the data has been deleted, we will send a confirmation email to the user notifying them that their data has been successfully removed from our systems.
  </p>


  <h2 class="font-extrabold mt-24 mb-5 text-2xl">Scope of Data Deletion</h2>
  <p>
    The data deletion process will encompass all personal data stored on zenemusic.co, including but not limited to:<br/>
    &nbsp; • Account information (username, email address, password)<br/>
    &nbsp; • Usage data (activity logs, preferences, playlists)<br/>
    &nbsp; • Stored media (uploaded content, saved media)<br/>
    &nbsp; • Any other personal information associated with the user's account<br/>
  </p>


  <h2 class="font-extrabold mt-24 mb-5 text-2xl">Exceptions</h2>
  <p>
    In certain circumstances, we may be required to retain some data for legal or regulatory reasons. In such cases, the user will be informed about the specific data that cannot be deleted and the reason for its retention.
  </p>

  <h2 class="font-extrabold mt-24 mb-5 text-2xl">Any Questions?</h2>
  <p>If you have any questions about this Policy, please contact us by email at <a class="text-lightblue" href={`mailto:${support_mail_server}`}>{support_mail_server}</a>.</p>
</div>

<Footer />
