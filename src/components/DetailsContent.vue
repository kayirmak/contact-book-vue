<template>
    <div class="details-content">
        <div class="content-contact" v-if="tab === 'contacts'">
            <div class="content-item">
                <p class="content-item__label">phone:</p>
                <h4>{{content.phone}}</h4>
            </div>

            <div class="content-item">
                <p class="content-item__label">email:</p>
                <h4>{{content.email}}</h4>
            </div>

            <div class="content-item">
                <p class="content-item__label">address:</p>
                <h4>{{content.address.country}}</h4>
            </div>

            <div class="content-item">
                <p class="content-item__label">website:</p>
                <h4><a :href="`http://${content.website}`">{{content.website}}</a></h4>
            </div>
        </div>

        <div class="content-company" v-if="tab === 'company'">
            <div class="content-item" v-for="item, idx in Object.keys(content)" :key="idx">
                <p class="content-item__label">{{item}}:</p>
                <h4>{{content[item]}}</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConDetailsContent',
    props: {
        content: {
            required: true
        },
        tab: {
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
    p, h1, h2, h3, h4, h5, h6 {
        margin: 0;
    }
    .content-item {
        margin-top: 15px;
        &__label {
            color: rgb(170, 170, 170);
            font-size: 14px;
        }
    }
    @media (max-height: 400px) {
        .content-item {
            margin-top: 5px;
        }
    }

</style>