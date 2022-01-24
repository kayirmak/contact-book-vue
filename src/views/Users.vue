<template>
    <div class="users">
        <div class="users-top-bar">
            <Search
                :users="this.users"
                @findBySearch="findBySearch"
            />
            <div class="top-bar__select">
                <label for="sort-select">Sort By</label>
                <select id="sort-select" v-model="selectedSortVal">
                    <option value="" selected>Default</option>
                    <option value="username">Username</option>
                </select>
            </div>
        </div>
      
        <div class="users-main">
            <User
                :users="this.users"
                :selectedVal="selectedSortVal"
            />   
            <Details 
                @showModal="showModal"
            />
            <Modal
                v-if="isShow"
                @hideModal="hideModal"
                @sendForm="sendForm"
            >   
                    <div
                        class="form-item"
                        v-for="item, idx in Object.keys(userContacts)"
                        :key="idx"
                    >
                        <label :for="`contact-${item}`">{{item}}</label>
                        <input :type="userContacts[item].type" :id="`contact-${item}`" v-model="userContacts[item].value">
                    </div>
                    <template v-slot:modal-footer>
                        {{error}}
                    </template>
            </Modal>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import User from '@/components/User'
import Details from '@/components/Details'
import Modal from '../components/Modal.vue'
import Search from '../components/Search.vue'

export default {
    name: 'ConUsers',
    components: {
        User,
        Details,
        Modal,
        Search
    },
    data() {
        return {
            user: {},
            isShow: false,
            userContacts: {
                name: {
                    value: '',
                    type: 'text'
                },
                phone: {
                    value: '',
                    type: 'tel'
                },
                email: {
                    value: '',
                    type: 'email'
                }
            },
            error: '',
            group: [],
            isSort: false,
            selectedSortVal: '',
        }
    },
    computed: {
        ...mapGetters({
            users: 'users',
            sortUsers: 'sortUsers'
        })
    },
    methods: {
        ...mapActions([
            'changeUserData',
            'sortUsersData',
            'getUsers',
            'groupsByLetter'
        ]),
        findBySearch(users) {
            // this.users = users
            this.users.filter(item => item.username.toLowerCase().includes(this.searchData.toLowerCase()))
            console.log(users);
        },
        sortData(value = this.selectedSortVal) {
            console.log(this.users, 'USERS');
            if(value) {
                this.isSort = true
                this.sortUsersData([...this.users])
            }  
            else {
                this.isSort = false
                this.getUsers()
            }
        },
        showModal(user) {
            console.log(user, 'USER');
            this.isShow = true
            this.user = user
        },
        hideModal() {
            this.isShow = false
            this.clearForm()
        },
        sendForm() {
            this.user = {
                ...this.user,
                name: this.userContacts.name.value,
                phone: this.userContacts.phone.value,
                email: this.userContacts.email.value
            }
            
            for (let key in this.userContacts) {
                if(this.userContacts[key].value === '') {
                    return this.error = 'Заполните все поля'
                }
            }
            this.changeUserData(this.user)
            this.sortData()
            this.hideModal()
            this.clearForm()
        },
        clearForm() {
            for (let key in this.userContacts) {
                this.userContacts[key].value = ''
                this.error = ''
            }
        }
    },
    watch: {
        selectedSortVal: function() {
            this.sortData()
        }
    },
    mounted() {
    },
    updated() {
        console.log(this.isSort);
    }

}
</script>

<style lang="scss" scoped>
    select {
        outline: none;
        border: 1px solid #efefef;
        color: #494949;
        height: 30px;
        font-family: 'Didact Gothic';
    }
    #sort-select {
        margin-left: 15px;
    }
    .users {
        &-top-bar {
            width: 60%;
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
        }
    }
    .users-main {
        display: flex;
        justify-content: space-between;
        padding: 0 15px;
    }
    .form-item {
        margin-top: 15px;
    }
    @media (max-width: 768px) {
        .users-top-bar {
            width: 95%;
            margin: 20px auto 0;
        }
        .search {
            margin-left: 0;
        }
    }
</style>