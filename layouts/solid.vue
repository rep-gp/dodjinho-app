<template>
    <div class="application">
        <div class="background" />
        <div class="lighter-streak" />
        <Nuxt />
    </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');

body {
    margin: 0;
    width: 100vw !important;
    height: 100vh !important;
    overflow: hidden !important;
    .application {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        .background {
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: #645BD0;
            z-index: -1;
        }
        overflow: hidden;
    }
    .lighter-streak {
        top: -46vh;
        left: 0;
        position: absolute;
        width: 70vw;
        height: 110vh;
        background: #6D63E1;
        transform: rotate(45deg);
        z-index: -1;
    }
}

* {
    font-family: Poppins, sans-serif;
}
</style>