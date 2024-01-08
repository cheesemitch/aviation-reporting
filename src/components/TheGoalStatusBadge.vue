<script>
    export default {
        props: {
            goalStatus: {type: String}
        },
        data () {
            return {
                status: [
                    {
                    id: "1",
                    name: "Achieved",
                    textColor: "text-gray-800",
                    backgroundColor: "bg-gray-100",
                    circleColor: "text-gray-400",
                    thresholdFrom: 10,
                    thresholdTo: 999999
                    },
                    {
                    id: "2",
                    name: "On track",
                    textColor: "text-green-800",
                    backgroundColor: "bg-green-100",
                    circleColor: "text-green-400",
                    thresholdFrom: -10,
                    thresholdTo: 10
                    },
                    {
                    id: "3",
                    name: "At risk",
                    textColor: "text-amber-800",
                    backgroundColor: "bg-amber-100",
                    circleColor: "text-amber-400",
                    thresholdFrom: -30,
                    thresholdTo: -10
                    },
                    {
                    id: "4",
                    name: "Off track",
                    textColor: "text-rose-800",
                    backgroundColor: "bg-rose-100",
                    circleColor: "text-rose-400",
                    thresholdFrom: -9999999,
                    thresholdTo: -30
                    },
                    {
                    id: "5",
                    name: "Failed",
                    textColor: "text-gray-800",
                    backgroundColor: "bg-gray-100",
                    circleColor: "text-gray-400",
                    thresholdFrom: 10,
                    thresholdTo: 999999
                    },
                    {
                    id: "6",
                    name: "No status info",
                    textColor: "text-gray-500",
                    backgroundColor: "bg-gray-100",
                    circleColor: "text-gray-400",
                    thresholdFrom: 10,
                    thresholdTo: 999999
                    },
                ]
            }
        },
        computed: {
            statusElement () {
                if (this.goalStatus == '') {
                    return this.status.find(
                    (element) => 'No status info' == element.name
                );
                } else {
                    return this.status.find(
                    (element) => this.goalStatus == element.name
                );
                }
                
            }
        }
    }
</script>
<template>
    <span :class="['inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium', statusElement.backgroundColor, statusElement.textColor]">
        <svg :class="['-ml-0.5 mr-1.5 h-2 w-2', statusElement.circleColor]" fill="currentColor" viewBox="0 0 8 8">
            <circle cx="4" cy="4" r="3" />
        </svg>
        {{statusElement.name}}
     </span>
</template>