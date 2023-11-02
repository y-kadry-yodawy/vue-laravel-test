<template>
    <transition name="popup">
        <div v-if="show" class="popup-mask">
            <div class="popup-container">

                <div class="popup-close-button-div">
                    <button class="popup-close-button" @click="$emit('close')"></button>
                </div>

                <div class="popup-body-div">
                    <slot class="popup-body-text" name="body">WE NOTICED YOU ARE FROM CANADA</slot>
                </div>

                <div class="popup-action-button-div">
                    <button class="popup-action-button">VISIT CA SHOP</button>
                </div>

            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        show: Boolean
    }
}
</script>