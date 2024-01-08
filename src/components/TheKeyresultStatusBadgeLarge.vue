<script>
    export default {
        props: {
            deviation: {type: Number}
        },
        data () {
            return {
                status: [
                    {
                    id: "1",
                    name: "Exceeded",
                    textColor: "text-emerald-800 dark:text-emerald-400",
                    backgroundColor: "bg-emerald-100 dark:bg-emerald-400/20",
                    circleColor: "text-emerald-400 dark:text-emerald-400",
                    thresholdTo: 999999
                    },
                    {
                    id: "2",
                    name: "On track",
                    textColor: "text-green-800 dark:text-green-400",
                    backgroundColor: "bg-green-100 dark:bg-green-400/20",
                    circleColor: "text-green-400 dark:text-green-400",
                    thresholdFrom: -10,
                    thresholdTo: 10
                    },
                    {
                    id: "3",
                    name: "At risk",
                    textColor: "text-amber-800 dark:text-yellow-400",
                    backgroundColor: "bg-amber-100 dark:bg-yellow-400/20",
                    circleColor: "text-amber-400 dark:text-yellow-600",
                    thresholdFrom: -30,
                    thresholdTo: -10
                    },
                    {
                    id: "4",
                    name: "Off track",
                    textColor: "text-rose-800 dark:text-rose-400",
                    backgroundColor: "bg-rose-100 dark:bg-rose-400/20",
                    circleColor: "text-rose-400 dark:text-rose-600",
                    thresholdFrom: -9999999,
                    thresholdTo: -30
                    }
                ]
            }
        },
        computed: {
            statusElement () {
                return this.status.find(
                    (element) => this.deviation >= element.thresholdFrom && this.deviation < element.thresholdTo
                );
            }
        }
    }
</script>
<template>
    <div class="flex flex-shrink-0">
        <span :class="['flex flex-shrink-0 items-center px-3 py-0.5 rounded-full text-sm font-medium', statusElement.backgroundColor, statusElement.textColor]">
        <svg :class="['-ml-1 mr-1.5 h-2 w-2', statusElement.circleColor]" fill="currentColor" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="3" />
        </svg>
        {{statusElement.name}}
     </span>
    </div>
</template>