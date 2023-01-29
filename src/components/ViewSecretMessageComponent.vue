<template>
    <h1>Secret message</h1>
    <textarea disabled v-bind:value='message'></textarea>
</template>

<script lang="ts">
    import { getMessage } from '../api/api';

    export default {
        data() {
            return {
                message: ''
            }
        },
        async mounted() {
            const params = this.$route.params;
            const secretUrl = params.id;

            if (secretUrl) {
                const resp = await getMessage(secretUrl);
                this.message = resp.text || '';
            }
        }
    }
</script>