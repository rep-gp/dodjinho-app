import Vue from 'vue'
import WipModal from '@/components/WipModal'

Vue.mixin({
    methods: {
        showWipModal (text) {
            this.$modal.show(WipModal, { text }, { width: '70%', height: '130px' })
        }
    }
})
