<template>
  <div class="search">
        <input
            type="text"
            v-model="searchData"
            placeholder="Type Username"
        >
  </div>
</template>

<script>
// import { getItem, DATA_API } from '@/helpers/localStorage'
export default {
    name: 'ConSearch',
    props: {
        users: {
            required: true
        }
    },
    data() {
        return {
            searchData: '',
            // users: getItem(DATA_API)
        }
    },
    methods: {
        findBySearch() { 
            console.log(this.$store.state.users.users);
            // let prev = [...this.$store.state.users.users]
            // this.users.filter(item => {
            //     if(item.username.toLowerCase().includes(this.searchData.toLowerCase())) return item
            // })

            let filtered = 'j'
            this.$emit('findBySearch', filtered)
        }
    },
    watch: {
        searchData: function() {
            this.findBySearch()
        }
    },

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
</style>