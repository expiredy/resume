<template>
    <div class="link-container">
        <img src={{ pathForImage }} class="link-covering-image">
    </div>
</template>

<script>
export default {
    name: 'LinkComponent',
    props: {
        linkForSocialMedia: String,
        pathForImage: String,
    }
}
</script>

<style>
    .link-covering-image{
        
    }

</style>