<script>

    import { open_zene__web_player } from "$lib/assets/string/en";
    import { instagram_account } from "$lib/utils/UtilsPaths";

</script>
<footer class="mt-20 xl:mt-32 mx-auto w-full relative text-center bg-maincolor text-white">
    <div class="px-6 py-8 md:py-14 xl:pt-20 xl:pb-12">
        <h2 class="font-bold text-3xl xl:text-4xl leading-snug">
            Are you Ready?<br>To Dive into some fresh tunes.
        </h2>
        <a class="mt-8 xl:mt-12 px-12 py-5 text-lg font-medium leading-tight inline-block bg-blue-800 rounded-full shadow-xl border border-transparent hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-sky-999 focus:ring-sky-500 transition-all ease-in-out delay-75 duration-300 hover:bg-gray-950" href="/">{open_zene__web_player}</a>
        <div class="mt-14 xl:mt-20">
            <nav class="flex flex-wrap justify-center text-lg font-medium">
                <div class="px-5 py-2"><a href="/policy">Policy</a></div>
                <div class="px-5 py-2"><a href="/home">About</a></div>
                <div class="px-5 py-2"><a href="/home">FAQ</a></div>
                <div class="px-5 py-2"><a href={instagram_account}>Instagram</a></div>
            </nav>
            <p class="mt-7 text-base">© 2022-2023 Zene from rizwan sayyed</p>
        </div>
    </div>
</footer>