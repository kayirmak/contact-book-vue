<template>
<div>
    <div v-if="!user">dfds</div>

    <div v-else class="details" ref="details">
        <div class="wrapper">
            <button class="details-btn" @click="showModal(user)">Edit</button>
            <div class="details-image">
                <img src="@/assets/img/photo.jpg" alt="">
            </div>
            <div class="details-title">
                <h3>{{user.username}}</h3>
                <p>{{user.name}}</p>
            </div>
            <Tabs 
                :user="formedUser"
                :tabs="tabs"
                @showContent="showContent"
            />
            <Details-content
                :content="content"
                :tab="tab"
            />
        </div>
    </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'

import Tabs from '@/components/Tabs'
import DetailsContent from '@/components/DetailsContent'
import { getterTypes } from '@/store/modules/users'

const tabs = {
        contacts: {
            isActive: false
        },
        company: {
            isActive: false
        }
    }
    
export default {
    name: 'ConDetails',
    components: {
        Tabs,
        DetailsContent
    },
    data() {
        return {
            tabs,
            content: '',
            tab: ''
        }
    },
    computed: {
        ...mapGetters({
            user: getterTypes.user
        }),
        // forming object for render in details tabs
        formedUser() {
            const user = {...this.user}
            Object.keys(this.tabs).filter(el => {
                delete user[el]
            })
            return {contacts: {...user}, company: this.user.company, posts: this.user.posts}
        }
    },
    methods: {
        showContent(content, tab) {
            this.content = content
            this.tab = tab
        },
        showModal(user) {
            this.$emit('showModal', user)
        },
        // fixing position when scrolling
        detailsFixed() {
            let vm = this
            window.onscroll = function() {
                let details = vm.$refs.details
                window.pageYOffset >= vm.$refs.details.offsetTop ? details.classList.add('position-fixed') : details.classList.remove('position-fixed')
            }
        }
    },
    mounted() {
        this.detailsFixed()
    },
    updated() {
        this.detailsFixed()
    }

}
</script>

<style lang="scss" scoped>
    button {
        border: none;
        height: 30px;
        width: 60px;
        border-radius: 3px;
        cursor: pointer;
    }
    .wrapper {
        width: 80%;
        margin: 0 auto;
    }
    .details {
        position: absolute;
        right: 0;
        width: 35%;
        border-left: 1px solid #f7f7f7;
        &-image {
            width: 70px;
            height: 70px;
            margin: 0 auto 5px;
            > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 15px;
            }
        }
        &-title {
            text-align: center;
            > h3, p {
                margin: 0;
            }
        }
    }
    .position-fixed {
        position: fixed;
        right: 0;
        margin-top: -46px;
    }
    @media (max-width: 768px) {
        .details {
            display: none;
                &-btn {
                    display: none;
                }
        }
    }
    @media (max-width: 1024px) {
        .details {
            font-size: 12px;
        }
    }
    @media (max-height: 350px) {
        .details {
            font-size: 10px;
        }
    }

</style>