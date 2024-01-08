<script>

export default {
    props: {
        avatar: {type: String, required: true},
        name: {type: String, required: true},
        title: {type: String, required: true},
        role: {type: String, required: true},
    },
    computed: {
        roleClass () {
            if (this.role == 'Team Lead') {
                return 'text-green-800 bg-green-100 dark:bg-green-200/90 dark-text-green-900'
            }
            else {
                return 'text-sky-800 bg-sky-100 dark:bg-sky-300 dark:text-sky-900'
            }
        }
    },
    methods: {
        showMemberDetails() {
            this.$emit('clickOnMemberDetails');
        }
    }
}

</script>

<template>
    <div class="rounded-lg border border-transparent bg-white dark:bg-gray-800 px-6 py-5 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500">
            <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full object-cover" :src="avatar" :alt="name">
            </div>
            <div class="flex-1 min-w-0">
                <div @click="showMemberDetails()" class="cursor-pointer focus:outline-none">
                    <p class="text-sm font-medium text-gray-900 dark:text-gray-200 truncate">
                        {{name}}
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400/80 truncate">
                        {{title}}
                    </p>
                </div>
            </div>
            <div class="text-sm text-gray-500">
                <div class="flex items-center">
                    <div class="flex flex-shrink-0">
                    <span :class="roleClass + ' flex-shrink-0 inline-block px-2 py-0.5 text-xs font-medium rounded-full'">
                        {{role}}
                    </span>
                    </div>
                </div>
            </div>
            <div class="flex-shrink-0 hidden">
            <button class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <span class="sr-only">Open options</span>
                <!-- Heroicon name: solid/dots-vertical -->
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
            </button>
        </div>
    </div>
</template>