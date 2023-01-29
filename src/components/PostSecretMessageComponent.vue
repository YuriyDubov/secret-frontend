<template>
    <h1>Secret message</h1>
    <p>Please provide your secret message below</p>
    <textarea v-bind:value='message' v-on:input='textAreaChangeHandler'></textarea>
    <button v-on:click='submitHandler'>submit</button>
    <div v-if='!!secretUrl'>
        <p>Your secret url:</p>
        <input type='text' disabled v-bind:value='secretUrl' style='width: 250px;' />
        <button v-on:click='goToButtonHandler'>Go to view content</button>
    </div>
</template>

<script lang="ts">
    import { postMessage } from '../api/api';

    export default {
        data() {
            return {
                message: '',
                secretUrl: ''
            }
        },
        methods: {
            textAreaChangeHandler(event: any) {
                this.message = event?.target?.value;
            },
            async submitHandler() {
                const resp = await postMessage(this.message);

                if (resp && !!resp.urlGuid) {
                    this.secretUrl = resp.urlGuid;
                }
            },
            goToButtonHandler() {
                this.$router.push({ path: `/${this.secretUrl}` });
            }
        }
    }
</script>