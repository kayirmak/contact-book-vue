<template>
    <div class="tabs">
        <div
            class="tabs-item"
            v-for="tab, idx in Object.keys(tabs)"
            :key="idx"
            :class="{active: tabs[tab].isActive}"
            @click="showContent(tab)"
        >
        {{tab}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConTabs',
    props: {
        user: {
            type: Object,
            required: true
        },
        tabs: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isUser: '',
            defaultTab: Object.keys(this.user)[0]
        }
    },
    methods: {
        showContent(tab) {
            this.$emit('showContent', this.user[tab], tab)
            for(let key in this.tabs) {
                if(key !== tab) {
                    this.tabs[key].isActive = false
                }
                this.tabs[tab].isActive = true
            }
        }
    },
    watch: {
        user: function() {
            this.showContent(this.defaultTab)
        }
    },
    mounted() {
        this.showContent(this.defaultTab)
    }

}
</script>

<style lang="scss" scoped>
    .tabs {
        display: flex;
        transition: all 1s ease;
        background: beige;
        padding: 2px;
        justify-content: space-evenly;
        margin: 0 auto;
        border-radius: 5px;
        &-item {
            padding: 5px ;
            width: 50%;
            text-align: center;
            border-radius: 5px;
            transition: 0.3s all ease;
            cursor: pointer;
        }
    }
    .active {
        background: chartreuse;
    }

</style>