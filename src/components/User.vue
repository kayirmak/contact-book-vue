<template>
    <div class="user">
        <Modal
            v-if="isShowDetailsMobile"
            @hideModal="isShowDetailsMobile=false"
        >
            <Details/>
            <template v-slot:modal-footer>&nbsp;</template> 
        </Modal>

        <div class="user-group" v-if="selectedVal === 'username'">
            <div
                v-for="group, idx in groupsName"
                :key="idx"
            >
                <div class="user-group__toggle" @click="toggleGroup">
                    {{group.group}}
                </div>
                <div class="user-group__items">
                    <div
                        class="user-item"
                        v-for="user, idx in group.children"
                        :key="idx"
                        :class="{active: isActive === user.id}"
                        @click="showDetails(user)"
                    >
                        <div class="item-title">
                            <div class="item-title__avatar">
                                <img src="@/assets/img/photo.jpg" alt="">
                            </div>
                            <div>{{user.username}}</div>
                        </div>
                        
                        <div class="el-width email">{{user.email}}</div>
                        <div class="el-width">{{user.phone}}</div>
                        <button
                            class="item-btn"
                            type="submit"
                            @click.stop="showModal(user)"
                        >
                            <i class="fa fa-edit"></i>
                        </button>
                    </div>   
                </div>
            </div>
        </div>        

        <div v-else>
            <div
                class="user-item"
                v-for="user, idx in users"
                :key="idx"
                :class="{active: isActive === user.id}"
                @click="showDetails(user)"
            >
                <div class="item-title">
                    <div class="item-title__avatar">
                        <img src="@/assets/img/photo.jpg" alt="">
                    </div>
                    <div>{{user.username}}</div>
                </div>
                <div class="el-width email">{{user.email}}</div>
                <div class="el-width">{{user.phone}}</div>
                <button
                    class="item-btn"
                    type="submit"
                    @click.stop="showModal(user)"
                >
                    <i class="fa fa-edit"></i>
                </button>
            </div>   
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Details from './Details.vue'
import Modal from './Modal.vue'


export default {
    name: 'ConUser',
    components: { 
        Modal,
        Details 
    },
    props: {
        users: {
            required: true
        },
        selectedVal: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            isActive: false,
            isShowGroup: false,
            isShowDetailsMobile: false,
        }
    },
    computed: {
        ...mapGetters({
            user: 'user'
        }),
        groupsName() {
            let groups = [...this.users]
            return groups.reduce((prevVal, newVal) => {
                let group = newVal.username[0]
                if(!prevVal[group]) prevVal[group] = {group, children: [newVal]}
                else prevVal[group].children.push(newVal)
                return prevVal
            }, {})
        }
    },
    methods: {
        ...mapActions([
            'getOneUser',
        ]),
        showDetails(user) {
            this.getOneUser(user)
            this.isActive = user.id
            this.isShowDetailsMobile = true
        },
        showModal(user) {
            this.$emit('showModal', user)
        },
        toggleGroup(e) {
            e.target.nextSibling.style.display =  !e.target.nextSibling.style.display ? 'none' : ''
            this.isShowGroup = !this.isShowGroup
        }
    }
}
</script>

<style lang="scss" scoped>
    .user {
        width: 60%;
    }
    .user-group__toggle {
        cursor: pointer;
        border: 1px solid #cccccc;
        margin-top: 5px;
    }
    .user-item {
        display: flex;
        border: 1px solid #f7f7f7;
        border-radius: 10px;
        height: 50px;
        align-items: center;
        margin: 10px 0;
        transition: 0.3s all ease;
        cursor: pointer;
    }
    .item-title {
        display: flex;
        align-items: center;
        padding-left: 10px;
        width: 33%;
        &__avatar {
            width: 40px;
            height: 40px;
            margin-right: 10px;
            > img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-radius: 5px;
            }
        }
    }
    .item-btn {
        display: none;
        border: 1px solid #ddd;
        margin-right: 15px;
    }
    .el-width {
        width: 33%;
        padding-left: 25px;
    }
    .active {
        transform: scale(1.02);
        box-shadow: 2px 8px 8px 0 rgb(231, 231, 231);
    }

    @media (max-width: 1150px) {
        .user-item {
            font-size: 14px;
        }
    }

    @media (max-width: 1024px) {
        .user-item {
            font-size: 12px;
        }
    }
    @media (max-width: 850px) {
        .user-item {
            font-size: 10px;
        }
    }
    @media (max-width: 768px) {
        .item-btn {
            display: block;
        }
        .user {
            width: 100%;
            &-item {
                font-size: 16px;
            }
        }
    }
    @media (max-width: 700px) {
        .user-item {
            font-size: 14px;
        }
        .item-title {
            width: 100%;
            margin-right: 15px;
        }   
        .el-width {
            display: none;
        }
    }
</style>