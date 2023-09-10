function Footer(){
    return(
        
<footer class="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" class="flex items-center mb-4 sm:mb-0">
                <img src="data:image/png;base64,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" class="h-8 mr-3" alt="Flowbite Logo" />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blogger</span>
            </a>
            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" class="hover:underline">Blogger™</a>. All Rights Reserved. Develped by Muhammad Aeiyan</span>
    </div>
</footer>


    )
}
export default Footer