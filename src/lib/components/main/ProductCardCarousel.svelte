<script lang="ts">
    import {goto} from "$app/navigation";

    export let product;
</script>

<swiper-slide class="rounded-md shadow-md aspect-[4/2] w-full h-full space-y-4 cursor-pointer" on:click={()=>goto(`/products/${product}`)}>



        <img src="/coding%20picture.jpg" alt="pic" class="aspect-square rounded-t-md">


        <div class="">
            {product}
        </div>



</swiper-slide>