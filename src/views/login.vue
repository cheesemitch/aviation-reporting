<script>
</script>

  <template>
    <div class="min-h-screen flex items-center justify-center bg-gray-800">
      <div class="max-w-md w-full py-12 px-6">
        <a href="index.html" class="flex flex-col justify-center items-center">
        <!-- agnoscis logo -->
        <img class="w-auto h-10" src="../assets/agnoscis.svg" alt="agnoscis logo">
        <img class="w-auto h-8 mt-2" src="../assets/agnoscis-letters.svg" alt="agnoscis">
      </a>
        <p class="mt-4 text-sm text-center text-gray-400">Log in to your account</p>
        <form class="mt-5" action="" method="POST">
          <input type="hidden" name="_token" value="cBpvvwIAhWA7KT9LASUXmHFQyHQNsJS5s29zORSr">
          <input type="hidden" name="remember" value="true">
          <div class="rounded-md shadow-sm">
            <div>
              <input aria-label="Email address" name="email" type="email" required="" class="bg-gray-100 border-gray-300 placeholder-gray-500 appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm" placeholder="Email address" value="">
            </div>
            <div class="-mt-px relative">
              <input aria-label="Password" name="password" type="password" required="" class="bg-gray-100 border-gray-300 placeholder-gray-500 appearance-none rounded-none relative block w-full px-3 py-2 border text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm" placeholder="Password">
              <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm">
                <a href="" class="text-gray-900 underline">Forgot?</a>
              </div>
            </div>
          </div>

          <div class="mt-5">
            <!-- bg-gradient-to-r from-agnoscis-100 to-agnoscis-300 hover:to-agnoscis-400 -->
            <button type="submit" class="relative block w-full py-2.5 px-3 rounded-md shadow text-gray-800 font-semibold
            bg-gradient-to-r from-agnoscis-100 to-agnoscis-300 hover:to-agnoscis-400 focus:bg-gray-900 focus:outline-none focus:shadow-outline sm:text-sm">
              <span class="absolute left-0 inset-y pl-3">
                <svg class="h-5 w-5 text-gray-800 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
                </svg>
              </span>
              Log in
            </button>
          </div>
        </form>
        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-500"></div>
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-gray-800 text-gray-400">Don't have an account?</span>
            </div>
          </div>

          <div class="mt-6">
            <router-link to="/app/dashboard" class="bg-gray-700 bg-opacity-50 block w-full text-center py-2.5 px-3 rounded-md text-gray-400 font-medium hover:bg-opacity-100 hover:text-gray-300 focus:outline-none focus:border-gray-400 sm:text-sm">
              Access click demo
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
