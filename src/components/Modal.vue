<template>
    <div class="back-modal">
        <div class="modal">
            <div class="wrapper">
                <form class="form" @submit.prevent="sendForm">
                    <div class="modal-header">
                        <div class="modal-header__title"><slot name="modal-header-title"></slot></div>
                        <div
                            class="modal-header__hide"
                            @click="hide"
                        >
                            x
                        </div>
                    </div>
                    <div class="modal-body">
                        <slot></slot>
                    </div>
                    <div class="modal-footer">
                        <div class="error">
                            <div>{{error}}</div>
                        </div>
                        <slot name="modal-footer">
                            <div class="btn-group">
                                <button
                                    class="modal-footer__btn btn-submit"
                                    type="submit"
                                >
                                    OK
                                </button>
                                <button
                                    class="modal-footer__btn btn-cancel"
                                    @click="hide"
                                    type="submit"
                                >
                                    Cancel
                                </button>
                            </div>
                        </slot>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ConModal',
    props: {
        error: {
            type: String,
        }
    },
    methods: {
        hide() {
            this.$emit('hideModal')
        },
        sendForm() {
            this.$emit('sendForm')
        }
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
    input {
        display: block;
        height: 25px;
        width: 100%;
        border: 1px solid #dfdfdf;
        outline: none;
    }
    .wrapper {
        width: 80%;
        margin: 0 auto;
    }
    .back-modal {
        position: fixed;
        background: rgba(82, 82, 82, 0.288);
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        z-index: 100;
    }
    .modal {
        margin: 10% auto 0;
        width: 40%;
        background: #fff;
        &-header {
            display: flex;
            justify-content: space-between;
            padding: 20px 0 5px;
            border-bottom: 1px solid #f7f7f7;
            &__title {
                font-size: 20px;
            }
            &__hide {
                font-size: 20px;
                cursor: pointer;
            }
        }
        &-body {
            padding: 0 0 25px;
            border-bottom: 1px solid #f7f7f7;
            > .details {
                position: relative;
                width: 100%;
            }
        }
        &-footer {
            padding: 10px 0;
            display: flex;
            justify-content: space-between;
        }
    }
    .error {
        color: red;
    }
    .btn-group {
        display: flex;
        margin: 0 0 0 auto;
    }
    .btn-submit { 
        margin-right: 5px;
        background: green;
        color: #f7f7f7;
    }
    
    @media (max-width: 768px) {
        .modal {
            width: 80%;
        }
        .details {
            display: block;
        }
    }
    @media (max-height: 450px) {
        .modal {
            margin-top: 0;
            transform: scale(0.8);
        }
    }
</style>