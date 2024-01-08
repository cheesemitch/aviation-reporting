<script>
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'
import {
  ArchiveIcon,
  ClockIcon,
  HomeIcon,
  MenuAlt2Icon,
  UserCircleIcon as UserCircleIconOutline,
  ViewListIcon,
  XIcon,
} from '@heroicons/vue/outline'
import {
  BellIcon,
  CalendarIcon,
  ChatAltIcon,
  CheckCircleIcon,
  LockOpenIcon,
  PencilIcon,
  SearchIcon,
  TagIcon,
  UserCircleIcon as UserCircleIconSolid,
} from '@heroicons/vue/solid'

export default {
    data() {
        return {
            activity : [
                {
                    id: 1,
                    type: 'comment',
                    person: { name: 'Eduardo Benz', href: '#' },
                    imageUrl:
                    'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
                    comment:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
                    date: '6d ago',
                },
                {
                    id: 2,
                    type: 'assignment',
                    person: { name: 'Hilary Mahy', href: '#' },
                    assigned: { name: 'Kristin Watson', href: '#' },
                    date: '2d ago',
                },
                {
                    id: 3,
                    type: 'tags',
                    person: { name: 'Hilary Mahy', href: '#' },
                    tags: [
                    { name: 'Bug', href: '#', color: 'bg-rose-500' },
                    { name: 'Accessibility', href: '#', color: 'bg-indigo-500' },
                    ],
                    date: '6h ago',
                },
                {
                    id: 4,
                    type: 'comment',
                    person: { name: 'Jason Meyers', href: '#' },
                    imageUrl:
                    'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
                    comment:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
                    date: '2h ago',
                },
            ]
        }
    },
    props: {
        color: {type: String}
    },
    components: {
        Dialog, DialogPanel, TransitionChild, TransitionRoot, ArchiveIcon,
  ClockIcon,
  HomeIcon,
  MenuAlt2Icon,
  UserCircleIconOutline,
  ViewListIcon,
  XIcon,
  BellIcon,
  CalendarIcon,
  ChatAltIcon,
  CheckCircleIcon,
  LockOpenIcon,
  PencilIcon,
  SearchIcon,
  TagIcon,
  UserCircleIconSolid,
    }
}

</script>
<template >
    <div class="mt-6 bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-xl">
        <div class="divide-y divide-gray-200 dark:divide-gray-700">
       
        <div>
            <!-- Activity feed-->
            <div class="flow-root">
            <ul role="list" class="-mb-8">
                <li v-for="(item, itemIdx) in activity" :key="item.id">
                <div class="relative pb-8">
                    <span v-if="itemIdx !== activity.length - 1" class="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200 dark:bg-gray-700" aria-hidden="true" />
                    <div class="relative flex items-start space-x-3">
                    <template v-if="item.type === 'comment'">
                        <div class="relative">
                        <img class="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white dark:ring-gray-800" :src="item.imageUrl" alt="" />

                        <span class="absolute -bottom-0.5 -right-1 bg-white dark:bg-gray-800 rounded-tl px-0.5 py-px">
                            <ChatAltIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                        </span>
                        </div>
                        <div class="min-w-0 flex-1">
                        <div>
                            <div class="text-sm">
                            <a :href="item.person.href" class="font-medium text-gray-900 dark:text-gray-200">{{ item.person.name }}</a>
                            </div>
                            <p class="mt-0.5 text-sm text-gray-500 dark:text-gray-400/80">Commented {{ item.date }}</p>
                        </div>
                        <div class="mt-2 text-sm text-gray-700 dark:text-gray-500">
                            <p>
                            {{ item.comment }}
                            </p>
                        </div>
                        </div>
                    </template>
                    <template v-else-if="item.type === 'assignment'" condition="item.type === 'assignment'">
                        <div>
                        <div class="relative px-1">
                            <div class="h-8 w-8 bg-gray-100 dark:bg-gray-700 rounded-full ring-8 ring-white dark:ring-gray-800 flex items-center justify-center">
                            <UserCircleIconSolid class="h-5 w-5 text-gray-500 dark:text-gray-400/80" aria-hidden="true" />
                            </div>
                        </div>
                        </div>
                        <div class="min-w-0 flex-1 py-1.5">
                        <div class="text-sm text-gray-500">
                            <a :href="item.person.href" class="font-medium text-gray-900 dark:text-gray-200">{{ item.person.name }}</a>
                            {{ ' ' }}
                            assigned
                            {{ ' ' }}
                            <a :href="item.assigned.href" class="font-medium text-gray-900 dark:text-gray-200">{{ item.assigned.name }}</a>
                            {{ ' ' }}
                            <span class="whitespace-nowrap">{{ item.date }}</span>
                        </div>
                        </div>
                    </template>
                    <template v-else>
                        <div>
                        <div class="relative px-1">
                            <div class="h-8 w-8 bg-gray-100 dark:bg-gray-700 rounded-full ring-8 ring-white dark:ring-gray-800 flex items-center justify-center">
                            <TagIcon class="h-5 w-5 text-gray-500 dark:text-gray-400/80" aria-hidden="true" />
                            </div>
                        </div>
                        </div>
                        <div class="min-w-0 flex-1 py-0">
                        <div class="text-sm leading-8 text-gray-500">
                            <span class="mr-0.5">
                            <a :href="item.person.href" class="font-medium text-gray-900 dark:text-gray-200">{{ item.person.name }}</a>
                            {{ ' ' }}
                            added tags
                            </span>
                            {{ ' ' }}
                            <span class="mr-0.5">
                            <template v-for="tag in item.tags" :key="tag.name">
                                <a :href="tag.href" class="relative inline-flex items-center rounded-full border border-gray-300 dark:border-gray-600 px-3 py-0.5 text-sm">
                                <span class="absolute flex-shrink-0 flex items-center justify-center">
                                    <span :class="[tag.color, 'h-1.5 w-1.5 rounded-full']" aria-hidden="true" />
                                </span>
                                <span class="ml-3.5 font-medium text-gray-900 dark:text-gray-200">{{ tag.name }}</span>
                                </a>
                                {{ ' ' }}
                            </template>
                            </span>
                            <span class="whitespace-nowrap">{{ item.date }}</span>
                        </div>
                        </div>
                    </template>
                    </div>
                </div>
                </li>
            </ul>
            </div>
            <div class="mt-6">
            <div class="flex space-x-3">
                <div class="flex-shrink-0">
                <div class="relative">
                    <img class="h-10 w-10 rounded-full bg-gray-400 flex items-center justify-center ring-8 ring-white dark:ring-gray-800" src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80" alt="" />

                    <span class="absolute -bottom-0.5 -right-1 bg-white dark:bg-gray-800 rounded-tl px-0.5 py-px">
                    <ChatAltIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </span>
                </div>
                </div>
                <div class="min-w-0 flex-1">
                <form action="#">
                    <div>
                    <label for="comment" class="sr-only">Comment</label>
                    <textarea id="comment" name="comment" rows="3" class="dark:bg-gray-900 dark:text-gray-200 shadow-sm block w-full focus:ring-gray-900 focus:border-gray-900 sm:text-sm border border-gray-300 dark:border-gray-700 rounded-md" placeholder="Leave a comment" />
                    </div>
                    <div class="mt-6 flex items-center justify-end space-x-4">
                    <button type="button" class="hidden justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                        <CheckCircleIcon class="-ml-1 mr-2 h-5 w-5 text-green-500" aria-hidden="true" />
                        <span>Close issue</span>
                    </button>
                    <button type="submit" :class="['inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-'+color+' focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-'+color]">Comment</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</template>