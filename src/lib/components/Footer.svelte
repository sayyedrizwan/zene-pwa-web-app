<script>

    import { about, are_you_ready, faq, open_zene__web_player, policy, to_dive_into_some_fresh_tunes } from "$lib/assets/string/en";
    import { instagram_account } from "$lib/utils/UtilsPaths";

</script>
<footer class="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-maincolor text-white">
    <div class="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
        <h2 class="font-bold text-3xl xl:text-4xl leading-snug">
            {are_you_ready}?<br>{to_dive_into_some_fresh_tunes}
        </h2>
        <a class="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-blue-800 rounded-full shadow-xl border border-transparent hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500 transition-all ease-in-out delay-75 duration-300 hover:bg-gray-950" href="/">{open_zene__web_player}</a>
        <div class="mt-14 xl:mt-20">
            <nav class="flex flex-wrap justify-center text-lg font-medium">
                <div class="px-5 py-2"><a href="/privacy-policy">{policy}</a></div>
                <div class="px-5 py-2"><a href="/home">{about}</a></div>
                <div class="px-5 py-2"><a href="/faq">{faq}</a></div>
            </nav>
            <nav class="flex flex-wrap justify-center mt-5">
                <a href={instagram_account} target="_blank"><i class="fa fa-instagram text-white hover:text-peach transition-all ease-in-out delay-75 duration-300" style="font-size: 24px;"></i></a>
            </nav>
            <p class="mt-7 text-base">© 2022-2023 Zene from rizwan sayyed</p>
        </div>
    </div>
</footer>