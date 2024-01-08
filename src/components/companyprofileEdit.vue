
<script setup>
</script>


<template>
  <form class="space-y-8 divide-y divide-gray-200">
    <div class="space-y-8 divide-y divide-gray-200">
      <div>
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Unternehmen
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            Allgemeine Informationen über das Unternehmen.
          </p>
        </div>
        <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div class="sm:col-span-6">
            <label for="photo" class="block text-sm font-medium text-gray-700">
              Logo
            </label>
            <div class="mt-2 flex items-center">
              <span class="h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex justify-center items-center px-2 pb-1">                
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                  </svg>
              </span>
              <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Change
              </button>
            </div>
          </div>
          <div class="sm:col-span-4">
            <label for="company name" class="block text-sm font-medium text-gray-700">
              Name
            </label>
            <div class="mt-1">
              <input id="name" name="name" type="text" autocomplete="name" class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md">
            </div>
          </div>
          <div class="sm:col-span-6">
            <label for="credo" class="block text-sm font-medium text-gray-700">
              Credo
            </label>
            <div class="mt-1">
              <input id="credo" name="credo" type="text" autocomplete="name" class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md">
            </div>
          </div>
          <div class="sm:col-span-4">
            <label for="website" class="block text-sm font-medium text-gray-700">
              Website
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                https://
              </span>
              <input type="text" name="website" id="website" autocomplete="website" class="flex-1 focus:ring-gray-500 focus:border-gray-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
            </div>
          </div>
          <div class="sm:col-span-4">
            <label for="twitter" class="block text-sm font-medium text-gray-700">
              Twitter
            </label>
            <div class="mt-1 flex rounded-md shadow-sm">
              <span class="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
              twitter.com/
              </span>
              <input type="text" name="twitter" id="twitter" autocomplete="website" class="flex-1 focus:ring-gray-500 focus:border-gray-500 block w-full min-w-0 rounded-none rounded-r-md sm:text-sm border-gray-300">
            </div>
          </div>

          <div class="sm:col-span-6">
            <label for="about" class="block text-sm font-medium text-gray-700">
              About
            </label>
            <div class="mt-1">
              <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
            </div>
            <p class="mt-2 text-sm text-gray-500">Write a few sentences about your organization.</p>
          </div>

          <div class="hidden sm:col-span-6">
            <label for="strategic-focus" class="block text-sm font-medium text-gray-700">
              Strategic focus
            </label>
            <div class="mt-1">
              <textarea id="strategic-focus" name="strategic-focus" rows="3" class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
            </div>
            <p class="mt-2 text-sm text-gray-500">Write a few sentences about your organizations strategic focus and goals.</p>
          </div>

          <div class="hidden sm:col-span-6">
            <label for="risk-profile" class="block text-sm font-medium text-gray-700">
              Risk profile
            </label>
            <div class="mt-1">
              <textarea id="risk-profile" name="risk-profile" rows="3" class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
            </div>
            <p class="mt-2 text-sm text-gray-500">Describe the companies concerns over its ability to stay on track and its general risk exposure. What could possibly go wrong? </p>
          </div>

          <div class="hidden sm:col-span-6">
            <label for="risk-appetite" class="block text-sm font-medium text-gray-700">
              Risk appetite
            </label>
            <div class="mt-1">
              <textarea id="risk-appetite" name="risk-appetite" rows="3" class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
            </div>
            <p class="mt-2 text-sm text-gray-500">Describe the level of risk your organization is prepared to accept.</p>
          </div>

        </div>
      </div>
    </div>

    <div class="pt-5">
      <div class="flex justify-end">
        <a href="organization-strategy.html" type="button" class="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          Cancel
        </a>
        <a href="organization-strategy.html" type="submit" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800">
          Apply Changes
        </a>
      </div>
    </div>
  </form>
</template>
