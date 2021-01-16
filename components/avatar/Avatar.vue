<template>
    <svg v-if="gender === 'male'" viewBox="0 0 165 328" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="33" y="240" width="100" height="38" rx="16" :fill="pants"/>
        <rect x="33" y="250" width="46" height="61" rx="16" :fill="pants"/>
        <rect x="87" y="249" width="46" height="61" rx="16" :fill="pants"/>
        <path d="M150 165C150 157.8 143.667 153.333 140.5 152L122 155C120 179.5 119.1 228.5 131.5 228.5C143.9 228.5 149 216.167 150 210V165Z" :fill="shirtSecondary"/>
        <path d="M16 167C16 159.8 22.3333 155.333 25.5 154L44 157C46 181.5 46.9 230.5 34.5 230.5C22.1 230.5 17 218.167 16 212V167Z" :fill="shirtSecondary"/>
        <rect x="33" y="151" width="100" height="116" rx="16" :fill="shirt"/>
        <circle cx="82.5" cy="93.5" r="82.5" :fill="skin"/>
        <rect x="20" y="299" width="59" height="29" rx="14.5" :fill="shoes"/>
        <rect x="87" y="299" width="59" height="29" rx="14.5" :fill="shoes"/>
        <rect x="45" y="61" width="25" height="9" rx="4.5" fill="black" fill-opacity="0.26"/>
        <rect x="96" y="61" width="25" height="9" rx="4.5" fill="black" fill-opacity="0.26"/>
        <circle cx="58" cy="85" r="8" fill="#292929"/>
        <circle cx="109" cy="85" r="8" fill="#292929"/>
        <path d="M64.5 110C71.1667 115.667 87.9 123.6 101.5 110" stroke="black" stroke-opacity="0.26" stroke-width="10" stroke-linecap="round"/>
        <path d="M161.5 69.5C94.7 2.69999 28.6667 41.6667 4 69.5C8.5 45.5 37 12 82 10.5C133 12 157 49.5 161.5 69.5Z" fill="black" fill-opacity="0.1"/>
        <path d="M114 0H80.0208L52.5 7.49156e-06C32.5 0 28.5208 25.5 29.0208 34C29.5208 42.5 36.5 48 42.5208 48H124.521C129.021 47.8333 137.821 43.5 137.021 27.5C136.221 11.5 124.521 0 114 0Z" :fill="hair"/>
    </svg>
    <svg v-else viewBox="0 0 165 319" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M162 231V80H4V231H162Z" :fill="hair"/>
        <rect x="33" y="231" width="100" height="38" rx="16" :fill="pants"/>
        <rect x="33" y="241" width="46" height="61" rx="16" :fill="pants"/>
        <rect x="87" y="240" width="46" height="61" rx="16" :fill="pants"/>
        <path d="M150 156C150 148.8 143.667 144.333 140.5 143L122 146C120 170.5 119.1 219.5 131.5 219.5C143.9 219.5 149 207.167 150 201V156Z" :fill="shirtSecondary"/>
        <path d="M16 158C16 150.8 22.3333 146.333 25.5 145L44 148C46 172.5 46.9 221.5 34.5 221.5C22.1 221.5 17 209.167 16 203V158Z" :fill="shirtSecondary"/>
        <rect x="33" y="142" width="100" height="116" rx="16" :fill="shirt"/>
        <circle cx="82.5" cy="84.5" r="82.5" :fill="skin"/>
        <rect x="20" y="290" width="59" height="29" rx="14.5" :fill="shoes"/>
        <rect x="87" y="290" width="59" height="29" rx="14.5" :fill="shoes"/>
        <rect x="45" y="52" width="25" height="9" rx="4.5" fill="black" fill-opacity="0.26"/>
        <rect x="96" y="52" width="25" height="9" rx="4.5" fill="black" fill-opacity="0.26"/>
        <circle cx="58" cy="76" r="8" fill="#292929"/>
        <circle cx="109" cy="76" r="8" fill="#292929"/>
        <circle cx="122.5" cy="97.5" r="5.5" fill="black" fill-opacity="0.12"/>
        <circle cx="42.5" cy="97.5" r="5.5" fill="black" fill-opacity="0.12"/>
        <path d="M64.5 101C71.1667 106.667 87.9 114.6 101.5 101" stroke="black" stroke-opacity="0.26" stroke-width="10" stroke-linecap="round"/>
        <path d="M161.5 60.5C94.7 -6.30001 28.6667 32.6667 4 60.5C8.5 36.5 37 3.00002 82 1.5C133 3.00002 157 40.5 161.5 60.5Z" fill="black" fill-opacity="0.1"/>
        <path d="M82 32V0.694673C135.67 -5.76875 159.029 36.4619 163 57.3852L165 81.5L154.849 77.8942V93.4312C152.341 99.8947 148.788 96.1243 147.325 93.4312V77.8942C134.786 77.8942 122.037 72.0937 117.23 69.1934L82 32Z" :fill="hair"/>
        <path d="M83 31.9709V0.665528C29.3302 -5.7979 5.9709 36.4328 2 57.3561L0 81.4709L10.1508 77.865V93.4021C12.6587 99.8655 16.2116 96.0952 17.6746 93.4021V77.865C30.2143 77.865 42.963 72.0645 47.7698 69.1643L83 31.9709Z" :fill="hair"/>
    </svg>

</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        gender: { type: String, default: 'male' },
        hair: { type: String, default: '#2C1E15' },
        pants: { type: String, default: '#3E3E3E' },
        shirt: { type: String, default: '#898989' },
        shirtSecondary: { type: String, default: '#707070' },
        shoes: { type: String, default: '#231616' },
        skin: { type: String, default: '#F08947' },
    }
})
</script>