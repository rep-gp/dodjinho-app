<template>
    <div class="friends-row">
        <avatar-face class="spacer" bordered :data="avatar" :size="9" />

        <div class="info">
            {{ name }}
            <points-label :value="points" is-dark />
        </div>

        <div class="actions">
            <div class="actions-btn">
                <group-icon class="actions-icon" />
            </div>
            <div class="actions-btn">
                <chat-icon class="actions-icon" />
            </div>
        </div>
    </div>
</template>

<script>
import PointsLabel from '@/components/label/PointsLabel'
import GroupIcon from '@/static/icons/group-add.svg'
import ChatIcon from '@/static/icons/chat.svg'

export default {
    components: { PointsLabel, GroupIcon, ChatIcon },
    props: {
        name: { type: String, default: '' },
        points: { type: Number, default: 0 },
        credits: { type: Number, default: 0 },
        avatar: { type: undefined, default: null }
    }
}
</script>

<style lang="scss" scoped>
.friends-row {
    position: relative;
    display: flex;
    align-items: center;
    border: 1px solid $blue-main;
    border-radius: 4px;
    padding: 1vh 2vw;
    margin-bottom: 1vh;

    .spacer { margin-right: 2vw; }

    .info {
        font-size: 4.4vw;
    }

    .actions {
        position: absolute;
        right: 0;
        top: 0;
        bottom: 0;
        border-radius: 0 4px 4px 0;
        margin-left: auto;
        background: $blue-main;
        color: white;
        transition: $ease-out;

        &-btn {
            display: grid;
            place-items: center;
            min-height: 4vh;
            padding: 1vw;

            &:first-child {
                box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.349);
                .actions-icon { width: 6vw; }
            }
        }

        &-icon {
            width: 4vw;
            fill: $white;
        }
    }
}
</style>