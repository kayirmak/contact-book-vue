<template>
    <div class="users">
        <div class="users-top-bar">
            <!-- input search -->
            <div class="search">
                <input
                    type="text"
                    v-model="searchData"
                    placeholder="Type Username"
                >
            </div>

            <!-- select for sorting -->
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
                :users="usersData"
                :selectedVal="selectedSortVal"
                @showModal="showModal"
            />   
            <Details 
                @showModal="showModal"
            />
            <Modal
                v-if="isShow"
                @hideModal="hideModal"
                @sendForm="sendForm"
                :error="error"
            >   
                <template v-slot:modal-header-title>Изменить</template>
                <div
                    class="form-item"
                    v-for="item, idx in Object.keys(userContacts)"
                    :key="idx"
                >
                    <label :for="`contact-${item}`">{{item}}</label>
                    <input :type="userContacts[item].type" :id="`contact-${item}`" v-model="userContacts[item].value">
                </div>
            </Modal>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import { actionTypes, getterTypes } from '@/store/modules/users'

import User from '@/components/User'
import Details from '@/components/Details'
import Modal from '../components/Modal.vue'

export default {
    name: 'ConUsers',
    components: {
        User,
        Details,
        Modal,
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
            isSort: false,
            selectedSortVal: '',
            searchData: ''
        }
    },
    computed: {
        ...mapGetters({
            users: getterTypes.users,
        }),

        // if user entried to input search, then returning sorted data else just data 
        usersData() {
            if(this.searchData) {
                return this.users.filter(item => {
                    if(item.username.toLowerCase().includes(this.searchData.toLowerCase())) return item
                })
            }
            return this.users
        }
    },
    methods: {
        ...mapActions({
            changeUserData: actionTypes.changeUserData,
            sortUsersData: actionTypes.sortUsersData,
            getUsers: actionTypes.getUsers,
        }),

        //sorting data by alphabet
        sortData(value = this.selectedSortVal) {
            if(value) {
                this.isSort = true
                //sending to action with data for sorting
                this.sortUsersData([...this.users])
            }  
            else {
                this.isSort = false
                this.getUsers()
            }
        },
        //showing the modal window
        showModal(user) {
            this.isShow = true
            this.user = user
        },

        hideModal() {
            this.isShow = false
            this.clearForm()
        },

        //sending edited data and mini validate form
        sendForm() {
            //forming edited data
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

            //sending edited data
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
        // running when entried data changes
        selectedSortVal: function() {
            this.sortData()
        }
    }
}
</script>

<style lang="scss" scoped>
    input {
        outline: none;
        border: 1px solid #efefef;
        color: #494949;
        height: 30px;
        font-family: 'Didact Gothic';
    }
    .search {
        margin-left: 15px;
    }
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