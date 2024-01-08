<script>
  import {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption
  } from '@headlessui/vue'

  export default {
    data () {
      return {
        
      }
    },
    props: {
      id: {type: String},
      color: {type: String}
    },
    methods : {
      setColor(a) {
        this.$emit(a+'ColorClick');
      }
    },
    components: {
      TransitionRoot,
      TransitionChild,
      Menu,
      MenuButton,
      MenuItem,
      MenuItems,
      RadioGroup,
      RadioGroupLabel,
      RadioGroupOption
    }
  }

</script>

<template>
  <Menu as="div" class="">
    <div class="flex-shrink-0">
      <MenuButton class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
        <span class="sr-only">Open user menu</span>
        <!-- Heroicon name: solid/dots-vertical -->
        <svg class="h-5 w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor">            
          <path d="M19.54 5.08A10.61 10.61 0 0 0 11.91 2a10 10 0 0 0-.05 20 2.58 2.58 0 0 0 2.53-1.89 2.52 2.52 0 0 0-.57-2.28.5.5 0 0 1 .37-.83h1.65A6.15 6.15 0 0 0 22 11.33a8.48 8.48 0 0 0-2.46-6.25zm-12.7 9.66a1.5 1.5 0 1 1 .4-2.08 1.49 1.49 0 0 1-.4 2.08zM8.3 9.25a1.5 1.5 0 1 1-.55-2 1.5 1.5 0 0 1 .55 2zM11 7a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 11 7zm5.75.8a1.5 1.5 0 1 1 .55-2 1.5 1.5 0 0 1-.55 2z"/>
        </svg>                     
      </MenuButton>
    </div>
    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems class="origin-bottom-right absolute right-20 bottom-5 mb-10 rounded-md shadow-lg p-4 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
        <RadioGroup v-model="color">
          <RadioGroupLabel class="sr-only"> Choose a color </RadioGroupLabel>
          <div class="w-80 grid grid-cols-8 gap-2">
            
            <div class="flex items-center justify-center">
              <RadioGroupOption value="slate" v-slot="{ active, checked }" @click="setColor('slate')" >
                <div :class="['ring-slate-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-slate-500 border-slate-500">
                    Slate
                  </RadioGroupLabel>
                  <div class="hidden bg-slate-100 text-slate-900"></div>
                  <div class="hidden hover:bg-slate-200"></div>
                  <div class="hidden bg-slate-400"></div>
                  <div class="hidden bg-slate-50 text-slate-700"></div>
                  <span aria-hidden="true" :class="['bg-slate-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>

            <div class="flex items-center justify-center">
              <RadioGroupOption value="gray" v-slot="{ active, checked }" @click="setColor('gray')">
                <div :class="['ring-gray-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-gray-500 border-gray-500">
                    Gray
                  </RadioGroupLabel>
                  <div class="hidden bg-gray-100 text-gray-900"></div>
                  <div class="hidden hover:bg-gray-200"></div>
                  <div class="hidden bg-gray-400"></div>
                  <div class="hidden bg-gray-50 text-gray-700"></div>
                  <span aria-hidden="true" :class="['bg-gray-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>

            <div class="flex items-center justify-center">
              <RadioGroupOption value="zinc" v-slot="{ active, checked }" @click="setColor('zinc')">
                <div :class="['ring-zinc-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-zinc-500 border-zinc-500">
                    Zinc
                  </RadioGroupLabel>
                  <div class="hidden bg-zinc-100 text-zinc-900"></div>
                  <div class="hidden hover:bg-zinc-200"></div>
                  <div class="hidden bg-zinc-400"></div>
                  <div class="hidden bg-zinc-50 text-zinc-700"></div>
                  <span aria-hidden="true" :class="['bg-zinc-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>

            <div class="flex items-center justify-center">
              <RadioGroupOption value="stone" v-slot="{ active, checked }" @click="setColor('stone')">
                <div :class="['ring-stone-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-stone-500 border-stone-500">
                    Stone
                  </RadioGroupLabel>
                  <div class="hidden bg-stone-100 text-stone-900"></div>
                  <div class="hidden hover:bg-stone-200"></div>
                  <div class="hidden bg-stone-400"></div>
                  <div class="hidden bg-stone-50 text-stone-700"></div>
                  <span aria-hidden="true" :class="['bg-stone-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>

            <div class="flex items-center justify-center">
              <RadioGroupOption value="red" v-slot="{ active, checked }" @click="setColor('red')">
                <div :class="['ring-red-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-red-500 border-red-500">
                    Red
                  </RadioGroupLabel>
                  <div class="hidden bg-red-100 text-red-900"></div>
                  <div class="hidden hover:bg-red-200"></div>
                  <div class="hidden bg-red-400"></div>
                  <div class="hidden bg-red-50 text-red-700"></div>
                  <span aria-hidden="true" :class="['bg-red-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>
            
            <div class="flex items-center justify-center">
              <RadioGroupOption value="orange" v-slot="{ active, checked }" @click="setColor('orange')">
                <div :class="['ring-orange-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-orange-500 border-orange-500">
                    orange
                  </RadioGroupLabel>
                  <div class="hidden bg-orange-100 text-orange-900"></div>
                  <div class="hidden hover:bg-orange-200"></div>
                  <div class="hidden bg-orange-400"></div>
                  <div class="hidden bg-orange-50 text-orange-700"></div>
                  <span aria-hidden="true" :class="['bg-orange-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>

            <div class="flex items-center justify-center">
              <RadioGroupOption value="amber" v-slot="{ active, checked }" @click="setColor('amber')">
                <div :class="['ring-amber-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-amber-500 border-amber-500">
                    amber
                  </RadioGroupLabel>
                  <div class="hidden bg-amber-100 text-amber-900"></div>
                  <div class="hidden hover:bg-amber-200"></div>
                  <div class="hidden bg-amber-400"></div>
                  <div class="hidden bg-amber-50 text-amber-700"></div>
                  <span aria-hidden="true" :class="['bg-amber-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>
            
            <div class="flex items-center justify-center">
              <RadioGroupOption value="yellow" v-slot="{ active, checked }" @click="setColor('yellow')">
                <div :class="['ring-yellow-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-yellow-500 border-yellow-500">
                    yellow
                  </RadioGroupLabel>
                  <div class="hidden bg-yellow-100 text-yellow-900"></div>
                  <div class="hidden hover:bg-yellow-200"></div>
                  <div class="hidden bg-yellow-400"></div>
                  <div class="hidden bg-yellow-50 text-yellow-700"></div>
                  <span aria-hidden="true" :class="['bg-yellow-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>

            <div class="flex items-center justify-center">
              <RadioGroupOption value="lime" v-slot="{ active, checked }" @click="setColor('lime')">
                <div :class="['ring-lime-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-lime-500 border-lime-500">
                    lime
                  </RadioGroupLabel>
                  <div class="hidden bg-lime-100 text-lime-900"></div>
                  <div class="hidden hover:bg-lime-200"></div>
                  <div class="hidden bg-lime-50 text-lime-700"></div>
                  <span aria-hidden="true" :class="['bg-lime-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>

            <div class="flex items-center justify-center">
              <RadioGroupOption value="green" v-slot="{ active, checked }" @click="setColor('green')">
                <div :class="['ring-green-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-green-500 border-green-500">
                    green
                  </RadioGroupLabel>
                  <div class="hidden bg-green-100 text-green-900"></div>
                  <div class="hidden hover:bg-green-200"></div>
                  <div class="hidden bg-green-50 text-green-700"></div>
                  <span aria-hidden="true" :class="['bg-green-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>

            <div class="flex items-center justify-center">
              <RadioGroupOption value="emerald" v-slot="{ active, checked }" @click="setColor('emerald')">
                <div :class="['ring-emerald-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-emerald-500 border-emerald-500">
                    emerald
                  </RadioGroupLabel>
                  <div class="hidden bg-emerald-100 text-emerald-900"></div>
                  <div class="hidden hover:bg-emerald-200"></div>
                  <div class="hidden bg-emerald-50 text-emerald-700"></div>
                  <span aria-hidden="true" :class="['bg-emerald-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>

            <div class="flex items-center justify-center">
              <RadioGroupOption value="teal" v-slot="{ active, checked }" @click="setColor('teal')">
                <div :class="['ring-teal-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-teal-500 border-teal-500">
                    teal
                  </RadioGroupLabel>
                  <div class="hidden bg-teal-100 text-teal-900"></div>
                  <div class="hidden hover:bg-teal-200"></div>
                  <div class="hidden bg-teal-400"></div>
                  <div class="hidden bg-teal-50 text-teal-700"></div>
                  <span aria-hidden="true" :class="['bg-teal-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>

            <div class="flex items-center justify-center">
              <RadioGroupOption value="cyan" v-slot="{ active, checked }" @click="setColor('cyan')">
                <div :class="['ring-cyan-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-cyan-500 border-cyan-500">
                    cyan
                  </RadioGroupLabel>
                  <div class="hidden bg-cyan-100 text-cyan-900"></div>
                  <div class="hidden hover:bg-cyan-200"></div>
                  <div class="hidden bg-cyan-400"></div>
                  <div class="hidden bg-cyan-50 text-cyan-700"></div>
                  <span aria-hidden="true" :class="['bg-cyan-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>

            <div class="flex items-center justify-center">
              <RadioGroupOption value="sky" v-slot="{ active, checked }" @click="setColor('sky')">
                <div :class="['ring-sky-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-sky-500 border-sky-500">
                    Sky
                  </RadioGroupLabel>
                  <div class="hidden bg-sky-100 text-sky-900"></div>
                  <div class="hidden hover:bg-sky-200"></div>
                  <div class="hidden bg-sky-400"></div>
                  <div class="hidden bg-sky-50 text-sky-700"></div>
                  <span aria-hidden="true" :class="['bg-sky-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>
            
            <div class="flex items-center justify-center">
              <RadioGroupOption value="blue" v-slot="{ active, checked }" @click="setColor('blue')">
                <div :class="['ring-blue-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-blue-500 border-blue-500">
                    blue
                  </RadioGroupLabel>
                  <div class="hidden bg-blue-100 text-blue-900"></div>
                  <div class="hidden hover:bg-blue-200"></div>
                  <div class="hidden bg-blue-400"></div>
                  <div class="hidden bg-blue-50 text-blue-700"></div>
                  <span aria-hidden="true" :class="['bg-blue-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>

            <div class="flex items-center justify-center">
              <RadioGroupOption value="indigo" v-slot="{ active, checked }" @click="setColor('indigo')">
                <div :class="['ring-indigo-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-indigo-500 border-indigo-500">
                    indigo
                  </RadioGroupLabel>
                  <div class="hidden bg-indigo-100 text-indigo-900"></div>
                  <div class="hidden hover:bg-indigo-200"></div>
                  <div class="hidden bg-indigo-400"></div>
                  <div class="hidden bg-indigo-50 text-indigo-700"></div>
                  <span aria-hidden="true" :class="['bg-indigo-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>

            <div class="flex items-center justify-center">
              <RadioGroupOption value="violet" v-slot="{ active, checked }" @click="setColor('violet')">
                <div :class="['ring-violet-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-violet-500 border-violet-500">
                    violet
                  </RadioGroupLabel>
                  <div class="hidden bg-violet-100 text-violet-900"></div>
                  <div class="hidden hover:bg-violet-200"></div>
                  <div class="hidden bg-violet-400"></div>
                  <div class="hidden bg-violet-50 text-violet-700"></div>
                  <span aria-hidden="true" :class="['bg-violet-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>

            <div class="flex items-center justify-center">
              <RadioGroupOption value="purple" v-slot="{ active, checked }" @click="setColor('purple')">
                <div :class="['ring-purple-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-purple-500 border-purple-500">
                    purple
                  </RadioGroupLabel>
                  <div class="hidden bg-purple-100 text-purple-900"></div>
                  <div class="hidden hover:bg-purple-200"></div>
                  <div class="hidden bg-purple-400"></div>
                  <div class="hidden bg-purple-50 text-purple-700"></div>
                  <span aria-hidden="true" :class="['bg-purple-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>

            <div class="flex items-center justify-center">
              <RadioGroupOption value="fuchsia" v-slot="{ active, checked }" @click="setColor('fuchsia')">
                <div :class="['ring-fuchsia-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-fuchsia-500 border-fuchsia-500">
                    fuchsia
                  </RadioGroupLabel>
                  <div class="hidden bg-fuchsia-100 text-fuchsia-900"></div>
                  <div class="hidden hover:bg-fuchsia-200"></div>
                  <div class="hidden bg-fuchsia-50 text-fuchsia-700"></div>
                  <span aria-hidden="true" :class="['bg-fuchsia-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>

            <div class="flex items-center justify-center">
              <RadioGroupOption value="pink" v-slot="{ active, checked }" @click="setColor('pink')">
                <div :class="['ring-pink-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-pink-500 dark:text-pink-500 border-pink-500">
                    pink
                  </RadioGroupLabel>
                  <div class="hidden bg-pink-100 text-pink-900"></div>
                  <div class="hidden hover:bg-pink-200"></div>
                  <div class="hidden bg-pink-400"></div>
                  <div class="hidden bg-pink-50 text-pink-700"></div>
                  <span aria-hidden="true" :class="['bg-pink-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>

            <div class="flex items-center justify-center">
              <RadioGroupOption value="rose" v-slot="{ active, checked }" @click="setColor('rose')">
                <div :class="['ring-rose-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                  <RadioGroupLabel as="span" class="sr-only text-rose-500 dark:text-rose-500 border-rose-500">
                    rose
                  </RadioGroupLabel>
                  <div class="hidden bg-rose-100 text-rose-900"></div>
                  <div class="hidden hover:bg-rose-200"></div>
                  <div class="hidden bg-rose-400"></div>
                  <div class="hidden bg-rose-50 text-rose-700"></div>
                  <span aria-hidden="true" :class="['bg-rose-500', 'h-8 w-8 border border-black border-opacity-10 rounded-full']" />
                </div>
              </RadioGroupOption>
            </div>

          </div>
        </RadioGroup>
      </MenuItems>
    </transition>
  </Menu>
</template>


