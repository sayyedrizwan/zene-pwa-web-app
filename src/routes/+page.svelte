<script lang="ts">
	import { pwaInfo } from "virtual:pwa-info";
	import "../tailwind.css";
	$: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";
</script>

<svelte:head>
	{@html webManifest}
</svelte:head>

<div class="text-white bg-black">
	<header class="text-white body-font">
		<div class="container mx-auto flex flex-wrap p-5 md:flex-row">
			<a
				class="flex title-font font-medium text-white mb-4 md:mb-0 pr-4"
				href="/"><span class="ml-3 text-3xl">NINE4</span></a
			><button
				class="text-white cursor-pointer text-xl leading-none py-1 border border-solid border-transparent rounded bg-transparent block md:hidden outline-none focus:outline-none ml-auto pb-3"
				type="button"
				><svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="white"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="feather feather-menu"
					><line x1="3" y1="12" x2="21" y2="12"></line><line
						x1="3"
						y1="6"
						x2="21"
						y2="6"
					></line><line x1="3" y1="18" x2="21" y2="18"></line></svg
				></button
			>
			<div
				class="md:flex flex-grow items-center hidden"
				id="example-navbar-danger"
			>
				<nav
					class="md:ml-auto flex flex-wrap items-center text-base justify-center font-semibold pl-7"
				>
					<a class="mr-6 hover:text-white" href="/">Home</a><a
						class="mr-6 hover:text-white"
						href="/contact">Contact</a
					><a class="mr-6 hover:text-white" href="/404">404</a>
				</nav>
				<button
					class="px-4 py-2 mt-2 text-sm font-semibold text-white bg-blue-600 transition duration-500 ease-in-out transform bg-transparent rounded-lg dark:text-gray-300 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
					>Download</button
				>
			</div>
		</div>
	</header>
	<section class="text-black body-font lg:pt-20">
		<div class="container px-5 pt-32 mx-auto lg:px-4 lg:py-4">
			<div class="flex flex-col w-full mb-2 text-left md:text-center">
				<h1
					class="mb-2 text-6xl font-bold tracking-tighter text-white lg:text-8xl md:text-7xl"
				>
					<span>We are making </span><br
						class="hidden lg:block"
					/>Stunning websites
				</h1>
				<br />
				<p
					class="mx-auto text-xl font-normal leading-relaxed text-gray-600 dark:text-gray-300 lg:w-2/3"
				>
					nine4 is a free to use template website for websites made
					with<!-- -->
					<a href="https://nextjs.org/" class="underline">Next.js</a>
					<!-- -->and styled with Tailwind CSS
				</p>
			</div>
		</div>
		<div
			class="container flex flex-col items-center justify-center py-8 mx-auto rounded-lg md:p-1 p-3"
		>
			<img
				class="object-cover object-center w-full mb-10 border-gray-200 dark:border-gray-900 g327 border rounded-lg shadow-md"
				alt="hero"
				src="./images/placeholder.png"
			/>
		</div>
		<section class="text-gray-600 body-font">
			<section class="text-gray-600 body-font">
				<div class="container px-5 py-10 mx-auto">
					<div class="flex flex-wrap -m-4 text-center">
						<div class="p-4 sm:w-1/3 w-1/2">
							<h2
								class="title-font font-medium sm:text-5xl text-3xl text-white"
							>
								<span>940</span>
							</h2>
							<p class="leading-relaxed">Users</p>
						</div>
						<div class="p-4 sm:w-1/3 w-1/2">
							<h2
								class="title-font font-medium sm:text-5xl text-3xl text-white"
							>
								<span>740</span>
							</h2>
							<p class="leading-relaxed">Subscribes</p>
						</div>
						<div class="p-4 sm:w-1/3 w-1/2">
							<h2
								class="title-font font-medium sm:text-4xl text-3xl text-white"
							>
								<span>315</span>
							</h2>
							<p class="leading-relaxed">Downloads</p>
						</div>
					</div>
				</div>
			</section>
			<div class="container px-5 py-24 mx-auto flex flex-wrap">
				<div
					class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden"
				>
					<img
						alt="feature"
						class="object-cover object-center h-full w-full"
						src="./images/placeholder.png"
					/>
				</div>
				<div
					class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center"
				>
					<div
						class="flex flex-col mb-10 lg:items-start items-center"
					>
						<div class="flex-grow">
							<h2
								class="text-white text-2xl title-font font-medium mb-3"
							>
								Free
							</h2>
							<p class="leading-relaxed text-lg">
								All of our templates are 100% free forever.
							</p>
						</div>
					</div>
					<div
						class="flex flex-col mb-10 lg:items-start items-center"
					>
						<div class="flex-grow">
							<h2
								class="text-white text-2xl title-font font-medium mb-3"
							>
								Responsive
							</h2>
							<p class="leading-relaxed text-lg">
								All our templates come with full responsiveness
								straight out of the box.
							</p>
						</div>
					</div>
					<div
						class="flex flex-col mb-10 lg:items-start items-center"
					>
						<div class="flex-grow">
							<h2
								class="text-white text-2xl title-font font-medium mb-3"
							>
								SEO Friendly
							</h2>
							<p class="leading-relaxed text-lg">
								Our templates have the best SEO practices
								ensuring you get to the top.
							</p>
						</div>
					</div>
					<div
						class="flex flex-col mb-10 lg:items-start items-center"
					>
						<div class="flex-grow">
							<h2
								class="text-white text-2xl title-font font-medium mb-3"
							>
								Fast
							</h2>
							<p class="leading-relaxed text-lg">
								The fastest websites you can get.
							</p>
						</div>
					</div>
					<div
						class="flex flex-col mb-10 lg:items-start items-center"
					>
						<div class="flex-grow">
							<h2
								class="text-white text-2xl title-font font-medium mb-3"
							>
								Google Analytics Supported
							</h2>
							<p class="leading-relaxed text-lg">
								All our templates come with full support for
								Google Analytics.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="text-gray-600 body-font">
			<div class="container px-5 mx-auto">
				<div class="text-center mb-20">
					<h2
						class="sm:text-5xl font-medium title-font text-white mb-4"
					>
						Our Team
					</h2>
					<p
						class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s"
					>
						Here is our company
					</p>
					<div class="flex mt-6 justify-center">
						<div
							class="w-16 h-1 rounded-full bg-white inline-flex"
						></div>
					</div>
					<div class="container px-5 py-16 mx-auto">
						<div class="flex flex-wrap -m-4">
							<div class="p-4 lg:w-1/4 md:w-1/2">
								<div
									class="h-full flex flex-col items-center text-center"
								>
									<img
										alt="team"
										class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
										src="./images/placeholder.png"
									/>
									<div class="w-full">
										<h2
											class="title-font font-medium text-lg text-white"
										>
											Chris
										</h2>
										<h3 class="text-gray-500 mb-3">
											Web Developer
										</h3>
										<p class="mb-4">
											Chris is part of our front-end team
											providing amazing websites.
										</p>
										<span class="inline-flex"
											><a class="text-gray-500"
											><svg
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													class="w-5 h-5"
													viewBox="0 0 24 24"
													><path
														d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
													></path></svg
												></a
											><a class="ml-2 text-white"
												><svg
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													class="w-5 h-5"
													viewBox="0 0 24 24"
													><path
														d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
													></path></svg
												></a
											><a class="ml-2 text-gray-500"
												><svg
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													class="w-5 h-5"
													viewBox="0 0 24 24"
													><path
														d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
													></path></svg
												></a
											></span
										>
									</div>
								</div>
							</div>
							<div class="p-4 lg:w-1/4 md:w-1/2">
								<div
									class="h-full flex flex-col items-center text-center"
								>
									<img
										alt="team"
										class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
										src="./images/placeholder.png"
									/>
									<div class="w-full">
										<h2
											class="title-font font-medium text-lg text-white"
										>
											Chris
										</h2>
										<h3 class="text-gray-500 mb-3">
											Web Developer
										</h3>
										<p class="mb-4">
											Chris is part of our front-end team
											providing amazing websites.
										</p>
										<span class="inline-flex"
											><a class="text-gray-500"
												><svg
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													class="w-5 h-5"
													viewBox="0 0 24 24"
													><path
														d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
													></path></svg
												></a
											><a class="ml-2 text-gray-500"
												><svg
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													class="w-5 h-5"
													viewBox="0 0 24 24"
													><path
														d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
													></path></svg
												></a
											><a class="ml-2 text-gray-500"
												><svg
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													class="w-5 h-5"
													viewBox="0 0 24 24"
													><path
														d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
													></path></svg
												></a
											></span
										>
									</div>
								</div>
							</div>
							<div class="p-4 lg:w-1/4 md:w-1/2">
								<div
									class="h-full flex flex-col items-center text-center"
								>
									<img
										alt="team"
										class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
										src="./images/placeholder.png"
									/>
									<div class="w-full">
										<h2
											class="title-font font-medium text-lg text-white"
										>
											Chris
										</h2>
										<h3 class="text-gray-500 mb-3">
											Web Developer
										</h3>
										<p class="mb-4">
											Chris is part of our front-end team
											providing amazing websites.
										</p>
										<span class="inline-flex"
											><a class="text-gray-500"
												><svg
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													class="w-5 h-5"
													viewBox="0 0 24 24"
													><path
														d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
													></path></svg
												></a
											><a class="ml-2 text-gray-500"
												><svg
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													class="w-5 h-5"
													viewBox="0 0 24 24"
													><path
														d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
													></path></svg
												></a
											><a class="ml-2 text-gray-500"
												><svg
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													class="w-5 h-5"
													viewBox="0 0 24 24"
													><path
														d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
													></path></svg
												></a
											></span
										>
									</div>
								</div>
							</div>
							<div class="p-4 lg:w-1/4 md:w-1/2">
								<div
									class="h-full flex flex-col items-center text-center"
								>
									<img
										alt="team"
										class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
										src="./images/placeholder.png"
									/>
									<div class="w-full">
										<h2
											class="title-font font-medium text-lg text-white"
										>
											Chris
										</h2>
										<h3 class="text-gray-500 mb-3">
											Web Developer
										</h3>
										<p class="mb-4">
											Chris is part of our front-end team
											providing amazing websites.
										</p>
										<span class="inline-flex"><a class="text-gray-500"
												><svg
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													class="w-5 h-5"
													viewBox="0 0 24 24"
													><path
														d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
													></path></svg
												></a
											><a class="ml-2 text-gray-500"
												><svg
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													class="w-5 h-5"
													viewBox="0 0 24 24"
													><path
														d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
													></path></svg
												></a
											><a class="ml-2 text-gray-500"
												><svg
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													class="w-5 h-5"
													viewBox="0 0 24 24"
													><path
														d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
													></path></svg
												></a
											></span
										>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</section>
	<footer class="text-white body-font">
		<div
			class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"
		>
			<a
				class="flex title-font font-medium items-center md:justify-start justify-center"
				href="/"><span class="ml-3 text-xl">NINE4</span></a
			><span
				class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start"
				><a href="https://facebook.com/"
					><svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
						><path
							d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
						></path></svg
					></a
				><a class="ml-3" href="https://twitter.com/"
					><svg
						fill="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
						><path
							d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
						></path></svg
					></a
				><a class="ml-3" href="https://instagram.com/"
					><svg
						fill="none"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						class="w-5 h-5"
						viewBox="0 0 24 24"
						><rect width="20" height="20" x="2" y="2" rx="5" ry="5"
						></rect><path
							d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
						></path></svg
					></a
				><a class="ml-3" href="https://www.linkedin.com/in/jacklatimer/"
					><svg
						fill="currentColor"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="0"
						class="w-5 h-5"
						viewBox="0 0 24 24"
						><path
							stroke="none"
							d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
						></path><circle cx="4" cy="4" r="2" stroke="none"
						></circle></svg
					></a
				></span
			>
		</div>
	</footer>
</div>
