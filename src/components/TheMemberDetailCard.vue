<script>
import { MailIcon, PhoneIcon } from '@heroicons/vue/solid'
import { XIcon } from '@heroicons/vue/outline'

export default {
    props: {
        avatar: {type: String, required: true},
        name: {type: String, required: true},
        title: {type: String, required: true},
        role: {type: String, required: true},
        mail: {type: String, required: true},
        phone: {type: String, required: true},
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
        close() {
            this.$emit('clickOnClose');
        }
    },
    components: {
        MailIcon,
        PhoneIcon,
        XIcon
  }
}

</script>

<template>
     <div class="relative w-full max-w-md transform overflow-hidden rounded-2xl text-left align-middle shadow-xl transition-all">
        <div class="absolute top-0 right-0 pt-4 pr-4">
            <button type="button" @click="close"
            class="bg-white dark:bg-gray-800 rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:focus:ring-offset-gray-800
            focus:ring-gray-500">
            <span class="sr-only">Close</span>
            <XIcon class="h-6 w-6" aria-hidden="true" />
            </button>
        </div>
        <li class="col-span-1 flex flex-col text-center bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-600">
            <div class="flex-1 flex flex-col p-8">
            <img class="w-32 h-32 flex-shrink-0 mx-auto object-cover rounded-full" :src="avatar" :alt="name" />
            <h3 class="mt-6 text-gray-900 dark:text-gray-200 text-sm font-medium">{{name}}</h3>
            <dl class="mt-1 flex-grow flex flex-col justify-between">
                <dt class="sr-only">Title</dt>
                <dd class="text-gray-500 dark:text-gray-400/80 text-sm">{{title}}</dd>
                <dt class="sr-only">Role</dt>
                <dd class="mt-3">
                <span :class=" roleClass + ' px-2 py-1 text-xs font-medium rounded-full'">{{role}}</span>
                </dd>
                <dt class="sr-only">Phone</dt>  
                <dd class="mt-6 text-gray-500 dark:text-gray-400/80 text-sm flex justify-center">
                <MailIcon class="w-5 h-5 text-gray-400 dark:text-gray-400/80 mr-2.5" />
                {{mail}}</dd>
                <dt class="sr-only">Mail</dt>
                <dd class="mt-3 text-gray-500 dark:text-gray-400/80 text-sm flex justify-center">
                <PhoneIcon class="w-5 h-5 text-gray-400 dark:text-gray-400/80 mr-2.5" />
                {{phone}}</dd>
            </dl>
            </div>
            <div>
            <div class="-mt-px flex divide-x divide-gray-200 dark:divide-gray-600">
                <div class="w-0 flex-1 flex group">
                <a :href="`mailto:${mail}`" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-xl hover:text-gray-500 focus:outline-none focus:ring-2 dark:focus:ring-offset-gray-800
            focus:ring-gray-500">
                    <MailIcon class="w-5 h-5 text-gray-400 dark:text-gray-400/80 dark:group-hover:text-gray-300" aria-hidden="true" />
                    <span class="ml-3 dark:text-gray-400/80 dark:group-hover:text-gray-300">Email</span>
                </a>
                </div>
                <div class="w-0 flex-1 flex group">
                <a :href="`tel:${phone}`" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-xl hover:text-gray-500 focus:outline-none focus:ring-2 dark:focus:ring-offset-gray-800
            focus:ring-gray-500">
                    <PhoneIcon class="w-5 h-5 text-gray-400 dark:text-gray-400/80 dark:group-hover:text-gray-300" aria-hidden="true" />
                    <span class="ml-3 dark:text-gray-400/80 dark:group-hover:text-gray-300">Call</span>
                </a>
                </div>
            </div>
            </div>
        </li>
        </div>
</template>