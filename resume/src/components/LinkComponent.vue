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
        transform: translate(-50%,-50%);
        background-color: rgba(0, 0, 0, 0.89);
        border-radius:3px;
        padding:70px 100px;
        box-shadow: 0 1px 2px rgba(184, 71, 36, 0.25);
        transition: box-shadow 0.3s ease-in-out;
    }

    .link-covering-image:hover{
        box-shadow: 0 5px 15px rgba(192, 108, 87, 0.6);
    }

</style>